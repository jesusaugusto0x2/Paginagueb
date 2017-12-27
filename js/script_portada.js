$(function(){

  var ancho = $("#contenedor_prin").width() / 6;
  var largo = $("#contenedor_prin").height() / 6;

  var tama = ancho + "px " + largo + "px";

  console.log(tama);

  $("#contenedor_prin").css({
    "background-size": tama,
    "background-image": "url('gif_fondo02.gif')"
  });
});

function aparecerInfo(){
  $("#div_info").fadeIn("slow");
}

function cambiarRojo(){
  $("#nombre").css("color", "#C81B13");
  $("#nombre").html("Jesús Augusto");

  $("#inf").css("color", "#C81B13");
  $("#inf").html("<small>Don't know where I am, or what I'm supposed to do...</small>");
}

function cambiarBlanco(){
  $("#nombre").css("color", "#CCBDBD");
  $("#nombre").html("Wanna know my name?");

  $("#inf").css("color", "#CCBDBD");
  $("#inf").html("<small>Just move your mouse around here</small>");
}

$(function(){
  $("#div_nombre").hover(function(){
    cambiarRojo();
    aparecerInfo();
    console.log("hola");
  }, function(){
    cambiarBlanco();
  });
});