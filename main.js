// Preloader (Cambiar por loader animado - Prueba)

const preloader = document.querySelector(".preloader")

window.addEventListener("load", function (e) {
    alert("Carga completa")
    preloader.classList.add("oculto") 
 })

// Intersection Observer

const sections = document.querySelectorAll("section.estilo")

function intersec(entradas){
    entradas.forEach(entrada => {
        if (entrada.isIntersecting){
            entrada.target.classList.add("active")
        }
        })
}

const observer = new IntersectionObserver(intersec)

sections.forEach( i => {
    observer.observe(i)
})