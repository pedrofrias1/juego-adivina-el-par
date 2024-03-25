//fondo oscuro o claro
let cambio = false;


//html
let caja = document.querySelectorAll(".caja")
let fondo = document.getElementById("body");
let titulo = document.getElementById("titulo");
let modo= document.getElementById("modo");
let cont = document.getElementById("contenedor");

const oscuro=modo.innerHTML=`<i class="bi bi-moon-fill"></i>`;
//funcion principal.
const Cambio=(event)=>{
    cambio=!cambio;
 
//llamo documento.
    
    

    if(event.type=='click'){
        titulo.classList.toggle("color")
        fondo.classList.toggle('fondo-negro')
        modo.classList.toggle("color")
        modo.innerHTML=`<i class="bi bi-sun"></i>`
        cont.classList.toggle("contador")
        cont.classList.toggle("color")
    }


    
    for(const cajas of caja){
    cajas.classList.toggle("cajas")
    cajas.classList.toggle("color")
    }

    

    
}
