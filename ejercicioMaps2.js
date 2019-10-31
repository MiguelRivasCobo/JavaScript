 var map;


  	 function initMap() {
  	 	navigator.geolocation.getCurrentPosition(mostrarPosicion);
        map = new google.maps.Map(document.getElementById('map'), {
		  center: {lat: 37, lng: 3},
          zoom: 6,
        });
        
      }
      function mostrarPosicion(position){
      var marker = new google.maps.Marker({
          position: {lat: position.coords.latitude, lng:position.coords.longitude},
          map: map,
	  
        });
  }
  function Error(objPositionError)
		{
			switch (objPositionError.code)
			{
				case objPositionError.PERMISSION_DENIED:
					document.write("No se ha permitido el acceso a la posición del usuario.");
				break;
				case objPositionError.POSITION_UNAVAILABLE:
					document.write("No se ha podido acceder a la información de su posición.");
				break;
				case objPositionError.TIMEOUT:
					document.write("El servicio ha tardado demasiado tiempo en responder.");
				break;
				default:
					document.write( "Error desconocido.");
			}
		}


