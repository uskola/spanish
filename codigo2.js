

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

	$(document).ready(function(e){
	try{    
	var busqueda = $('#busqueda'),
	titulo = $('strong');
	console.log(titulo);
	$(titulo).each(function(){
		var li = $(this);
		//si presionamos la tecla
		$(busqueda).keyup(function(){
			//cambiamos a minusculas
			this.value = this.value.toLowerCase();
			//
			var clase = $('.search i');
			if($(busqueda).val() != ''){
				$(clase).attr('class', 'fa fa-times');
			}else{
				$(clase).attr('class', 'fa fa-search');
			}
			if($(clase).hasClass('fa fa-times')){
				$(clase).click(function(){
					//borramos el contenido del input
					$(busqueda).val('');
					//mostramos todas las listas
					$(li).parent().show();
					//volvemos a añadir la clase para mostrar la lupa
					$(clase).attr('class', 'fa fa-search');
				});
			}
			//ocultamos toda la lista
			$(li).parent().hide();
			//valor del h3
			var txt = $(this).val();
			console.log($(this).val());
			//si hay coincidencias en la búsqueda cambiando a minusculas
			if($(li).text().toLowerCase().indexOf(txt) > -1){
				//mostramos las listas que coincidan
				$(li).parent().show();
			}
		});
	});		
	
	
	}
catch(e){
	console.log(e);
}

});