import getData from './data.js'
import { showRecipesNumber } from './data.js'

let data = getData()

export default function createCards(recipeData) {
    const section = document.querySelector('.main-section')
    recipeData.forEach((recipe) => {
        const cardContainer = document.createElement('div')

        cardContainer.classList.add('flex', 'cards')

        // Dynamic ingredients & quantities
        const ingredients = recipe.ingredients
            .map(
                (ingredient) => `
                <div class='flex flex-col mb-[1.3em] w-[35%] mr-[10%]'>
                    
                        <p class='text-xs font-medium'>${
                            ingredient.ingredient
                        }</p>
                        <span class='text-xs font-manrope text-gray-400'>${
                            ingredient.quantity ? ingredient.quantity : ''
                        } ${ingredient.unit ? ingredient.unit : ''}</span>
                    
                </div>
            `
            )
            .join('')

        cardContainer.innerHTML = `
                <div class="w-[27vw] max-[1265px]:w-[33vw] max-[900px]:w-[40vw] h-[100%] max-[750px]:w-[65vw] mb-6 bg-white rounded-xl relative">
                    <div class="w-full h-[220px]" >
                        <span class='pl-2 pt-0.5 w-[50px] h-[20px] text-[10px] bg-yellow rounded-3xl top-4 right-4 absolute pl-1.5 '>${recipe.time} min</span>
                        <img src="./assets/images/${recipe.image}" class='h-full w-full object-cover rounded-t-xl' />
                    </div>
                    <div class='ml-4 mr-4 h-full'>
                        <div class='py-6'>
                            <h2 class='font-medium font-anton'>${recipe.name}</h2>
                        </div>
                        <div>
                            <div>
                                <h3 class='pb-4 text-gray-400 text-xs font-bold' >RECETTE</h3>
                                <p class='text-xs font-manrope' >${recipe.description}</p>
                            </div>
                            <div>
                                <h3 class='py-4 text-gray-400 text-xs font-bold' >INGRÉDIENTS</h3>
                                <div class='flex flex-wrap justify-between'>
                                    ${ingredients}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        section.appendChild(cardContainer)
    })
}

// display filtered's recipes from search bar
export function displayFilteredRecipes(filteredElements, elements, letters) {
    elements.forEach((element) => {
        if (filteredElements.includes(element)) {
            element.style.display = 'block'
        } else {
            element.style.display = 'none'
        }
    })
    showRecipesNumber(filteredElements, letters)
    errorMsgNoRecipes(filteredElements, letters)
}

export function displayFilteredElements(filteredRecipes) {
    const recipesContainer = document.querySelector('.main-section')
    recipesContainer.innerHTML = ''
    createCards(filteredRecipes)
}

export function errorMsgNoRecipes(filteredElements, letters) {
    const section = document.querySelector('.main-section')
    let errorRecipes = document.getElementById('error-message-recipes')
    const ingredientTag = document.querySelector('.tag-ingredient')
    const appareilTag = document.querySelector('.tag-appareil')
    const ustensilTag = document.querySelector('.tag-ustensil')

    errorRecipes ? errorRecipes.remove() : null

    if (filteredElements.length === 0) {
        const p = document.createElement('p')
        let message = `Aucune recette ne contient ${letters} `

        // Vérifiez si chaque tag est défini avant de les ajouter au message
        if (ingredientTag) {
            message += "'" + ingredientTag.textContent + "'" + '+'
        }
        if (appareilTag) {
            message += "'" + appareilTag.textContent + "'" + ' '
        }
        if (ustensilTag) {
            message += "'" + ustensilTag.textContent + "'" + ' '
        }

        message += ` ,vous pouvez chercher  « tarte aux pommes », « poisson », etc.`

        p.textContent = message
        p.setAttribute('id', 'error-message-recipes')
        section.appendChild(p)
    }
}

//create recipes's cards
createCards(data)
// Show the number of a filtered's cards
showRecipesNumber(data)
