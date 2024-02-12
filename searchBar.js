import { displayFilteredRecipes } from './cards.js'
import { displayDropdown } from './filters.js'
import getData from './data.js'
import { initializeDropdown } from './filters.js'
import { showRecipesNumber } from './data.js'

let data = getData()
const CHARLVLMIN = 3

// filter recipes with searchBar
const searchInput = document.getElementById('searchInput')

searchInput.addEventListener('keyup', (e) => {
    const characters = e.target.value
    if (characters.length >= CHARLVLMIN) {
        const cards = document.querySelectorAll('.cards')
        const filteredElements = filterBySearchBar(characters, cards)
        displayFilteredRecipes(filteredElements, cards, characters)
        //showRecipesNumber(filteredElements)
        displayDropdown('ingredients', 'drop-content1', characters, data)
        displayDropdown('appareils', 'drop-content2', characters, data)
        displayDropdown('ustensils', 'drop-content3', characters, data)
        initializeDropdown('drop-content1')
        initializeDropdown('drop-content2')
        initializeDropdown('drop-content3')
    } else if (characters.length === 0) {
        const cards = document.querySelectorAll('.cards')
        const filteredElements = filterBySearchBar(characters, cards)
        displayFilteredRecipes(filteredElements, cards, characters)
        //showRecipesNumber(filteredElements)
        displayDropdown('ingredients', 'drop-content1', '', data)
        displayDropdown('appareils', 'drop-content2', '', data)
        displayDropdown('ustensils', 'drop-content3', '', data)
        initializeDropdown('drop-content1')
        initializeDropdown('drop-content2')
        initializeDropdown('drop-content3')
    }
})

//filter recipes in searchBar
export function filterBySearchBar(letters, elements) {
    const filteredElements = Array.from(elements).filter((element) =>
        element.textContent.toLowerCase().includes(letters.toLowerCase())
    )
    showRecipesNumber(filteredElements)
    return filteredElements
}
