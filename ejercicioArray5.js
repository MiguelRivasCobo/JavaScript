function paresImpares(arr){
	var arro = new Array();

	for(i=0; i<arr.length; i++){
		if(arr[i]%2 == 0){
			arro.push(arr[i]);
		}else{
			arro.unshift(arr[i]);
		}
	}
	return arro;
}

function muestraArray(arr){
	arr.forEach(function (a) {
    	document.write(a+"  ");
	});
}

function ej(){
	var ar = Array();
	for (i=0; i<100; i++){
		ar[i]=Math.trunc(Math.random()*1000+1);
	}
	muestraArray(ar);
	document.write("<br>");
	muestraArray(paresImpares(ar));

}

ej();