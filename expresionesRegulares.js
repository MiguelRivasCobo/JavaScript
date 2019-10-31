function validarNombre(){

	validarNombre = /^[a-zA-z ]$/;
		if(validarNombre.test(document.getElementByid ='nombre'.value)==true)
			document.getElementByid = 'nombre'.style.background="green";
		else
			document.getElementByid = 'nombre'.style.background="red";
}

function validarApellidos(){
	validarApellidos = /^[a-zA-z ]*[a-zA-z ]$/;
		if(validarApellidos.test(document.getElementByid ='apellidos'.value)==true)
			document.getElementByid = 'apellidos'.style.background="green";
		else
			document.getElementByid = 'apellidos'.style.background="red";
}

function validarDni(){
	validarDni = /^[0-9]{8,8}[A-Za-z]$/
		if(validarNombre.test(document.getElementByid ='dni'.value)==true)
			document.getElementByid = 'dni'.style.background="green";
		else
			document.getElementByid = 'dni'.style.background="red";
}

function validarTelefono(){
	validarTelefono = /^[0-9]{9} $/
		if(validarNombreDeUsuario.test(document.getElementByid ='telefono'.value)==true)
			document.getElementByid = 'telefono'.style.background="green";
		else
			document.getElementByid = 'telefono'.style.background="red";
}

function validarEmail(){
	validarEmail = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/
		if(validarNombre.test(document.getElementByid ='email'.value)==true)
			document.getElementByid = 'email'.style.background="green";
		else
			document.getElementByid = 'email'.style.background="red";
}

function validarNombreDeUsuario(){
	validarNombreDeUsuario = /^[a-z0-9_\\_\ü]+$/
		if(validarNombreDeUsuario.test(document.getElementByid ='nombre_usuario'.value)==true)
			document.getElementByid = 'nombre_usuario'.style.background="green";
		else
			document.getElementByid = 'nombre_usuario'.style.background="red";
}