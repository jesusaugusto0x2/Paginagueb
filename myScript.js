var indice = 0;
var colores = ["imagenes/img_01.jpg",
                "imagenes/img_02.jpg",
                "imagenes/img_03.jpg",
                "imagenes/img_04.jpg",
                "imagenes/img_05.png",
                "imagenes/img_06.jpg",
                "imagenes/img_07.jpg",
                "imagenes/img_08.jpg"];

var indi = colores.length;

function cambiarImagenPrin(){
  if(indice == colores.length){
    indice = 0;
  }

  document.getElementById("img_infoGen").src = colores[indice];
  indice ++;
}

var intervalo = setInterval(cambiarImagenPrin, 100);
