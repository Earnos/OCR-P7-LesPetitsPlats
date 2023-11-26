import getData from './data.js'

let data = getData()
//console.table(data)
console.log(data)

export default function getRecipes() {
    data.forEach((recipe) => {
        const cardContainer = document.createElement('div')
        const section = document.querySelector('.main-section')

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
                <div class="w-[27vw] h-[100%] mb-6 bg-white rounded-xl relative">
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
        //===================================================================
        section.appendChild(cardContainer)
    })
}

// Appel de la fonction pour afficher les cartes de recettes
getRecipes()
