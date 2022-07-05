function validar(){
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    var regextel = /^[0-9]{9}$/;
    var mensaje =""; 
    var error =0; /*variable auxiliar que se va a utilizar para retornar o no falso. 
                            En caso de que su valor sea 0, retornara verdadero y el formulario se enviara. En el caso de que sea mayor a 0 retornara falso.*/
    reset();
    if ($("#usuario").val()==""){ /*valida que nombre no este vacio*/
        mensaje+= "<p>El campo usuario es obligatorio </p>";
        error++;
        $("#usuario").addClass('error');
    }

    if(!$("#email").val().match(regexemail)){
        mensaje+= "<p>Debe ingresar un mail valido</p>";
        error++;
        $("#email").addClass('error');
    }

    if (error>0){        
        $("#mensaje").append(mensaje);
        return false;
    }
    else{
        //aqui al validar las opciones habilitamos el boton enviar
        $("#enviar").prop("disabled",false);
        return true;
    }

}
function reset(){ 
    $("#usuario").removeClass('error');
    $("#email").removeClass('error');
    $("#mensaje").empty(); 
}
$(document).ready(function(){

    //aqui preguntamos si se le hace click a cancelar, de ser verdadero cancela la operacion y vuelve a index.html
    $("#form").submit(function() {
        if($("#cancelar").click()){
            return true
        }
        return validar();
    });
    $("#usuario").keyup(function() {
        validar();
    });   
    $("#email").keyup(function() {
        validar("#email");
    });
});