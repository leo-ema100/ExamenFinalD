import axios from "axios";

const url = 'https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail' 

const urldetails = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const getAllDrinks = async () => {
    const response = await axios.get(url)
    return response.data.drinks
}

export const getDrinkById = async (id)=> {
    const response = await axios.get (`${urldetails}${id}`)
    return response.data.drinks
}