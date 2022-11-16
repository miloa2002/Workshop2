const detalle = document.querySelector(".seccion__hotsale");
const query = new URLSearchParams(window.location.search)
const params = query.get('id')
//console.log(params)

const url = "http://localhost:3000/inmobiliaria";

document.addEventListener("DOMContentLoaded", obtenerDatos)


async function obtenerDatos() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const filtroData = resultado.filter(element => element.id === params)
        mostrarHTML(filtroData)
        //console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}


const mostrarHTML = resultado => {
    let elementos = "";
    resultado.forEach(element => {
        const{Nhabitaciones, Nbaños, Tipo, area, descripcion, disponibilidad, img, nombre, parqueadero, precio,ubicacion} = element;
        elementos += `
        <div class="hotsale__container">
            <div class="propiedades__texts">
                <a href="index.html" class="volver"><-  Volver</a>
                <p class="propiedades__text">${ubicacion}</p>
                <h2 class="propiedades__title">${Tipo}<span> en ${disponibilidad}</span></h2>
            </div>
            <div class="apartamento">
                <div class="apartamento__grid">
                    <div class="apartamento__img">
                        <img src="${img}" alt="apartamento">
                    </div>
                    <div class="apartamento__contenido">
                        <div class="apartamento__textos">
                            <p class="propiedades__text">Residential Towe For Rent</p>
                            <h3 class="apartamento__title">${nombre}</h3>
                            <p class="propiedades__text apartamento__text">${descripcion}</p>
                            <a href="#" class="apartamento__precio">$${precio}</a>
                        </div>
                        <img class="apartamento__video" src="images/hotdale/Video Button.png" alt="">
                        <div class="apartamento__flex">
                            <div class="items__flex">
                                <img src="images/hotdale/Area Icon.svg" alt="mts">
                                <p class=" item__bold">${area}<span class="apartamento__span">Sq Ft</span></p>
                            </div>
                            <div class=" items__flex">
                                <img src="images/hotdale/Bedroom Icon.svg" alt="garage">
                                <p class=" item__bold">${Nbaños}<span class="apartamento__span">beds</span></p>
                            </div>
                            <div class="items__flex">
                                <img src="images/hotdale/Bathroom Icon.svg" alt="bañera">
                                <p class=" item__bold">${Nhabitaciones}<span class="apartamento__span">1bath</span></p>
                            </div>
                            <div class="items__flex">
                                <img src="images/hotdale/Garage Icon.svg" alt="garage">
                                <p class=" item__bold">${parqueadero}<span class="apartamento__span">Garage</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    });
    detalle.innerHTML = elementos
}

