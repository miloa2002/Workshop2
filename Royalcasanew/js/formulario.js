const formulario = document.querySelector("#formulario");
//const tipo = document.querySelector("#tipo");
//const words = document.querySelector("#words");

function mostrarTipo(resultado){
    formulario.addEventListener("submit", (e)=>{
        e.preventDefault();
        const arrayFiltrado = resultado.filter(item =>{
            const usuario = tipo.value.toLowerCase();
            const letraApi = item.Tipo.toLowerCase();
            if(letraApi.indexOf(usuario) !== -1){
                return item
            }
        })
        mostrarHTML(arrayFiltrado)
    })
}

//select ubicacion
function filtros(resultado){
    const ubicacion = document.querySelector("#ubicacion");

ubicacion.addEventListener("change",(e)=>{
    const query = e.target.value

    if(query === ""){
        mostrarHTML(resultado)
    }else{
        const arrayFiltrado = resultado.filter(item => item.ubicacion === query)
        mostrarHTML(arrayFiltrado)
    }
})
}
