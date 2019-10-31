function calculateAge(){
	let añoNac = prompt('Introduce año nacimiento');
	let añoAc = prompt('Introduce año actual');
	let año = añoAc - añoNac;
	document.write("tu edad es "+año+" o "+año - 1+");
}
calculateAge();