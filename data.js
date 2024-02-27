import recipes from './data/recipes.js'

// Change in function of your data source
export default function getData(data) {
    data = recipes
    return data
}

export function showRecipesNumber(filteredRecipes) {
    const counter = document.getElementById('counter-recipes')
    // const mainSection = document.querySelector('section')
    // const blockCards = mainSection.querySelectorAll('.cards')
    // console.log(blockCards.length)
    // const elementsBlock = Array.from(blockCards).filter(function (element) {
    //     return window.getComputedStyle(element).display === 'block'
    // })
    // // Nombre d'éléments affichés en bloc
    // const nombreElementsBlock = elementsBlock.length

    counter.textContent = filteredRecipes.length + ' ' + 'recette(s)'
    // counter.textContent = nombreElementsBlock + ' ' + 'recette(s)'
}
