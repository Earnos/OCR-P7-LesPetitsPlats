import recipes from './data/recipes.js'

// Change in function of your data source
export default function getData(data) {
    data = recipes
    return data
}

export function showRecipesNumber() {
    const counter = document.getElementById('counter-recipes')
    const mainSection = document.querySelector('section')
    const blockCards = mainSection.querySelectorAll('.cards')
    const elementsBlock = Array.from(blockCards).filter(function (element) {
        return window.getComputedStyle(element).display === 'block'
    })
    // number of block's display elements
    const nombreElementsBlock = elementsBlock.length
    counter.textContent = nombreElementsBlock + ' ' + 'recette(s)'
    return nombreElementsBlock
}
