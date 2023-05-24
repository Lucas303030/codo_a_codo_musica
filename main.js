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

const readButton = document.querySelectorAll(".read-more-two")
const moreText = document.querySelectorAll(".read-more")

readButton.forEach( (item, index) => {
    item.addEventListener("click", () => {
        moreText[index].classList.toggle("Hola")
        if (moreText[index].classList.contains("Hola")) {
        item.innerHTML = "Leer Menos"}
        else {
            item.innerHTML = "Leer Mas"}
    })
})
