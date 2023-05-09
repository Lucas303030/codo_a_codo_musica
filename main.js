// Preloader (Prueba)

const preloader = document.querySelector(".preloader")

window.addEventListener("load", function () {
    preloader.classList.add("oculto") 
 })

// JS API (Inserta categorias al DOM - OpenOpusAPI)

let apiurl = "https://api.openopus.org/composer/list/epoch/"

const EPOCH = ["Medieval", "Renaissance", "Baroque", "Classical", "Early Romantic", "Romantic", "Late Romantic", "20th Century", "Post-War", "21st Century"];

EPOCH.forEach(function(x){
    let periodo = apiurl.concat(x+".json")
    let getPeriod = async (periodo) => {
    let response = await fetch(periodo)
    let result = await response.json()
    let resultado = await result.request.item
    document.getElementById("button-container").innerHTML+= 
    `<a href="#${resultado}">${resultado}</a>`
    }
    getPeriod(periodo)
})

const links = [
"https://api.openopus.org/composer/list/epoch/Medieval.json",
"https://api.openopus.org/composer/list/epoch/Renaissance.json",
"https://api.openopus.org/composer/list/epoch/Baroque.json",
"https://api.openopus.org/composer/list/epoch/Classical.json",
"https://api.openopus.org/composer/list/epoch/Early Romantic.json",
"https://api.openopus.org/composer/list/epoch/Romantic.json",
"https://api.openopus.org/composer/list/epoch/Late Romantic.json",
"https://api.openopus.org/composer/list/epoch/20th Century.json",
"https://api.openopus.org/composer/list/epoch/Post-War.json",
"https://api.openopus.org/composer/list/epoch/21st Century.json"
]

const epochArr = [
    "medieval",
    "renaissance",
    "baroque",
    "classical",
    "early_romantic",
    "romantic",
    "late_romantic",
    "twenty_century",
    "post_war",
    "tone_century"
]

let num = 0

const getEpoch = async function(array,index, epoca ) {
    let getUrl = await fetch(array[index]);
    let response = (await getUrl).json()
    let datos = await response
    let composers = (datos.composers.slice(0,2))
    let numArr = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten"
    ]
    let a = document.querySelector(`.${numArr[num]}`)
    num++
    for (let index = 0; index < 2; index++) {
        a.innerHTML += `
        
        <div class="cartita">
        <p class="nombre">Nombre: ${composers[index].complete_name}</p>
        <p class="epoca">Epoca: ${composers[index].epoch}</p>
        <img src="${composers[index].portrait}" alt="">
        </div>

        `

        console.log(`${composers[index].epoch}: ${composers[index].complete_name}, ${composers[index].portrait}`)
        
    }
}

for (let index = 0; index < links.length; index++) {
    getEpoch(links, index, epochArr );    
}

