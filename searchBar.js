import createCards from './cards.js'
import { displayDropdown } from './filters.js'
import getData from './data.js'
import { initializeDropdown } from './filters.js'
import { showRecipesNumber } from './data.js'

let data = getData()
const CHARLVLMIN = 3

// filter recipes with searchBar
const searchInput = document.getElementById('searchInput')

searchInput.addEventListener('keyup', (e) => {
    const domCards = document.getElementById('main-section')
    domCards.innerHTML = ''
    createCards(data)
    const cards = document.querySelectorAll('.cards')
    const characters = e.target.value
    let charSearch = ''
    if (characters.length >= CHARLVLMIN) {
        const filteredElements = filterBySearchBar(characters, cards)
        showRecipesNumber()
        //displayFilteredRecipes(filteredElements, cards, characters)
        charSearch = characters
    } else {
        const filteredElements = filterBySearchBar('', cards)
        showRecipesNumber()
        //displayFilteredRecipes(filteredElements, cards, '')
    }
    displayDropdown('ingredients', 'drop-content1', charSearch, data)
    displayDropdown('appareils', 'drop-content2', charSearch, data)
    displayDropdown('ustensils', 'drop-content3', charSearch, data)
    initializeDropdown('drop-content1')
    initializeDropdown('drop-content2')
    initializeDropdown('drop-content3')
})

//filter recipes in searchBar
// export function filterBySearchBar(letters, elements) {
//     const filteredElements = Array.from(elements).filter(
//         (element) =>
//             element.textContent &&
//             element.textContent.toLowerCase().includes(letters.toLowerCase())
//     )
//     showRecipesNumber(filteredElements)
//     return filteredElements
// }
export function filterBySearchBar(letters, elements) {
    if (letters.length >= CHARLVLMIN) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].textContent.toLowerCase().includes(letters)) {
                elements[i].style.display = 'block'
            } else {
                elements[i].style.display = 'none'
            }
        }
    }
    if (letters.length < CHARLVLMIN) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block'
        }
    }
    const sortedElements = Array.from(elements)
    //showRecipesNumber(elements)
    return sortedElements
}
// const cards = document.querySelectorAll('.cards')
// filterBySearchBar(searchInput, cards)
