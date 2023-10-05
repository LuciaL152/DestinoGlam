//en una variable de tipo const guardo la clase menu-hambuerguesa.
const menuHamburguesa = document.querySelector(".menu-hamburguesa");

//en una variable de tipo const guardo la clase contenedor-enlaces.
const contenedorEnlaces = document.querySelector (".contenedor-enlaces");

//en una variable de tipo const guardo la clase cerrar-menu-hamburguesa.
const cerrarMenuHamburguesa = document.querySelector(".cerrar-menu-hamburguesa");

//en una variable de tipo const guardo la clase enlace.
const menuEnlaces = document.querySelectorAll(".enlace");

//le asigno a mi variable menuHamburguesa un evento de tipo click. Este evento dispara una funcion
menuHamburguesa.addEventListener("click", function () {

    // la funcion le añade a mi variable contenedorEnlaces la clase "mostrar".
    contenedorEnlaces.classList.add("mostrar")
});

//le asigno a mi variable cerrarMenuHamburguesa un evento de tipo click. Este evento dispara una funcion
cerrarMenuHamburguesa.addEventListener("click",function (){

    //le quito a mi variable contenedorEnlaces la clase "mostrar".
    contenedorEnlaces.classList.remove("mostrar")
});

//le asigno a mi variable el metodo forEach porque necesito seleccionar varios elementos.
menuEnlaces.forEach((enlace) => {
    enlace.addEventListener("click", function(){
     contenedorEnlaces.classList.remove("mostrar")
    })
})

