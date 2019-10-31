function calculateSupply(){
	let maxAge = 100;
	let age = prompt('Introduce la edad');
	let cantday = prompt('Introduce cantidad por dia');
	let total = (cantday*365) * (maxAge-age);
	document.write("necesitara "+total+" para durar hasta la edad avanzada de "+maxAge);
}
calculateSupply();