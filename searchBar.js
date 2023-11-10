// import getData from './data.js'
// // import getRecipes from './cards.js'

// // let recipes = getData()

// Sort method with FOR loop
const searchInput = document.getElementById('searchInput')

searchInput.addEventListener('keyup', (e) => {
    const cards = document.querySelectorAll('.cards')
    const characters = e.target.value
    filterRecipes(characters, cards)
})

function filterRecipes(letters, elements) {
    if (letters.length > 2) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].textContent.toLowerCase().includes(letters)) {
                elements[i].style.display = 'block'
            } else {
                elements[i].style.display = 'none'
            }
        }
    }
    if (letters.length < 2) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block'
        }
    }
}

// Sort methode with filter()
// function filterRecipes() {
//     const searchInput = document.getElementById('searchInput')
//     const searchTerm = searchInput.value.toLowerCase()

//     // Filtrer min 3 characters
//     const filteredRecipes = recipes.filter(
//         (recipe) =>
//             recipe.toLowerCase().includes(searchTerm) && searchTerm.length >= 3
//     )

//     // display filtered recipes
//     displayRecipes(filteredRecipes)
// }

// function displayRecipes(recipesToShow) {
//     const recipeList = document.querySelector('.main-section')

// Clean actual recipes list
// recipeList.innerHTML = ''

// add filtered recipes
//getRecipes()
// recipesToShow.forEach((recipe) => {
//     const listItem = document.createElement('li')
//     listItem.textContent = recipe
//     recipeList.appendChild(listItem)
// })
//}

//Afficher toutes les recettes au chargement initial
// window.onload = function () {
//     displayRecipes(recipes)
// }
