var indice = 0;
var colores = ["imagenes/gif/img_01.jpg",
                "imagenes/gif/img_02.jpg",
                "imagenes/gif/img_03.jpg",
                "imagenes/gif/img_04.jpg",
                "imagenes/gif/img_05.png",
                "imagenes/gif/img_06.jpg",
                "imagenes/gif/img_07.jpg",
                "imagenes/gif/img_08.jpg"];

var indi = colores.length;

function cambiarImagenPrin(){
  if(indice == colores.length){
    indice = 0;
  }

  document.getElementById("img_infoGen").src = colores[indice];
  indice ++;
}

var intervalo = setInterval(cambiarImagenPrin, 100);
