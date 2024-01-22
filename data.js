import recipes from './data/recipes.js'

// Change in function of your data source
export default function getData(data) {
    data = recipes
    return data
}

export function showRecipesNumber(filteredRecipes) {
    const counter = document.getElementById('counter-recipes')

    counter.textContent = filteredRecipes.length + ' ' + 'recette(s)'
}
