// llamo al html los valores de las cartas.
let cartas = document.querySelector(".cartas");
let paloArriba = document.querySelector(".paloArriba");
let numeros = document.querySelector(".numeros");



// let paloAbajo = document.querySelector(".paloAbajo")


// valores y cartas .
let palo = ["espada","basto","oro","copa"]
let numero = ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "10" , "11" , "12" ];
const totalCards=3;
let cards=[];


// let palos={
//     espada:Math.floor(Math.random()*numeros.length-0) + " de espada",
//     basto:Math.floor(Math.random()*numeros.length)+" de basto",
//     copa:Math.floor(Math.random()*numeros.length)+" de copa",
//     oro:Math.floor(Math.random()*numeros.length)+" de oro",
// }

//generar la carta.
const crearCarta=()=>{

    let valorSimple=palo[Math.floor(Math.random()*palo.length)];
    let simpleNumero=numero[Math.floor(Math.random()*numero.length)];
    let enseñar= `${simpleNumero}  ${valorSimple}`;
    let card=cartas.innerHTML= `<h4>${enseñar}</h4>`;

    
    
     for (let i = 0; i < totalCards; i++) {
        let carta = card;
        cards.push(carta)
        let nuevaCartas = document.createElement("div");
        nuevaCartas.classList.add("cartas");
        
        nuevaCartas.innerHTML=`<h4>${enseñar}</h4>`;
        
        


        console.log(nuevaCartas);
            
           
            
            

            if (valorSimple==="espada"){
                cartas.classList.add("espada")
            }
            if (valorSimple==="oro") {
                cartas.classList.add("oro");
            }
            if (valorSimple==="basto") {
                cartas.classList.add("basto");
            }
            if (valorSimple==="copa") {
                cartas.classList.add("copa");
            }

        
        

    }
    
    


    


   
}
crearCarta();



