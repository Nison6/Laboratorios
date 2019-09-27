function promedio{
    var x = prompt("Ingrese Un Valor");
    var arr = [];
    for (var i =0;i<20;i++){
        arr.push(Math.floor(Math.random()*100+1));
 
    }
    if(arr.includes(x)){
        console.log("Ha adivinado el numero")
    }
    else{
        console.log(" No Ha adivinado el numero")
    }
}