function validar(){

    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    var mensaje="";
    var error=0;
    var regexnombre = /^[a-zA-Z]+$/; 
    var regexusuario =  /^[0-9a-zA-Z]+$/;
    var regexcontraseña =  /^([a-z]+[0-9]+)|([0-9]+[a-z]+)/i;

    reset();
    if(!($("#nombre").val().match(regexnombre))){

        mensaje+= "<p>El campo nombre es obligatorio y solo acepta letras </p>";
        error++;
        $("#nombre").addClass('error');
    }

    if(!($("#apellido").val().match(regexnombre))){

        mensaje+= "<p>El campo apellido es obligatorio y solo acepta letras </p>";
        error++;
        $("#apellido").addClass('error');
    }

    if(!$("#mail").val().match(regexemail)){
        mensaje+= "<p>Debe ser un email valido</p>";
        error++;
        $("#mail").addClass('error');
    }

    if(!($("#usuario").val().match(regexusuario))){

        mensaje+= "<p>El campo usuario es obligatorio </p>";
        error++;
        $("#usuario").addClass('error');
    }


    if(!($("#pass").val().match(regexcontraseña))){
        
        mensaje+= "<p>El campo contraseña es obligatorio y debe tener al menos 2 letras, 2 numeros, 2 caracteres especiales y una longitud de 8 caracteres </p>";
        error++;
        $("#pass").addClass('error');
    }

    if(!($("#pass2").val()==$("#pass").val())){

        mensaje+= "<p>Las contraseñas tiene que ser iguales </p>";
        error++;
        $("#pass2").addClass('error');
    }

    if (!($("input[name='pago']").is(':checked'))) { 
        mensaje+= "<p>Debe seleccionar un metodo de pago</p>";  
        error++;
    }

    //implementamos un for in para saber en que opcion estamos preguntando con un switch
    let opciones= document.getElementsByName("pago");    
    for(i in opciones){
        if(opciones[i].checked){
            console.log(opciones[i].value);
            switch(opciones[i].value){
                case "tarjeta":
                    if(!($("#numtarjeta").val().match(/^[0-9]{16,19}$/))){
                        mensaje+= "<p>el numero de tarjeta tiene que tener entre 16 y 19 digitos</p>";  
                        error++;
                    }
                    if(!($("#codseg").val().match(/^[0-9]{3}$/))){
                        mensaje+= "<p>el codigo deben ser 3 numeros distintos de 0</p>";  
                        error++;
                    }
                break;

                case "cupon":
                    if (!($("#rapipago").is(':checked')|| $("#pagofacil").is(':checked'))){ 
                        mensaje+= "<p>Debe elegir un cupon de pago</p>";
                        error++;
                    }
                break;

                case "transferencia":
                    if(!($("#cbu").val().match(/^[0-9]{22}$/))){
                        mensaje+= "<p>El CBU debe tener 22 digitos</p>";  
                        error++;
                    }
                break;
            }
        }
    }

    

    if (error>0){        
        $("#mensaje").append(mensaje); 
        return false;
    }

    else{
        $("#enviar").prop("disabled",false);
        return true;
    }
}

function reset(){

    $("#nombre").removeClass('error');
    $("#apellido").removeClass('error');
    $("#mail").removeClass('error');
    $("#usuario").removeClass('error');
    $("#pass").removeClass('error');
    $("#pass2").removeClass('error');
    $("input[name='pago']").removeClass('error');

    $("#numtarjeta").removeClass('error');
    $("#codseg").removeClass('error');
    $("#rapipago").removeClass('error');
    $("#pagofacil").removeClass('error');
    $("#cbu").removeClass('error');


    $("#mensaje").empty();
}

$(document).ready(function() {
            
    
    $("#form").submit(function() {
        if($("#cancelar").click()){
            return true
        }
        return validar();
    });
    //si se registra guarda el nombre en localstorage, de otra forma no lo guarda
    $("#nombre").keyup(function() {
        localStorage.setItem("nombre",$("#nombre").val());
        validar();

    });
    $("#apellido").keyup(function() {
        localStorage.setItem("apellido",$("#apellido").val());
        validar();
    });

    $("#mail").keyup(function() {
        localStorage.setItem("mail",$("#mail").val());
        validar();
    });

    $("#usuario").keyup(function() {
        localStorage.setItem("usuario",$("#usuario").val());
        validar();
    });
    $("#pass").keyup(function() {
        localStorage.setItem("pass",$("#pass").val());
        validar();
    });
    $("#pass2").keyup(function() {
        validar();
    });
    $("#input[name='pago']").change(function() {
        validar();
    });
    $("#numtarjeta").keyup(function() {
        validar();

    });
    $("#codseg").keyup(function() {
        validar();

    });
    $("#rapipago").change(function() {
        validar();

    });
    $("#pagofacil").change(function() {
        validar();

    });
    $("#cbu").keyup(function() {
        validar();

    });
    

});




