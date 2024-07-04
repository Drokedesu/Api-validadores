$(document).ready(function() {
    $.validator.addMethod("emailCompleto", function(value, element) {
        var regex = /^[\w.]+@([\w-]+.)+[\w-]{2,4}$/;
        return regex.test(value);
    });

    $('#formulario_login').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            campo_contraseña: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Ingrese su correo o usuario",
                email: "El formato del correo no es válido"
            },
            password: {
                required: "Ingrese su contraseña"
            }
        },
        errorPlacement: function(error, element) {
            error.addClass('invalid-feedback');
            if (element.closest('.input-group').length) {
                error.insertAfter(element.closest('.input-group'));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element) {
            $(element).addClass('is-invalid');
            $(element).removeClass("is-valid")
        },
        unhighlight: function(element) {
            $(element).addClass("is-valid")
            $(element).removeClass('is-invalid');
        }
    });
});