// Intersection Observer

const sections = document.querySelectorAll("section.estilo")

function intersec(entradas){
    entradas.forEach(entrada => {
        if (entrada.isIntersecting){
            entrada.target.classList.add("active")
        }
        }
    )
}

const observer = new IntersectionObserver(intersec)

sections.forEach( i => {
    observer.observe(i)
})