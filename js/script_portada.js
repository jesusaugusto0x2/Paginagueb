function aparecerInfo(){
  $("#div_info").delay(800).fadeIn();
}

function cambiarRojo(){
  $("#parraf_nombre").css("color", "#C81B13");
  $("#parraf_nombre").html("Jesús Augusto");

  $("#parraf_inf").css("color", "#C81B13");
  $("#parraf_inf").html("Not like Jesuschrist, lmao <strike> RED 'CAUSE I LOVE CHAVEZ </strike>");
}

function cambiarBlanco(){
  $("#parraf_nombre").css("color", "white");
  $("#parraf_nombre").html("My name should appear here...");

  $("#parraf_inf").css("color", "white");
  $("#parraf_inf").html("I don't consider myself cool, or smart, I'm actually kinda dumb");
}

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

$(function(){
  $("#div_parrafNombre").hover(function(){
    cambiarRojo();
    aparecerInfo();
  }, function(){
    cambiarBlanco();
  });
});

$(function(){
  $(".boton_info").hover(function(){
    $(this).addClass("boton_infoActivo");
    $(this).children().addClass("text_infoActivo");
  }, function(){
    $(this).removeClass("boton_infoActivo");
    $(this).children().removeClass("text_infoActivo");
  });
});
