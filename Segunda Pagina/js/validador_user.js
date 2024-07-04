$(document).ready(function() {
	$.validator.addMethod("rutChileno", function(value, element) {
		var rutPattern = /^\d{7,8}-[\dK]$/;
    return rutPattern.test(value);
	}, "El RUT no es válido (escriba sin puntos y con guión)");

	// Agregar método de validación para correo
	$.validator.addMethod("emailCompleto", function(value, element) {
		var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
		return regex.test(value);
	}, 'El formato del correo no es válido');
	
	$.validator.addMethod("soloLetras", function(value, element) {
		return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
	}, "Sólo se permiten letras y espacios en blanco.");

	document.getElementById("rut").addEventListener('keyup', function(e) {
		e.target.value = e.target.value.toUpperCase();
	});

	$("#formulario_user").validate({
		rules: {
			id: {
				required: true,
				id: true
			},
			rut: {
				required: true,
				rutChileno: true
			},
			nombre: {
				required: true,
				soloLetras: true
			},
			apellidos:{
				required: true,
				soloLetras: true
			},
			email: {
				email: true,
				required: true,
				emailCompleto: true,
			},
			direccion: {
				required: true,
				minlength: 15,
				maxlength: 100,
			},
			categoria: {
                required: true,
            }
		},
		messages: {
			id: {
                required: "El id del Usuario debe contener solo números",
                soloNumeros: "El id del Usuario debe ser numérico, no aceptará letras🐧"
            },
			rut: {
				required: "Este campo es obligatorio.",
				rutChileno: "RUT no válido (escriba sin puntos y con guión)."
			},
			nombre: {
				required: "Este campo es obligatorio.",
				soloLetras: "Sólo se permiten letras y espacios.",
			},
			apellidos: {
				required: "Este campo es obligatorio.",
				soloLetras: "Sólo se permiten letras y espacios."
			},
			email: {
				required: "Este campo es obligatorio.",
				email: "El correo no es válido.",
			},
			direccion: {
				required: "Este campo es obligatorio.",
				minlength: "El mínimo de caracteres es de 15.",
				maxlength: "El maximo de caracteres es de 100.",
			},
			categoria: {
                required: "Seleccione una categoría",
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
