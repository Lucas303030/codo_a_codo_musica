// Intersection Observer

const x = document.querySelector(".hero-container")
const observer = new IntersectionObserver(intersec)

function intersec (entradas) {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            document.getElementById("navbar").classList.remove("observed")
        } else {
            document.getElementById("navbar").classList.add("observed")
        }
    })
}

observer.observe(x)

// Preloader (Prueba)

const preloader = document.querySelector(".preloader")

window.addEventListener("load", function () {
    preloader.classList.add("oculto") 
 })

// JS API (Inserta categorias al DOM - OpenOpusAPI)

let apiurl = "https://api.openopus.org/composer/list/epoch/" // Por epoca


const EPOCH = ["Medieval", "Renaissance", "Baroque", "Classical", "Early Romantic", "Romantic", "Late Romantic", "20th Century", "Post-War", "21st Century"];

urlArr = []
idUrl = []

// Agrega seccion categorias desde API OpenOpus

EPOCH.forEach(periodo => {
    let x = apiurl.concat(`${periodo}.json`)
    urlArr.push(x)
})



async function getperiod(){
    promises = urlArr.map( url => fetch(url))
    const resultados = await Promise.all(promises)
    writeDom(resultados)
}

async function writeDom(resultados){
    for (const i of resultados) {
        datos = await i.json()
        let x = datos.composers[0].epoch
        document.getElementById("button-container").innerHTML +=
        `<a href=#${x}>${x}</a>`
    }
}

getperiod()

// Agrega cartas al DOM

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

let works = []
let worksName = []
let artistID = []

Promise.all(urlArr.map( url => fetch(url))).then(responses =>
    Promise.all(responses.map(response => response.json()))).then(
        datos => {
            // console.log(datos)
            works.push(datos)}
    )

function getPrimaryData(){
    // console.log(works[0][1])
    
    for (let index = 0; index < works[0].length; index++) {
        let query = document.querySelector(`.${numArr[index]}`)
        // console.log(query)
        onlyTwo = (works[0][index].composers.slice(0,2));
        // console.log(onlyTwo)
        onlyTwo.forEach(id => {
            // console.log(id.id)
            artistID.push(id.id)
            // console.log(id.name)
            // console.log(id.complete_name)
            query.innerHTML+=
            
            // Elementos agregados al DOM desde JS

            `

                <div class="cartita">
                <p class="nombre">${id.complete_name}</p>
                <p class="epoca">Epoca: ${id.epoch}</p>
                <img src="${id.portrait}" alt="Imagen de ${id.name}">
                </div>

            `
        });
        
    }
    }

setTimeout(() => {
    getPrimaryData()

}, 2000);

setTimeout(() => {
    artistID.forEach(id => {
        idUrl.push(`https://api.openopus.org/work/list/composer/${id}/genre/all.json`)
    })
}, 3000);


setTimeout(() => {
    Promise.all(idUrl.map( url => fetch(url))).then(responses =>
        Promise.all(responses.map(response => response.json()))).then(
            datos => {
                // console.log(datos)
                worksName.push(datos)
                }
        )
       
}, 4000);

setTimeout(() => {
    const cartita = document.querySelectorAll(".cartita")
    
    for (let index = 0; index < worksName[0].length; index++) {

        let byAuthor = (worksName[0][index].works).slice(0,2)
        let cartitaEach = cartita[index]
        
        // console.log(byAuthor)

        // console.log(cartita[index])
        for (let index = 0; index < byAuthor.length; index++) {

            cartitaEach.innerHTML += `

            <h6>${byAuthor[index].title}</h6>

            `
            
        }
    }
}, 8000);

// console.log(document.getElementsByClassName("cartita"))

// Para INNERHTML

        // <div class="cartita">
        // <p class="nombre">${composers[index].complete_name}</p>
        // <p class="epoca">Epoca: ${composers[index].epoch}</p>
        // <img src="${composers[index].portrait}" alt="Imagen de ${composers[index].name}">
        // <h6>Aca iria una obra del autor: </h6>
        // <h6>Aca iria una obra del autor: </h6>
        // </div>