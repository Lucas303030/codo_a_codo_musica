const url = "https://api.openopus.org/composer/list/pop.json"
const composers = document.querySelector(".composers")
console.log(composers)


fetch(url)
.then(
    response => response.json()
).then(
    datos => {
        const prueba = datos.composers
        prueba.forEach((element,index) => {
            if (index < 20) {
            // console.log(element.portrait)
            composers.innerHTML+=
            `
            <div class="composer-each" id="${element.id}">
            <img src="${element.portrait}">
            <div class="overlay"><div>
            <div class="composer-each-desc">
            <p id="comps">${element.complete_name} - ${element.epoch}</p>
            <p id="anyos">${element.birth} - ${element.death}</p>
            </div>
            </div>
            `
        }
        });
    }
)

lista1 = []

setTimeout(() => {
    const blur = document.querySelector(".blur")
    const modal = document.querySelectorAll(".composer-each")
    const popup = document.querySelector(".popup")
    modal.forEach((element,index) => {
        element.addEventListener('click', () => {
            const ident = element.getAttribute("id")
            fetch(`https://api.openopus.org/work/list/composer/${ident}/genre/all.json`)
            .then(response => response.json())
            .then(datos => {
                // console.log(datos.works[0].title)
                // console.log(datos.composer.complete_name)
                popup.innerHTML =
                
                `
                <h5>${datos.composer.complete_name}</h5>
                <p>${datos.works[1].title}</p>
                <p>${datos.works[2].title}</p>
                <p>${datos.works[3].title}</p>
                <p>${datos.works[4].title}</p>
                <p>${datos.works[5].title}</p>
                <p>${datos.works[6].title}</p>
                <p class="popup_button">CERRAR VENTANA</p>
                `
                popup.classList.add("ver")
                blur.classList.add("overlay_popup")
                const cerrar = document.querySelector(".popup_button")
                cerrar.addEventListener("click", () => {
                    blur.classList.remove("overlay_popup")
                    popup.classList.remove("ver")
                })
            })
        })
    });
}, 3000);
