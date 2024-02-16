const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class MealsController {
  async create(request, response) {
    const {
      title,
      category,
      description,
      ingredients,
      price,
      created_at,
      img,
    } = request.body;
    const user_id = request.user.id;

    const imageFileName = request.file.filename;

    const diskStorage = new DiskStorage();

    const fileName = await diskStorage.saveFile(imageFileName);

    const [meal_id] = await knex("meals").insert({
      img: fileName,
      title,
      description,
      category,
      price,
      created_at,
      user_id,
    });

    const ingredientsInsert = ingredients.map((name) => {
      return {
        meal_id,
        name,
        user_id,
      };
    });

    await knex("ingredients").insert(ingredientsInsert);

    return response.json();
  }

  async update(request, response) {
    const { title, category, price, ingredients, description } = request.body;

    const { id } = request.params;

    const imageFileName = request.file.filename;

    const diskStorage = new DiskStorage();

    const meal = await knex("meals").where({ id }).first();

    if (meal.img) {
      await diskStorage.deleteFile(meal.img);
    }

    const filename = await diskStorage.saveFile(imageFileName);

    const updates = {
      img: filename,
      title,
      description,
      category,
      price,
    };

    const filteredUpdates = Object.fromEntries(
      Object.entries(updates).filter(([_, value]) => value !== undefined)
    );

    await knex("meals").where({ id }).update(filteredUpdates);

    await knex("ingredients").where({ meal_id: id }).delete();

    let ingredientInsert = [];

    if (typeof ingredients === "string") {
      ingredientInsert.push({
        meal_id: id,
        name: ingredients,
      });
    } else if (Array.isArray(ingredients) && ingredients.length > 0) {
      ingredientInsert = ingredients.map((ingredient) => ({
        meal_id: id,
        name: ingredient,
      }));
    }

    await knex("ingredients").insert(ingredientInsert);

    return response.status(201).json("Prato atualizado!");
  }

  async show(request, response) {
    const { id } = request.params;

    const meal = await knex("meals").where({ id }).first();
    const ingredients = await knex("ingredients")
      .where({ meal_id: id })
      .orderBy("name");

    return response.json({
      ...meal,
      ingredients,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    const diskStorage = new DiskStorage();

    const meal = await knex("meals").where({ id }).first();

    await knex("meals").where({ id }).delete();
    if (meal.img) {
      await diskStorage.deleteFile(meal.img);
    }

    return response.json();
  }

  async index(request, response) {
    const { title, ingredients,  } = request.query;

    let meals;

    if (ingredients) {
      const filterIngredients = ingredients
        .split(",")
        .map((ingredient) => ingredient.trim());

      meals = await knex("ingredients")
        .select([
          "meals.id",
          "meals.title",
          "meals.description",
          "meals.user_id",
          "meals.price",
          "meals.img",
        ])
        .whereIn("meals.user_id", function () {
          this.select("id").from("users").where({ role: "admin" });
        })
        .whereLike("meal.title", `%${title}%`)
        .whereIn("name", filterIngredients)
        .innerJoin("meals", "meals.id", "ingredients.meal_id")
        .groupBy("meals.id")
        .orderBy("meals.name");     
    } else {
      meals = await knex("meals")
        .whereIn("user_id", function () {
          this.select("id").from("users").where({ role: "admin" });
        })
        .whereLike("title", `%${title}%`)
        .orderBy("title");
    }

    const userIngredients = await knex("ingredients");
    const mealsWithIngredients = meals.map((meal) => {
      const mealIngredients = userIngredients.filter(
        (ingredient) => ingredient.meal_id === meal.id
      );

      return {
        ...meal,
        ingredients: mealIngredients,
      };
    });

    return response.json(mealsWithIngredients);
  }
}
  

module.exports = MealsController;
