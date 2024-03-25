import createCards from './cards.js'
import { displayDropdown, fullFilter } from './filters.js'
import getData from './data.js'
import {
    initializeDropdown,
    getTags,
    filterRecipes,
    filterDataFromFront,
} from './filters.js'
import { showRecipesNumber } from './data.js'
import { errorMsgNoRecipes, displayFilteredElements } from './cards.js'

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
    let searchInput = ''
    if (characters.length >= CHARLVLMIN) {
        searchInput = characters
        // const filteredElements = filterBySearchBar(characters, cards)
        // //showRecipesNumber()
        // errorMsgNoRecipes(filteredElements, characters)
        // charSearch = characters
    } else {
        // const filteredElements = filterBySearchBar('', cards)
        // //showRecipesNumber()
        // errorMsgNoRecipes(filteredElements, characters)
    }
    const dataFiltered = fullFilter(searchInput, getTags(), data)
    console.log(dataFiltered)
    // console.log(filterDataFromFront())
    // const filterAfter = filterRecipes(filterDataFromFront(), getTags())
    // displayFilteredElements(filterAfter)
    // showRecipesNumber()
    displayDropdown('ingredients', 'drop-content1', charSearch, dataFiltered)
    displayDropdown('appareils', 'drop-content2', charSearch, dataFiltered)
    displayDropdown('ustensils', 'drop-content3', charSearch, dataFiltered)
    initializeDropdown('drop-content1')
    initializeDropdown('drop-content2')
    initializeDropdown('drop-content3')
})

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
    return sortedElements
}
