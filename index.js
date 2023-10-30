import recipes from './data/recipes.js'

console.log(recipes)

// fetch(recipes) ---- a remplacer par une fonction d'appel des data dans data.js
//     .then((response) => response.json())
//     .then((data) => {
//         let recipesData = data
//         recipesData.map(function (recipesData) {
//             // creation du DOM de la card recette
//         })
//     })
//     .catch(function (error) {
//         console.log(error)
//     })
//console.log(recipes)

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

// Tags creation event
const activeTags = document.querySelectorAll('.group div a')
const main = document.getElementsByTagName('main')

activeTags.map((options) => {
    options.addEventListener('click', () => {
        const tagsContainer = document.createElement('div')
        const tags = document.createElement('div')
        tags.innerHTML = `<p class="bg-yellow w-4 h-2">Test</p>`
        tagsContainer.appendChild(tags)
        main.appendChild(tagsContainer)
    })
})

// Old Dropdown Menus's filters
// DOM filter container
// const photosContainer = document.querySelector('#filters')
// const mediaContainer = document.getElementById('media-container')
// const filterContainer = document.createElement('div')
// const fitlerText = document.createElement('p')

// filterContainer.setAttribute('class', 'filter-container , mb-[5%], ml-[10%]')
// fitlerText.setAttribute('class', 'filter-text')

// filterContainer.appendChild(fitlerText)
// photosContainer.insertBefore(filterContainer, mediaContainer)

// // DropDown menu
// filterContainer.innerHTML = `
//     <div class="dropdown min-w-[15em] m-8 absolute box-border" role="menu" aria-controls="menu">
//       <div class="select flex justify-between items-center rounded-md cursor-pointer delay-0.3 box-border" role="menubar" tabindex="0"
//       aria-label="choix du mode de tri" aria-expanded="false" aria-haspopup="true">
//         <span class="selected rounded-sm " aria-current="true">Ingrédients</span>
//         <div class="caret  w-0 h-0 border-transparent border-solid border-l-4 border-r-4 border-t-8 border-black"></div>
//       </div>
//       <ul class="menu" aria-labelledby="menu du filtre">
//       <li role="menuitem" class="active" tabindex="0" aria-current="true" >Jus de citron</li>
//       <hr>
//       <li role="menuitem" tabindex="0">Glaçons</li>
//       <hr>
//       <li role="menuitem" tabindex="0">Tomate</li>
//       </ul>
//     </div>
//       `

// const dropdown = document.querySelector('.dropdown')
// const select = dropdown.querySelector('.select')
// const caret = dropdown.querySelector('.caret')
// const menu = dropdown.querySelector('.menu')
// const options = dropdown.querySelectorAll('.menu li')
// const selected = dropdown.querySelector('.selected')

// select.addEventListener('click', () => {
//     select.classList.toggle('select-clicked')
//     caret.classList.toggle('caret-rotate')
//     menu.classList.toggle('menu-open')
// })
// dropdown.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         document.querySelector('.select').click()
//     }
// })
// // loop on all options elements
// options.forEach((option) => {
//     option.addEventListener('click', (e) => {
//         selected.innerText = option.innerText
//         select.classList.remove('select-clicked')
//         caret.classList.remove('caret-rotate')
//         menu.classList.remove('menu-open')
//         // remove active class from all options elements
//         options.forEach((option) => {
//             option.classList.remove('active')
//         })
//         option.classList.add('active')
//         //mediaContainer.innerHTML = ''
//         // let dataSorted = sortBy(data, option.innerText)
//         // data.forEach((media) => {
//         //     article = getMediasDOM(media)
//         //     mediaContainer.appendChild(article)
//         //})
//     })
//     option.addEventListener('keydown', (e) => {
//         if (e.key === 'Enter') {
//             option.click()
//             document.querySelector('.select').click()
//             select.focus()
//         }
//     })
// })
