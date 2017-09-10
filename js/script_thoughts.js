$(function(){
  var anchoDisp = ($(window).width() - $("#divPrincipal").width()) / 4;
  var altoDisp = $(window).height() / 6;

  $('body').css({
    "background-size": anchoDisp + "px " + altoDisp + "px",
    "background-attachment" : "fixed",
    "background-image": "url('imagenes/fondos/ojos.gif')"
  });
});

var pensamientos, pen_act = 0;

$(function(){
  $("#visor").click(function(){

    $("#visor").fadeOut(1000, function(){
      desaparecer("#divAviso");
      avanzarPensamiento();
    });

    $("#visor").fadeIn(1000);
  });
});

function desaparecer(div){
  $(div).css({
    "display" : "none"
  });
}

function avanzarPensamiento(){
  pensamientos = $(".pensamiento");

  pen_act ++;

  if(pen_act > pensamientos.length){
    pen_act = 1;
  }

  if(pen_act == 0){
    pen_act = pensamientos.length - 1;
  }

  avanzarDescrip(pen_act - 1);

  for(var i = 0; i < pensamientos.length; i++){
    pensamientos[i].style.display = "none";
  }
  pensamientos[pen_act - 1].style.display = "block";
}

function avanzarDescrip(pens_act){
  var descripciones = $(".textoInvi");

  var textoAct = $(descripciones[pens_act]).html();

  $("#textoDescrip").html(textoAct);

  var tamTex = $("#textoDescrip").textWidth();

  console.log("el texto es: " + textoAct + " y el tamaño: " + tamTex);

  tamTex = tamTex + (tamTex * 0.10);

  $("#divDescrip").css({
    "width" : tamTex + "px"
  });
}

$.fn.textWidth = function(text, font) {
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.width();
};
