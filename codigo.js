

$(function() {
	  
	 $('.js-boton-cookie').click(function() {
	 //Almaceno los datos en localStorage (clave, valor)
	 localStorage.setItem('callegps', 'Calle GPS');
	 //Oculto la barra que muestra la información de política de cookies
	 $('.politicas-cookie').css('display', 'none');
	 //Muestro un mensaje en consola
	 console.log('Has aceptado nuestra política de cookies. ☺️');
	});

	//Creo la variable "dev" que almacena el valor asignado que seria (Luis Rene Mas Mas)
	var dev = localStorage.getItem('callejero');
	//Realizo una condición si el valor obtenido de la variable "dev" es diferente (null) quiere decir que el usuario a aceptado nuestra política de cookies
	if(dev != null){
	 $('.politicas-cookie').css('display', 'none');
	}else{//De lo contrario muestro la información
	 $('.politicas-cookie').css('display', 'block');
	}
	  
});