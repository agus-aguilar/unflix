function buscador() {
    $("#buscador").keyup(function (e) {
      let buscador = $(this).val();
      switch(buscador){
        case "batman":
          $("#pelicula1").show();
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
        case "1917":
          $("#pelicula2").show();
          $("#pelicula1").hide();
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
        case "joker":
          $("#pelicula3").show();
          $("#pelicula1").hide();
          $("#pelicula2").hide();
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
        case "parasite":
          $("#pelicula4").show();
          $("#pelicula1").hide();
          $("#pelicula2").hide();
          $("#pelicula3").hide();
          $("#pelicula5").hide();
          $("#pelicula6").hide();
          $("#serie1").hide();
          $("#serie2").hide();
          $("#serie3").hide();
          $("#serie4").hide();
          $("#serie5").hide();
          $("#serie6").hide();
          break;
        case "shrek 2":
          $("#pelicula5").show();
          $("#pelicula1").hide();
          $("#pelicula2").hide();
          $("#pelicula3").hide();
          $("#pelicula4").hide();
          $("#pelicula6").hide();
          $("#serie1").hide();
          $("#serie2").hide();
          $("#serie3").hide();
          $("#serie4").hide();
          $("#serie5").hide();
          $("#serie6").hide();
          break;
        case "piratas del caribe":
          $("#pelicula6").show();
          $("#pelicula1").hide();
          $("#pelicula2").hide();
          $("#pelicula3").hide();
          $("#pelicula4").hide();
          $("#pelicula5").hide();
          $("#serie1").hide();
          $("#serie2").hide();
          $("#serie3").hide();
          $("#serie4").hide();
          $("#serie5").hide();
          $("#serie6").hide();
          break;
        case "breaking bad":
          $("#pelicula6").hide();
          $("#pelicula1").hide();
          $("#pelicula2").hide();
          $("#pelicula3").hide();
          $("#pelicula4").hide();
          $("#pelicula5").hide();
          $("#serie1").show();
          $("#serie2").hide();
          $("#serie3").hide();
          $("#serie4").hide();
          $("#serie5").hide();
          $("#serie6").hide();
          break;
      case "el marginal":
          $("#pelicula6").hide();
          $("#pelicula1").hide();
          $("#pelicula2").hide();
          $("#pelicula3").hide();
          $("#pelicula4").hide();
          $("#pelicula5").hide();
          $("#serie2").show();
          $("#serie1").hide();
          $("#serie3").hide();
          $("#serie4").hide();
          $("#serie5").hide();
          $("#serie6").hide();
          break;
      case "friends":
          $("#pelicula6").hide();
          $("#pelicula1").hide();
          $("#pelicula2").hide();
          $("#pelicula3").hide();
          $("#pelicula4").hide();
          $("#pelicula5").hide();
          $("#serie3").show();
          $("#serie2").hide();
          $("#serie1").hide();
          $("#serie4").hide();
          $("#serie5").hide();
          $("#serie6").hide();
          break;
      case "merli":
          $("#pelicula6").hide();
          $("#pelicula1").hide();
          $("#pelicula2").hide();
          $("#pelicula3").hide();
          $("#pelicula4").hide();
          $("#pelicula5").hide();
          $("#serie4").show();
          $("#serie2").hide();
          $("#serie3").hide();
          $("#serie1").hide();
          $("#serie5").hide();
          $("#serie6").hide();
          break;
        case "ozark":
          $("#pelicula6").hide();
          $("#pelicula1").hide();
          $("#pelicula2").hide();
          $("#pelicula3").hide();
          $("#pelicula4").hide();
          $("#pelicula5").hide();
          $("#serie5").show();
          $("#serie2").hide();
          $("#serie3").hide();
          $("#serie4").hide();
          $("#serie1").hide();
          $("#serie6").hide();
          break;
        case "the walking dead":
          $("#pelicula6").hide();
          $("#pelicula1").hide();
          $("#pelicula2").hide();
          $("#pelicula3").hide();
          $("#pelicula4").hide();
          $("#pelicula5").hide();
          $("#serie1").hide();
          $("#serie2").hide();
          $("#serie3").hide();
          $("#serie4").hide();
          $("#serie5").hide();
          $("#serie6").show();
          break;
      }
    });
}
$(document).ready(function() {
    buscador();
})