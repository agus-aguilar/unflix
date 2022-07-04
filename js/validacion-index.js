function validar(){
    var mensaje =""; 
    var error =0; 
    reset();
    if ($("#usuario").val()==""){
        mensaje+= "<p>El campo usuario es obligatorio </p>";
        error++;
        $("#usuario").addClass('error');
    }

    if ($("#contraseña").val()==""){ 
        mensaje+= `<p>El campo contraseña es obligatorio </p>`;
        error++;
        $("#contraseña").addClass('error');
    }

    if (error>0){        
        $("#mensaje").append(mensaje); 
        return false;
    }

    else{
        return true;
    }

}
function reset(){

    $("#usuario").removeClass('error');
    $("#contraseña").removeClass('error');
    $("#mensaje").empty();
}

$(document).ready(function() {
    
    $("#form").submit(function() {
        if(validar()){
            localStorage.setItem("usuario",$("#usuario").val());
            localStorage.setItem("contraseña",$("#contraseña").val());
        }
        return validar();
    });
    $("#usuario").keyup(function() {
        validar();

    });
    $("#contraseña").keyup(function() {
        validar();
    });

});
