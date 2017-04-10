var indice = 0;
var colores = ["blue", "yellow", "red", "green", "cyan", "pink"];

function cambiarColor(){
  if(indice == colores.length){
    indice = 0;
  }

  document.getElementById("titulo").style.color = colores[indice];
  indice ++;
}

var intervalo = setInterval(cambiarColor, 80);
