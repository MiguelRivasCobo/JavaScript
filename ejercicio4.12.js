var columnas =prompt('Introduzca numero de columnas');
var altura =prompt('Introduzaca la altura');
var ancho =prompt('Introduzca ancho');
document write(<table border =”0” cellspacing = ”2” bgcolor= ”black” width="200”>);
document write( tr bgcolor = ” white ” +altura+ = ”50”>);	
	for (var i=0;i<= +columnas+;i++){
		if (+columnas+%2==0)
		document.write('<td  bgcolor =white "+ancho+" ”50” > ; </td>');
			else{
				document.write('<td  bgcolor =black +ancho+ ”50” > ; </td>');
			}
	}
	document.write('</tr>');
	document.write('</table>')
