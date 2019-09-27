var num = [5, 5, 5, 5];
 

    function promedio(valor) {
        let suma = 0;
        let pro;
        for (let i = 0; i < valor.length; i++) {
          suma = valor[i] + suma;
        }
        pro = suma / valor.length;
        console.log(" la suma es " + suma + " y el promedio es " + pro);
      }

  

  promedio(num);