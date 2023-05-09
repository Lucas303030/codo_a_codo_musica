// Preloader (Prueba)

const preloader = document.querySelector(".preloader")

window.addEventListener("load", function () {
    preloader.classList.add("oculto") 
 })

// JS API (Inserta categorias al DOM - OpenOpusAPI)

let apiurl = "https://api.openopus.org/composer/list/epoch/"

const EPOCH = ["Medieval", "Renaissance", "Baroque", "Classical", "Early Romantic", "Romantic", "Late Romantic", "20th Century", "Post-War", "21st Century"];

urlArr = []

EPOCH.forEach(periodo => {
    let x = apiurl.concat(`${periodo}.json`)
    urlArr.push(x)
})

async function getperiod(){
    promises = urlArr.map( url => fetch(url))
    const resultados = await Promise.all(promises)
    console.log(resultados)
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

let num = 0

const getEpoch = async function(array,index, epoca ) {
    let getUrl = await fetch(array[index]);
    let response = (await getUrl).json()
    let datos = await response
    // 2 autores por categoria
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
        <p class="nombre">${composers[index].complete_name}</p>
        <p class="epoca">Epoca: ${composers[index].epoch}</p>
        <img src="${composers[index].portrait}" alt="">
        <h6>Aca iria una obra del autor: </h6>
        <h6>Aca iria una obra del autor: </h6>
        </div>
        `
    }
}

for (let index = 0; index < links.length; index++) {
    getEpoch(links, index, epochArr );    
}

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