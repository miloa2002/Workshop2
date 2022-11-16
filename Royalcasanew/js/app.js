const url = "http://localhost:3000/inmobiliaria";

document.addEventListener("DOMContentLoaded", obtenerDatos)


async function obtenerDatos() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        mostrarHTML(resultado)
         mostrarTipo(resultado)
         filtros(resultado)
        //console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}


const card = document.querySelector(".cards__grid");

const mostrarHTML = resultado => {
    let elementos = "";
    resultado.forEach(element => {
        const{Nhabitaciones, Nbaños, Tipo, area, descripcion, disponibilidad, img, nombre, parqueadero, precio,ubicacion, id} = element;
        elementos += `
        <div class="card" id="card">
            <div class="card__img">
             <a href="propiedad.html?id=${id}"><img src="${img}" alt=""></a>
                <div class="card__info--inter">
                    <div class="inter__status">
                        <a href="#">${Tipo}</a>
                        <a href="#">${disponibilidad}</a>
                        <a href="#"></a>
                    </div>
                    <div class="inter__price">
                        <p>$${precio}</p>
                    </div>
                </div>
            </div>
            <div class="card__info">
                <p class="card__smallP">${nombre}-${ubicacion}</p>
                <p class="card__adress">${descripcion}</p>
                <div class="card__infoPerson">
                    <div class="card__person">
                        <img src="images/propiedades/agent-1-3-60x60.png" alt="person">
                        <p>${element.propietario.nombreP}</p>
                    </div>
                    <p class="card__mes">${element.propietario.contacto}</p>
                </div>
                <!--info items-->
                <div class="card__items">
                    <div class="items__flex">
                        <img src="images/propiedades/Area Icon.png" alt="mts"">
                        <p class=" item__bold">${area}<span>Sq Ft</span></p>
                    </div>
                    <div class=" items__second">
                        <div class=" items__flex">
                            <img src="images/propiedades/Garage Icon.png" alt="garage"">
                        <p class=" item__bold">${parqueadero}</span></p>
                        </div>
                        <div class="items__flex">
                            <img src="images/propiedades/Bathroom Icon.png" alt="bañera"">
                            <p class=" item__bold">${Nbaños}</p>
                        </div>
                        <div class="items__flex">
                            <img src="images/propiedades/Bedroom Icon.png" alt="cama"">
                            <p class=" item__bold">${Nhabitaciones}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    });
    card.innerHTML = elementos
    
}

