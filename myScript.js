var indice = 0;
var colores = ["blue", "yellow", "red", "green", "cyan", "pink"];

var indi = colores.length;

function cambiarColor(){
  if(indice == colores.length){
    indice = 0;
  }

  document.getElementById("titulo").style.color = colores[indice];
  indice ++;
}

function cambiarFondo(){
  if(indi == -1){
    indi = colores.length;
  }

  document.getElementById("division_02").style.background-color = colores[indi];
  indi --;
}

var intervalo = setInterval(cambiarColor, 80);
