$(document).ready(function() {

$.validator.addMethod("soloNumeros", function(value, element) {
    return this.optional(element) || /^[\d]*$/.test(value);
}, "Sólo se permiten letras y espacios en blanco.");

$("#formulario_bodega").validate({
    rules: {
        campo_categoria: {
            required: true
        },
        campo_nombre_juego: {
            required: true
        },
        cantidad: {
            required: true,
            number: true,
            min: 1
        }
    },
    messages: {
        campo_categoria: {
            required: "Por favor, selecciona una categoría"
        },
        campo_nombre_juego: {
            required: "Por favor, selecciona un juego"
        },
        cantidad: {
            required: "Por favor, ingresa una cantidad",
            number: "Por favor, ingresa un número válido",
            min: "La cantidad debe ser al menos 1"
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
    },
    unhighlight: function(element) {
        $(element).removeClass('is-invalid');
    }
});
});