const apiURL = "http://localhost:3000/peliculas";

document.addEventListener("DOMContentLoaded", obtenerDatos);

async function obtenerDatos(){
    try {
        const respuesta = await fetch(apiURL);
        const result = await respuesta.json();
        crearElement(result);
        filtrar(result);
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

const peliculas = document.querySelector(".peliculas__cards");
function crearElement(result) {
    let pelicula = ""
    result.forEach(element => {
        const{nombre, puntaje, generoOne, generoDos, imagen, puntajeTotal} = element
        pelicula += `
        <div class="pelicula__card">
            <img src="${imagen}" alt="">
            <p class="nombre">${nombre}</p>
            <div class="puntaje">Puntaje: ${puntaje}/${puntajeTotal}</div>
            <div class="genero">${generoOne}/${generoDos}</div>
        </div> 
        `
    });
    peliculas.innerHTML = pelicula
}

/*buscador*/
const input = document.querySelector("#buscar");
function filtrar(result){
    input.addEventListener("keyup", (e)=>{
        e.preventDefault();
        const peliculaFiltrada = result.filter(peli =>{
            const usuarioBusca = input.value.toLowerCase();
            const palabrasApi = peli.nombre.toLowerCase();
            if(palabrasApi.includes(usuarioBusca)){
                return peli
            }
        })
        crearElement(peliculaFiltrada)
    })
}