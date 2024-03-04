import { createContext, useState, } from 'react';

export const MealsContext = createContext({
    selectedMeals: 0,
    setSelectedMeals: () => {},
    numberOfMeals: () => {}   
});

export function MealsCountContextProvider({ children }) {    
    const [selectedMeals, setSelectedMeals] = useState(0);
    
    
    function numberOfMeals(count) {
        setSelectedMeals(prevCount => prevCount + count)
    }

    return (
        <MealsContext.Provider value={{
            selectedMeals,
            setSelectedMeals,
            numberOfMeals
        }}>
            {children}
        </MealsContext.Provider>   
    )
}