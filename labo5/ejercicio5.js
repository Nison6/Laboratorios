function palindromo(palabra) {
    palabra = palabra.toLowerCase();
    if(Array.from(palabra).toString()=== Array.from(palabra).reverse().toString()){
        console.log("LA PALABRA ES PALINDROME");
    }
    else{
        console.log("LA PALABRA NO ES PALINDROME");
    }

  }

  palindromo("reconocer");