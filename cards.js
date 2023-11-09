import getData from './data.js'

let data = getData()
//console.table(data)
console.log(data)

// Fonction pour créer et afficher les cartes de recettes
function displayRecipes() {
    data.forEach((recipe) => {
        const cardContainer = document.createElement('div')
        const section = document.querySelector('.main-section')

        cardContainer.classList.add('flex')
        cardContainer.innerHTML = `
<div class="w-[27vw] h-[650px] bg-white rounded-xl relative">
    <div class="w-full h-[220px]" ><span class='pl-2 pt-0.5 w-[50px] h-[20px] text-[10px] bg-yellow rounded-3xl top-4 right-4 absolute pl-1.5 '>${recipe.time} min</span><img src="./assets/images/${recipe.image}" class='h-full w-full object-cover rounded-t-xl' /></div>
    <div class='ml-4 mr-4 h-full'>
        <div class='py-6'><h2 class='font-medium font-anton'>${recipe.name}</h2></div>
        <div>
            <div><h3 class='pb-4 text-gray-400 text-xs font-bold' >RECETTE</h3><p class='text-xs font-manrope' >${recipe.description}</p></div>
            <div><h3 class='py-4 text-gray-400 text-xs font-bold' >INGRÉDIENTS</h3><p class='text-xs font-medium' >${recipe.ingredients[0].ingredient}</p></div>
        </div>
    </div>
</div>`

        section.appendChild(cardContainer)
    })
}

// Appel de la fonction pour afficher les cartes de recettes
displayRecipes()
