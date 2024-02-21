// llamo al html los valores de las cartas.
let cartas = document.querySelector(".cartas");
let paloArriba = document.querySelector(".paloArriba");
let numeros = document.querySelector(".numeros");
// let paloAbajo = document.querySelector(".paloAbajo")


// valores y cartas .
let palo = ["espada","basto","oro","copa"]
let numero = ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "10" , "11" , "12" ];
const totalCartas= 40;


// let palos={
//     espada:Math.floor(Math.random()*numeros.length-0) + " de espada",
//     basto:Math.floor(Math.random()*numeros.length)+" de basto",
//     copa:Math.floor(Math.random()*numeros.length)+" de copa",
//     oro:Math.floor(Math.random()*numeros.length)+" de oro",
// }

const crearCarta=()=>{

    let valorSimple=palo[Math.floor(Math.random()*palo.length)];
    let simpleNumero=numero[Math.floor(Math.random()*numero.length)];
    let enseñar= `${simpleNumero}  ${valorSimple}`;
    
    console.dir(valorSimple);
    
     for (let i = 0; i <= 3; i++) {
            if (valorSimple==="espada"){
                cartas.classList.add("espada")
            }

        let card=cartas.innerHTML= `<h4>${enseñar}</h4> 
                                     
        `
        

    }
    
    


    const mostrarCarta=()=>{
      
       
        
        
    }
    mostrarCarta()


   
}
crearCarta();

//const palos = ["corazon", "diamante", "pica", "trebol"];
// const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// let paloArriba = document.querySelector("#simboloArriba");
// let numero = document.querySelector("#numero");
// let paloAbajo = document.querySelector("#simboloAbajo");


// function eleccionCarta(arr1, arr2){
//     let carta =[]
//     carta.push(arr1[Math.floor(Math.random()*arr1.length)]);
//     carta.push(arr2[Math.floor(Math.random()*arr2.length)]);
//     return carta
// }
// function asignarColor(arr){
//     if(arr[0] === "corazon" || arr[0] === "diamante"){
//         paloArriba.style.color = "red";
//         numero.style.color = "red";
//         paloAbajo.style.color = "red";
//     }
//     else{
//         paloArriba.style.color = "black";
//         numero.style.color = "black";
//         paloAbajo.style.color = "black";
//     }
// }
// function asignarPalo(arr){
//     if(arr[0] === "corazon"){
//         paloArriba.innerHTML = "♥"
//         paloAbajo.innerHTML = "♥"
//     }
//     else if(arr[0] === "diamante"){
//         paloArriba.innerHTML = "♦"
//         paloAbajo.innerHTML = "♦"
//     }
//     else if(arr[0] === "trebol"){
//         paloArriba.innerHTML = "♣"
//         paloAbajo.innerHTML = "♣"
//     }
//     else{
//         paloArriba.innerHTML = "♠"
//         paloAbajo.innerHTML = "♠"
//     }
// }
// function asignarValor(arr){
//     numero.innerHTML = arr[1];
// }
// function generacionCarta(){
//     let carta = eleccionCarta(palos, valores);
//     asignarColor(carta);
//     asignarPalo(carta);
//     asignarValor(carta);
// }

// window.onload = function(){generacionCarta()}
// document.querySelector(".boton").addEventListener("click", generacionCarta)


