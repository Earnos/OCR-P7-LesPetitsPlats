import createCards from './cards.js'
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
            'text-sm',
            'item-ingredient'
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
            'text-sm',
            'item-appareil'
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
            'text-sm',
            'item-ustensil'
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

    dropdownList.forEach((item) => {
        item.addEventListener('click', (e) => {
            const tags = document.createElement('div')
            const newTag = document.createElement('span')
            const tagImg = document.createElement('img')
            if (item.classList.contains('item-ingredient'))
                newTag.classList.add('tag-ingredient')
            if (item.classList.contains('item-appareil'))
                newTag.classList.add('tag-appareil')
            if (item.classList.contains('item-ustensil'))
                newTag.classList.add('tag-ustensil')
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
                const filteredRecipes = filterRecipes(data, getTags())
                displayFilteredRecipes(filteredRecipes)
            })
            // add tag in DOM
            const tagsContainer = document.getElementById('tags-container')
            tags.appendChild(tagImg)
            tags.appendChild(newTag)
            tagsContainer.appendChild(tags)
            // filter by tags
            const filteredRecipes = filterRecipes(data, getTags())
            displayFilteredRecipes(filteredRecipes)
        })
    })
}

// Use for all dropdowns
initializeDropdown('drop-content1')
initializeDropdown('drop-content2')
initializeDropdown('drop-content3')

// 3 functions : get each dropdowns list & put in an array

function getIngredientList() {
    // chercher les ingredients by current Tags
    const listIngred = []
    Array.from(document.getElementsByClassName('tag-ingredient')).forEach((e) =>
        listIngred.push(e.textContent)
    )
    return listIngred
}

function getAppareilList() {
    const listApp = []
    Array.from(document.getElementsByClassName('tag-appareil')).map((e) =>
        listApp.push(e.textContent)
    )
    return listApp
}

function getUstensilList() {
    const listUste = []
    Array.from(document.getElementsByClassName('tag-ustensil')).map((e) =>
        listUste.push(e.textContent)
    )
    return listUste
}

function getTags() {
    return {
        listIngredient: getIngredientList(),
        listAppareil: getAppareilList(),
        listUstensil: getUstensilList(),
    }
}
// filters recipes for each dropdown whith tags's list
function filterRecipes(recipesList, tagList) {
    const filteredByDropdowns = []

    //Loop for ingredients dropdown
    recipesList.forEach((recipe) => {
        let recipeIngredientList = []
        let recipeAppareilList = []
        let recipeUstensilList = []
        let appareilArray = recipe.appliance.split(' ')

        //Push for each ingredients in data
        recipe.ingredients.forEach((i) =>
            recipeIngredientList.push(i.ingredient)
        )

        // Use switch statement to check conditions
        switch (true) {
            // If data ingredients is in tag list
            case tagList['listIngredient'].every((v) =>
                recipeIngredientList.includes(v)
            ):
                // Push for each appareils in data
                appareilArray.forEach((i) => recipeAppareilList.push(i))

                // check the next condition
                switch (true) {
                    // If data appareils is in tag list
                    case tagList['listAppareil'].every((v) =>
                        recipeAppareilList.join(' ').includes(v)
                    ):
                        // Push for each ustensils in data
                        recipe.ustensils.forEach((i) =>
                            recipeUstensilList.push(i)
                        )

                        // check the last condition
                        switch (true) {
                            // If data ustensils is in tag list
                            case tagList['listUstensil'].every((v) =>
                                recipeUstensilList.includes(v)
                            ):
                                // Push the recipe to the filtered list
                                filteredByDropdowns.push(recipe)
                                break
                        }
                        break
                }
                break
        }
    })
    return filteredByDropdowns
}

function displayFilteredRecipes(filteredRecipes) {
    const recipesContainer = document.querySelector('.main-section')
    recipesContainer.innerHTML = ''

    createCards(filteredRecipes)
}
