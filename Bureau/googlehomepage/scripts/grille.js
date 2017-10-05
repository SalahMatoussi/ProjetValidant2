

var n = prompt('entrer une valeur : ');
var carré = document.getElementById("carré");
var carrél = document.getElementsByClassName("carrél");

while(n < 1 || n > 71){
	var n = prompt('entrer une valeur : ');
	}
	var number = parseInt(n);
	Math.floor(number);
	
	console.log(number);
    
    let size = 600 / number;
    
    console.log(size);

	for(var i = 0; i < number*number ; i++)
	{
		console.log(size);
		carré.innerHTML += '<p style="width:'+size+'px; height:'+size+'px; margin:0; border-bottom: 1px solid black; border-right: 1px solid black";>' + '</p>'; 
	}

