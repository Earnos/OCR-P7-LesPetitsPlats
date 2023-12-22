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
