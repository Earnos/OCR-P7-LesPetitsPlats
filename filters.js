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

let isOpen = true // Set to true to open the dropdown by default

// Function to toggle the dropdown state
function toggleDropdowns(elementHtml) {
    isOpen = !isOpen
    elementHtml.classList.toggle('hidden', !isOpen)
}

dropdownButton1.addEventListener('click', () => {
    toggleDropdowns(dropdownMenu1)
})

dropdownButton2.addEventListener('click', () => {
    toggleDropdowns(dropdownMenu2)
})

dropdownButton3.addEventListener('click', () => {
    toggleDropdowns(dropdownMenu3)
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

// functions dropDown menu's display
function ingredientDisplay() {
    const listIngredients = document.getElementById('drop-content1')

    // for loop for each recipes
    for (let i = 0; i < data.length; i++) {
        // Loop for each ingredients
        for (let j = 0; j < data[i].ingredients.length; j++) {
            // ingredient's list creation
            const ingredient = document.createElement('li')
            ingredient.classList.add(
                'p-[5px]',
                'mb-1',
                'text-gray-700',
                'hover:bg-gray-100',
                'active:bg-yellow',
                'rounded-md',
                'font-manrope',
                'text-sm'
            )
            ingredient.textContent = data[i].ingredients[j].ingredient
            listIngredients.appendChild(ingredient)
        }
    }
}

function appreilsDisplay() {
    const listAppareils = document.getElementById('drop-content2')

    // loop for each recipes
    for (let i = 0; i < data.length; i++) {
        // List appreils
        const appareils = document.createElement('li')
        appareils.classList.add(
            'p-[5px]',
            'mb-1',
            'text-gray-700',
            'hover:bg-gray-100',
            'active:bg-yellow',
            'rounded-md',
            'font-manrope',
            'text-sm'
        )
        appareils.textContent = data[i].appliance
        listAppareils.appendChild(appareils)
    }
}

function ustensilsDisplay() {
    const listustensils = document.getElementById('drop-content3')

    // for loop for each recipes
    for (let i = 0; i < data.length; i++) {
        // Loop for each ustensils
        for (let j = 0; j < data[i].ustensils.length; j++) {
            // ustensils's list creation
            const ustensils = document.createElement('li')
            ustensils.classList.add(
                'p-[5px]',
                'mb-1',
                'text-gray-700',
                'hover:bg-gray-100',
                'active:bg-yellow',
                'rounded-md',
                'font-manrope',
                'text-sm'
            )
            ustensils.textContent = data[i].ustensils[j]
            listustensils.appendChild(ustensils)
        }
    }
}

ingredientDisplay()
appreilsDisplay()
ustensilsDisplay()

// Dropdown menu's tags creation
const dropdownList = document.querySelectorAll('#drop-content1 li')

dropdownList.forEach((item) => {
    item.addEventListener('click', (e) => {
        const newTag = document.createElement('span')
        newTag.classList.add(
            'w-8',
            'h-4',
            'bg-yellow',
            'p-2',
            'mx-4',
            'my-3',
            'rounded-md',
            'text-[14px]',
            'font-manrope'
        )
        // Text's tag
        newTag.textContent = e.target.textContent
        // add tag in DOM
        const tagsContainer = document.getElementById('tags-container')
        tagsContainer.appendChild(newTag)
    })
})
