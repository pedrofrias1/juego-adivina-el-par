// inicialización.
let tarjetasDestapadas = 0;
let tarjeta1=null;
let tarjeta2=null;
let primerResultado=null;
let segundoResultado=null;
let movimientos=0;
let aciertos=0;
let temporizador=false;
let time=0;


// console.log(dia);

//document html
const mostarMovimientos=document.getElementById("movimientos");
const acertados=document.getElementById("aciertos");
const timer=document.getElementById("tiempo");

// generador de numeros.
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
//numeros aleatorios.
numeros = numeros.sort(()=> {return Math.random()-0.5});

//tiempo del juego
function ContarTiempo(){
  tiempoStart=setInterval(()=>{
    time++
    timer.innerHTML=`tiempo: ${time} segundos`
  },1000)
}

// función principal.
function DarVuelta(id) {
 tarjetasDestapadas++;
  
 if (temporizador==false) {
    ContarTiempo();
    temporizador=true
 }

 
 
  //cantidad de tarjetas destapadas=1.
  if(tarjetasDestapadas==1){
    //incremento tarjeta.
    tarjeta1=document.getElementById(id);
    
    primerResultado=numeros[id];
    tarjeta1.innerHTML=primerResultado;

    
    
    

    //parar incremento.
    tarjeta1.disabled=true;

    //tarjetas destapadas=2.
  }else if (tarjetasDestapadas== 2){
    //2da tarjeta destapada
    tarjeta2=document.getElementById(id);

    segundoResultado=numeros[id];
    tarjeta2.innerHTML=segundoResultado;
    //parar incremento.
    tarjeta2.ariaDisabled=true;

    //si se destapan 2 se agrega un movimiento.
    movimientos++;
    mostarMovimientos.innerHTML=`movimientos: ${movimientos}`;


    //tarjetas acertadas.
    if (primerResultado==segundoResultado) {
      tarjetasDestapadas=0

      //aumentar aciertos
      aciertos++;
      acertados.innerHTML=`acertados: ${aciertos}`
      //aciertos=8 -fin del juego
      if(aciertos==8){
        
        clearInterval(tiempoStart)
        acertados.innerHTML=`acertados: ${aciertos} :)`;
        mostarMovimientos.innerHTML=`movimientos: ${movimientos} .)`;
        
        timer.innerHTML=`tiempo total ${time} segundos`
       
      }
    }else{
      //mostrar y tapar en un lapso de 1.7s.
      setTimeout(()=>{
        tarjeta1.innerHTML="";
        tarjeta2.innerHTML="";
        tarjeta1.disabled=false;
        tarjeta2.disabled=false;
        tarjetasDestapadas=0;
      },1700);
    }
  }
}

