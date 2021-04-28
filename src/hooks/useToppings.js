import {useState} from "react";

export const useToppings = (defaultTopping) => {
    const [toppings, setToppings] = useState(defaultTopping || getDefaultToppings());
    const checkTopping = (index) => {
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings);
    }
    return {
        toppings,
        setToppings,
        checkTopping
    }
}

const toppingList = [
    "Extra cheese",
    "Pepperoni",
    "Sausage",
    "Onions",
    "Peppers",
    "Pineapple",
    "Ham",
    "Spinach",
    "Artichokes",
    "Mushrooms"
]

function getDefaultToppings(){
    return toppingList.map(topping => {
        return {
            name: topping,
            checked: false
        }
    });
}