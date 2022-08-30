/*El scope local de bloque es el entorno donde las variables locales únicamente pueden ser accedidas desde un bloque de código del programa. 
Un bloque de código es todo aquello que está dentro de los caracteres de llaves {}.

Hoisting en variables
Para hablar del scope de bloque, realizaré una breve explicacion de Hoisting. Hablaré un más de esto en su clase respectiva.

Hoisting es un término para describir que la declaración de variables y funciones son desplazadas a la parte superior del scope más cercano.

*/

function fruits(){
    if(true){ 

    var fruit1 = 'Apple';
    let fruit2 = 'Banana';
    const fruit3 = 'Kiwi';

    console.log(fruit2);
    console.log(fruit3);

    }

    console.log(fruit1);    
}

fruits();