// Suma de digitos

function digitsSum(numero) {
    if(!Number.isInteger(numero)){
        console.log("El número debe de ser entero"); 
    }

    else {  
        suma = numero
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0);    
        return suma;  
    }

    
}

console.log(digitsSum(1234));


// Palabra palindroma

function isPalindrome(palabra) {
    
    const palabraReversa = palabra.split('').reverse().join('');
    
    if (palabra === palabraReversa) {
        return true;
        
    } else {
        return false;
    }
}

console.log(isPalindrome("ana"));




// Ordenar array de números

function integerSort(array) {
    
    const nuevo = array.slice(); 

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (nuevo[j] > nuevo[j + 1])  {
                let temp = nuevo[j];
                nuevo[j] = nuevo[j + 1];
                nuevo[j + 1] = temp;
            }
            
        }

    }
    return nuevo;
}

console.log(integerSort([5, 10, 1, 4, 9, 6]));
 