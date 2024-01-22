import { displayFilteredRecipes } from './cards.js'

const CHARLVLMIN = 3

// filter recipes with searchBar
const searchInput = document.getElementById('searchInput')

searchInput.addEventListener('keyup', (e) => {
    const cards = document.querySelectorAll('.cards')
    const characters = e.target.value
    const filteredElements = filterBySearchBar(characters, cards)
    displayFilteredRecipes(filteredElements, cards, characters)
})

// filter recipes in searchBar
function filterBySearchBar(letters, elements) {
    if (letters.length >= CHARLVLMIN) {
        const filteredElements = Array.from(elements).filter((element) =>
            element.textContent.toLowerCase().includes(letters)
        )
        return filteredElements
    } else {
        return Array.from(elements)
    }
}
