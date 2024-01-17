import recipes from './data/recipes.js'

export default function getData(data) {
    data = recipes
    return data
}

export function showRecipesNumber(filteredRecipes) {
    const counter = document.getElementById('counter-recipes')
    const recipes = document.getElementsByTagName('main-section')
    console.log(filteredRecipes.length)
    if (filteredRecipes === 0) {
        recipes.innerHTML =
            "<p>'Aucune recette ne correspond à votre recherche'</p>"
    }

    counter.textContent = filteredRecipes.length + ' ' + 'recette(s)'
}
