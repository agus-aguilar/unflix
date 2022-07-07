function buscador() {
  $("#buscador").keyup(function (e) {
    console.log(e.target.value);
  });
}

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

$(document).ready(function () {
  buscador();
  mostrarTodo();
  filtrarSeries();
  filtrarPeliculas();

  $("#categorias").change(function () {
    let valor = $(this).val();
    switch (valor) {
      case "Terror":
        $("#pelicula1").hide();
        $("#pelicula2").hide();
        $("#pelicula3").hide();
        $("#pelicula4").hide();
        $("#pelicula5").hide();
        $("#pelicula6").hide();
        $("#serie5").show();
        $("#serie6").show();
        $("#serie1").hide();
        $("#serie2").hide();
        $("#serie3").hide();
        $("#serie4").hide();
        break;
      case "Romance":
        $("#pelicula1").hide();
        $("#pelicula2").hide();
        $("#pelicula3").hide();
        $("#pelicula4").hide();
        $("#pelicula5").hide();
        $("#pelicula6").hide();
        $("#serie1").hide();
        $("#serie2").hide();
        $("#serie3").hide();
        $("#serie4").hide();
        $("#serie5").hide();
        $("#serie6").hide();
        break;
      case "Suspenso":
        $("#pelicula1").show();
        $("#pelicula2").hide();
        $("#pelicula3").show();
        $("#pelicula4").show();
        $("#pelicula5").hide();
        $("#pelicula6").hide();
        $("#serie1").hide();
        $("#serie2").hide();
        $("#serie3").hide();
        $("#serie4").hide();
        $("#serie5").show();
        $("#serie6").hide();
        break;
      case "Comedia":
        $("#pelicula1").hide();
        $("#pelicula2").hide();
        $("#pelicula3").hide();
        $("#pelicula4").hide();
        $("#pelicula5").show();
        $("#pelicula6").show();
        $("#serie1").hide();
        $("#serie2").hide();
        $("#serie3").show();
        $("#serie4").show();
        $("#serie5").hide();
        $("#serie6").hide();
        break;
      case "Accion":
        $("#pelicula1").show();
        $("#pelicula2").show();
        $("#pelicula3").hide();
        $("#pelicula4").hide();
        $("#pelicula5").hide();
        $("#pelicula6").show();
        $("#serie1").hide();
        $("#serie2").show();
        $("#serie3").hide();
        $("#serie4").hide();
        $("#serie5").hide();
        $("#serie6").show();
        break;
    }
  });
});
