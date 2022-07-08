function filtrarSeries() {
  $("#serie").click(function () {
    $("#pelicula1").hide();
    $("#pelicula2").hide();
    $("#pelicula3").hide();
    $("#pelicula4").hide();
    $("#pelicula5").hide();
    $("#pelicula6").hide();
    $("#serie1").show();
    $("#serie2").show();
    $("#serie3").show();
    $("#serie4").show();
    $("#serie5").show();
    $("#serie6").show();
  });
}


function mostrarTodo() {
  $("#home").click(function () {
    $("#pelicula1").show();
    $("#pelicula2").show();
    $("#pelicula3").show();
    $("#pelicula4").show();
    $("#pelicula5").show();
    $("#pelicula6").show();
    $("#serie1").show();
    $("#serie2").show();
    $("#serie3").show();
    $("#serie4").show();
    $("#serie5").show();
    $("#serie6").show();
  });
}

function filtrarPeliculas() {
  $("#pelicula").click(function () {
    $("#serie1").hide();
    $("#serie2").hide();
    $("#serie3").hide();
    $("#serie4").hide();
    $("#serie5").hide();
    $("#serie6").hide();
    $("#pelicula1").show();
    $("#pelicula2").show();
    $("#pelicula3").show();
    $("#pelicula4").show();
    $("#pelicula5").show();
    $("#pelicula6").show();
  });
}

$(document).ready(function () {
  mostrarTodo();
  filtrarSeries();
  filtrarPeliculas();

  $("#cerrarSesion").click(function() {
    localStorage.clear();
  })
});
