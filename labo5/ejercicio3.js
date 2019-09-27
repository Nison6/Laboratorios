var num = [1,5,7,9,6,6,8,6,7];
  
  function ocurrencia(valor, evaluar) {
    let cont = 0;
    for (let i = 0; i < evaluar.length; i++) {
      if (evaluar[i] == valor) {
        cont = cont + 1;
      }
    }
    console.log(`el numero es: ${valor} se repite ${cont}` );
}
ocurrencia(6,num);