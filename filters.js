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
