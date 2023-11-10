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

//let isOpen = true // Set to true to open the dropdown by default

//Function to toggle the dropdown state
// function toggleDropdowns(elementHtml) {
//     isOpen = !isOpen
//     elementHtml.classList.toggle('hidden', !isOpen)
// }
function toggleDropdowns(dropdownMenu) {
    if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'block'
    } else {
        dropdownMenu.style.display = 'none'
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
