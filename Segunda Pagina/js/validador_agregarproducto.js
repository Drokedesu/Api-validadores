$(document).ready(function() {

    $.validator.addMethod("soloLetras", function(value, element) {
        return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
    }, "Sólo se permiten letras y espacios en blanco.");

    $.validator.addMethod("soloNumeros", function(value, element) {
        return this.optional(element) || /^[\d]*$/.test(value);
    }, "Sólo se permiten letras y espacios en blanco.");    

    $("#formulario_productos").validate({
        rules: {
            id: {
                required: true,
                soloNumeros: true
            },
            producto: {
                required: true
            },
            categoria: {
                required: true,
            },          
            descripcion: {
                required: true,
                soloLetras: true
            },
            precio: {
                required: true,
                number:true,
                min:0
            },
            desc_suscriptor: {
                required: true,
                number:true,
                min:0,
                max:100
            },
            desc_oferta: {
                required: true,
                number:true,
                min:0,
                max:100
            }
        }, // --> Fin de reglas
        messages: {
            id: {
                required: "El id del producto debe contener solo números",
                soloNumeros: "El id del producto debe ser numérico, no aceptará letras🐧"
            },
            producto: {
                required: "El nombre del producto es un campo requerido",
            },
            categoria: {
                required: "Categoría del producto es un campo requerido",
            },
            descripcion: {
                required: "La descripción del producto es un campo requerido",
                soloLetras: "La descripción del producto sólo puede contener letras y espacios en blanco"
            },
            precio: {
                required: "El precio del producto sólo números",
                soloNumeros: "El precio del producto debe ser numérico, no aceptará letras🐧"
            },
            desc_suscriptor: {
                required: "El descuento por suscriptor debe ser solo números",
                soloNumeros: "El descuento aceptará solo números enteros y positivos🐧"
            },
            desc_oferta: {
                required: "El descuento por oferta debe ser solo números",
                soloNumeros: "El descuento aceptará solo números enteros y positivos🐧"
            },
            categoria: {
                required: "Seleccione una categoría",
            }
        }, // --> Fin de mensajes
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