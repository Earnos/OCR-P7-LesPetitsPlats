import getRecipes from './cards.js'
import getData from './data.js'

let data = getData()

// JavaScript to toggle the dropdown
const dropdownButton1 = document.getElementById('dropdown-button1')
const dropdownMenu1 = document.getElementById('dropdown-menu1')
const searchInput1 = document.getElementById('search-input1')
const dropdownButton2 = document.getElementById('dropdown-button2')
const dropdownMenu2 = document.getElementById('dropdown-menu2')
const searchInput2 = document.getElementById('search-input2')
const dropdownButton3 = document.getElementById('dropdown-button3')
const dropdownMenu3 = document.getElementById('dropdown-menu3')
const searchInput3 = document.getElementById('search-input3')

function toggleDropdowns(dropdownMenu) {
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none'
    } else {
        dropdownMenu.style.display = 'block'
    }
}

function toggleCaretRotation(caretId) {
    const caret = document.getElementById(caretId)
    // get current rotation
    const currentRotation = caret.style.transform || 'rotate(0deg)'
    // new rotation
    const newRotation = currentRotation.includes('180')
        ? 'rotate(0deg)'
        : 'rotate(180deg)'
    caret.style.transform = newRotation
}

dropdownButton1.addEventListener('click', () => {
    toggleDropdowns(dropdownMenu1)
    toggleCaretRotation('caret1')
})

dropdownButton2.addEventListener('click', () => {
    toggleDropdowns(dropdownMenu2)
    toggleCaretRotation('caret2')
})

dropdownButton3.addEventListener('click', () => {
    toggleDropdowns(dropdownMenu3)
    toggleCaretRotation('caret3')
})

// Add event listener to filter items based on input
searchInput1.addEventListener('input', () => {
    const searchTerm = searchInput1.value.toLowerCase()
    const items = dropdownMenu1.querySelectorAll('a')

    items.forEach((item) => {
        const text = item.textContent.toLowerCase()
        if (text.includes(searchTerm)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
})
searchInput2.addEventListener('input', () => {
    const searchTerm = searchInput2.value.toLowerCase()
    const items = dropdownMenu2.querySelectorAll('a')

    items.forEach((item) => {
        const text = item.textContent.toLowerCase()
        if (text.includes(searchTerm)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
})
searchInput3.addEventListener('input', () => {
    const searchTerm = searchInput3.value.toLowerCase()
    const items = dropdownMenu3.querySelectorAll('a')

    items.forEach((item) => {
        const text = item.textContent.toLowerCase()
        if (text.includes(searchTerm)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
})

// Display in dropdown menus's functions
function ingredientDisplay() {
    const listIngredients = document.getElementById('drop-content1')
    const uniqueIngredients = new Set()

    // Loop for each recipe
    for (let i = 0; i < data.length; i++) {
        // Loop for each ingredient
        for (let j = 0; j < data[i].ingredients.length; j++) {
            // Add each ingredient to the set
            uniqueIngredients.add(data[i].ingredients[j].ingredient)
        }
    }

    // Clear existing content in the list
    listIngredients.innerHTML = ''

    // Create and append a new <li> element for each unique ingredient
    uniqueIngredients.forEach((ingredient) => {
        const listItem = document.createElement('li')
        listItem.classList.add(
            'p-[5px]',
            'mb-1',
            'text-gray-700',
            'hover:bg-gray-100',
            'active:bg-yellow',
            'rounded-md',
            'font-manrope',
            'text-sm'
        )
        listItem.textContent = ingredient
        listIngredients.appendChild(listItem)
    })
}

function appareilsDisplay() {
    const listAppareils = document.getElementById('drop-content2')
    const uniqueAppareils = new Set()

    // Loop for each recipe
    for (let i = 0; i < data.length; i++) {
        let appareil = data[i].appliance
        uniqueAppareils.add(appareil)
    }

    // Clear existing content in the list
    listAppareils.innerHTML = ''

    // Create and append a new <li> element for each unique appliance
    uniqueAppareils.forEach((appareil) => {
        const listItem = document.createElement('li')
        listItem.classList.add(
            'p-[5px]',
            'mb-1',
            'text-gray-700',
            'hover:bg-gray-100',
            'active:bg-yellow',
            'rounded-md',
            'font-manrope',
            'text-sm'
        )
        listItem.textContent = appareil
        listAppareils.appendChild(listItem)
    })
}

function ustensilsDisplay() {
    const listUstensils = document.getElementById('drop-content3')
    const uniqueUstensils = new Set()

    // Loop for each recipe
    for (let i = 0; i < data.length; i++) {
        // Loop for each ustensil
        for (let j = 0; j < data[i].ustensils.length; j++) {
            // Add each ustensil to the set
            uniqueUstensils.add(data[i].ustensils[j])
        }
    }

    // Clear existing content in the list
    listUstensils.innerHTML = ''

    // Create and append a new <li> element for each unique ustensil
    uniqueUstensils.forEach((ustensil) => {
        const listItem = document.createElement('li')
        listItem.classList.add(
            'p-[5px]',
            'mb-1',
            'text-gray-700',
            'hover:bg-gray-100',
            'active:bg-yellow',
            'rounded-md',
            'font-manrope',
            'text-sm'
        )
        listItem.textContent = ustensil
        listUstensils.appendChild(listItem)
    })
}

ingredientDisplay()
appareilsDisplay()
ustensilsDisplay()

// Dropdown menu's tags creation
function initializeDropdown(dropdownId) {
    const dropdownList = document.querySelectorAll(`#${dropdownId} li`)
    const recipes = document.querySelectorAll('.main-section .cards')
    //console.log(recipes)

    dropdownList.forEach((item) => {
        item.addEventListener('click', (e) => {
            const tags = document.createElement('div')
            const newTag = document.createElement('span')
            const tagImg = document.createElement('img')
            tags.classList.add(
                'relative',
                'bg-yellow',
                'w-[130px]',
                'h-[40px]',
                'p-2',
                'mx-4',
                'my-3',
                'rounded-md',
                'text-[14px]',
                'font-manrope',
                'truncate'
            )
            newTag.classList.add(
                'font-manrope',
                'text-[14px]',
                'rounded-md',
                'tag'
            )
            tagImg.classList.add(
                'absolute',
                'ml-[100px]',
                'mt-[2px]',
                'img-tag',
                'cursor-pointer'
            )
            // Text's tag
            newTag.textContent = e.target.textContent
            tagImg.src = './assets/tagCross.png'
            tagImg.addEventListener('click', (e) => {
                tags.remove()
                // filter by tags
                //filterRecipes()
            })
            // add tag in DOM
            const tagsContainer = document.getElementById('tags-container')
            tags.appendChild(tagImg)
            tags.appendChild(newTag)
            tagsContainer.appendChild(tags)
            // filter by tags
            //filterRecipes()
        })
    })
}

// Use for all dropdowns
initializeDropdown('drop-content1')
initializeDropdown('drop-content2')
initializeDropdown('drop-content3')

///////////////////////////////////////////////////////////////////////////////
// 3 fonctions pour filtrer no recettes par rapport aux tags grace au dropdown :
//  1 - Fonction de qui recup les tags
//  2 - Fonction recup liste recettes en entrée et retourne les recettes triées en sortie
//  3 - Fonction pour refresh la liste de recettes

function getTags() {
    const tags = Array.from(
        document.querySelectorAll('#tags-container div span')
    ).map((tag) => tag.textContent)
    return tags
}

function filterRecipes() {
    const recipes = document.querySelectorAll('.main-section .cards')
    const tags = getTags()
    const recipesArray = Array.from(recipes)
    //console.log(recipesArray)
    //========================
    //     for (let i = 0; i < recipesArray.length; i++) {
    //         if (recipesArray[i].textContent.toLowerCase().includes(tags)) {
    //             recipesArray[i].style.display = 'block'
    //         } else {
    //             recipesArray[i].style.display = 'none'
    //         }
    //     }
    // }
    //========================
    const filteredRecipes = recipesArray.filter((recipe) => {
        const recipeTags = Array.from(recipe.querySelectorAll('.tag')).map(
            (tag) => tag.textContent
        )
        return tags.every((tag) => recipeTags.includes(tag))
    })
    displayFilteredRecipes(filteredRecipes)
}

function displayFilteredRecipes(recipes) {
    const recipesContainer = document.querySelector('.main-section')
    recipesContainer.innerHTML = ''
    recipes.forEach((recipe) => {
        recipesContainer.appendChild(recipe)
    })
}

///////////////////////////////////////////////////////////////////////////////

//===================================================
// Function to sort recipes
// function sortRecipes() {
//     // Get the selected value from the dropdown
//     const selectedIngredient =
//         document.getElementById('ingredientDropdown').value

//     // Get all recipes
//     const recipes = document.querySelectorAll('.main-section div')

//     // Iterate through all recipes and show or hide them based on the selected ingredient
//     recipes.forEach(function (recipe) {
//         const recipeIngredients = recipe
//             .getAttribute('data-ingredients')
//             .split(',')

//         if (recipeIngredients.includes(selectedIngredient)) {
//             recipe.style.display = 'block' // Show the recipe
//         } else {
//             recipe.style.display = 'none' // Hide the recipe
//         }
//     })
// }

// test
// document.getElementById("dropdown-menu1").addEventListener("click", function (event) {
//     if (event.target.tagName === "LI") {
//         const selectedIngredient = event.target.innerText.trim();
//         sortRecipesByIngredient(selectedIngredient);
//     }
// });

//===================================================

// Define a variable to store selected items for each dropdown
// const selectedItems = {
//     'drop-content1': [],
//     'drop-content2': [],
//     'drop-content3': [],
// }

// // Function to update the selected items and trigger filtering
// function updateSelectedItems(dropdownId, selectedItem) {
//     // Add or remove the selected item based on its current state
//     const index = selectedItems[dropdownId].indexOf(selectedItem)
//     if (index === -1) {
//         selectedItems[dropdownId].push(selectedItem)
//     } else {
//         selectedItems[dropdownId].splice(index, 1)
//     }

//     // Call a function to filter recipes based on selected items
//     filterRecipes()
// }

// /// Function to filter recipes based on selected items
// function filterRecipes() {
//     // Get all selected items from each dropdown
//     const selectedIngredients = selectedItems['drop-content1']
//     const selectedAppareils = selectedItems['drop-content2']
//     const selectedUstensiles = selectedItems['drop-content3']

//     // Get all recipes
//     const recipes = document.querySelectorAll('.main-section .cards')

//     // Iterate  each recipe and check if it matches the selected items
//     recipes.forEach((recipe) => {

//         )

//         const isAppareilMatch = selectedAppareils.every((item) =>
//             recipeAppareils.includes(item)
//         )
//         const isUstensileMatch = selectedUstensiles.every((item) =>
//             recipeUstensiles.includes(item)
//         )

//         recipe.style.display = isRecipeVisible ? 'block' : 'none'

// }

// // Function to initialize dropdowns
// function initializeDropdown(dropdownId) {
//     const dropdownList = document.querySelectorAll(`#${dropdownId} li`)

//     dropdownList.forEach((item) => {
//         item.addEventListener('click', (e) => {
//             // Update the selected items and trigger filtering
//             updateSelectedItems(dropdownId, e.target.textContent)

//             // Your existing code to create and append tags
//             const newTag = document.createElement('span')
//             newTag.classList.add(
//                 'w-8',
//                 'h-4',
//                 'bg-yellow',
//                 'p-2',
//                 'mx-4',
//                 'my-3',
//                 'rounded-md',
//                 'text-[14px]',
//                 'font-manrope'
//             )
//             newTag.textContent = e.target.textContent

//             const tagsContainer = document.getElementById('tags-container')
//             tagsContainer.appendChild(newTag)
//         })
//     })
// }

// // Use for all dropdowns
// initializeDropdown('drop-content1')
// initializeDropdown('drop-content2')
// initializeDropdown('drop-content3')
