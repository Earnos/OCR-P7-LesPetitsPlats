import getData from './data.js'

let data = getData()
console.log(data)

// Recipes's card DOM
const cardContainer = document.createElement('div')
const section = document.querySelector('.main-section')

cardContainer.classList.add('mt-6', 'flex', 'ml-[5%]', 'mr-[5%]')
cardContainer.innerHTML = `
<div class="w-[300px] h-[600px] bg-white rounded-xl">
    <div class="w-full h-[220px]" ><img src="./assets/images/${data[0].image}" class='h-full w-full object-cover rounded-t-xl' /></div>
    <div class='ml-4 mr-4 h-full'>
        <div class='py-6'><h2 class='font-medium font-anton'>${data[0].name}</h2></div>
        <div>
            <div><h3 class='pb-4 text-gray-400 text-xs font-bold' >RECETTE</h3><p class='text-xs' >${data[0].description}</p></div>
            <div><h3 class='py-4 text-gray-400 text-xs font-bold' >INGRÉDIENTS</h3><p class='text-xs font-medium' >${data[0].ingredients[0].ingredient}</p></div>
        </div>
    </div>
</div>`

section.appendChild(cardContainer)

// Tags creation event
const activeTags = document.querySelectorAll('.group div a')
const main = document.getElementsByTagName('main')

// activeTags.map((options) => {
//     options.addEventListener('click', () => {
//         const tagsContainer = document.createElement('div')
//         const tags = document.createElement('div')
//         tags.innerHTML = `<p class="bg-yellow w-4 h-2">Test</p>`
//         tagsContainer.appendChild(tags)
//         main.appendChild(tagsContainer)
//     })
// })

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
