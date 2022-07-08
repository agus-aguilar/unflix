function filtroTemporadas() {
    $(document).ready(function(){
      $("#temporadas").change(function() {
        let temporadas = $(this).val();
        switch(temporadas){
            case "Temporada 1":
                $("#cap1").show();
                $("#cap2").show();
                $("#cap3").show();
                $("#cap4").show();
                $("#cap5").show();
                $("#cap6").show();
                $("#cap7").show();
                $("#cap8").show();
                break;
            case "Temporada 2":
                $("#cap1").show();
                $("#cap2").show();
                $("#cap3").show();
                $("#cap4").show();
                $("#cap5").show();
                $("#cap6").show();
                $("#cap7").hide();
                $("#cap8").hide();
                break;
            case "Temporada 3":
                $("#cap1").show();
                $("#cap2").show();
                $("#cap3").show();
                $("#cap4").hide();
                $("#cap5").hide();
                $("#cap6").hide();
                $("#cap7").hide();
                $("#cap8").hide();
                break;
            case "Temporada 4":
                $("#cap1").show();
                $("#cap2").show();
                $("#cap3").show();
                $("#cap4").show();
                $("#cap5").show();
                $("#cap6").show();
                $("#cap7").hide();
                $("#cap8").hide();
                break;
            case "Temporada 5":
                $("#cap1").show();
                $("#cap2").show();
                $("#cap3").show();
                $("#cap4").show();
                $("#cap5").show();
                $("#cap6").show();
                $("#cap7").show();
                $("#cap8").hide();
                break;
            case "Temporada 6":
                $("#cap1").show();
                $("#cap2").show();
                $("#cap3").show();
                $("#cap4").show();
                $("#cap5").show();
                $("#cap6").show();
                $("#cap7").show();
                $("#cap8").show();
                break;
            case "Temporada 7":
                $("#cap1").show();
                $("#cap2").show();
                $("#cap3").show();
                $("#cap4").show();
                $("#cap5").hide();
                $("#cap6").hide();
                $("#cap7").hide();
                $("#cap8").hide();
                break;
            case "Temporada 8":
                $("#cap1").show();
                $("#cap2").show();
                $("#cap3").show();
                $("#cap4").show();
                $("#cap5").show();
                $("#cap6").show();
                $("#cap7").hide();
                $("#cap8").hide();
                break;
            case "Temporada 9":
                $("#cap1").show();
                $("#cap2").show();
                $("#cap3").show();
                $("#cap4").show();
                $("#cap5").show();
                $("#cap6").hide();
                $("#cap7").hide();
                $("#cap8").hide();
                break;
            case "Temporada 10":
                $("#cap1").show();
                $("#cap2").show();
                $("#cap3").show();
                $("#cap4").show();
                $("#cap5").show();
                $("#cap6").show();
                $("#cap7").show();
                $("#cap8").show();
                break;
        }
    });
    })
}

filtroTemporadas();