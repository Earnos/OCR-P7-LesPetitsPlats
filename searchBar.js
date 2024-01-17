import { showRecipesNumber } from './data.js'

const CHARLVLMIN = 3

// filter recipes with searchBar
const searchInput = document.getElementById('searchInput')

searchInput.addEventListener('keyup', (e) => {
    const cards = document.querySelectorAll('.cards')
    const characters = e.target.value
    filterRecipes(characters, cards)
})

function filterRecipes(letters, elements) {
    if (letters.length >= CHARLVLMIN) {
        const filteredElements = Array.from(elements).filter((element) =>
            element.textContent.toLowerCase().includes(letters)
        )

        elements.forEach((element) => {
            if (filteredElements.includes(element)) {
                element.style.display = 'block'
            } else {
                element.style.display = 'none'
            }
        })
        showRecipesNumber(filteredElements)
    } else {
        elements.forEach((element) => {
            element.style.display = 'block'
        })
        showRecipesNumber(elements)
    }
}
