exports.up = (knex) => knex.schema.createTable("ingredients", (table) => {
    table.increments("id");
    table.text("name").notNullable();

    table.integer("meal_id").references("id").inTable("meals").onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("users");
  });

exports.down = (knex) => knex.schema.dropTable("ingredients");
