$(function(){
  $("#divPrincipal").css({
    "background-image": "url('imagenes/fondos/fondo_thoughts.jpg')"
  });
});

var pen_act = 12

function verPensamiento(n){

  var pensamientos = document.getElementsByClassName("pensamiento");

  pen_act += n;

  if(pen_act > pensamientos.length){
    pen_act = 1;
  }

  if(pen_act == 0){
    pen_act = pensamientos.length - 1;
  }

  for(var i = 0; i < pensamientos.length; i++){
    pensamientos[i].style.display = "none";
  }

  pensamientos[pen_act - 1].style.display = "block";

  console.log(pen_act);

}
