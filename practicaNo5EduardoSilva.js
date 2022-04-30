<!DOCTYPEhtml >
< html  lang =" es " >
< cabeza >
    <juego de caracteres meta  =" UTF-8 " >
    <meta  http-equiv =" X-UA-Compatible " content =" IE=edge " >
    <meta  name =" viewport " content =" ancho=ancho-del-dispositivo, escala-inicial=1.0 " >
    <título > <Matricez> </título >
</cabeza >
<cuerpo >
    <h1 > <Práctica No. 5 con JS "Arreglos y Matrices" </ h1 >
      <script  src =" indexMatricez.js " script

let arreglo Matriz = [ 1 , 2 , 3 ] , [ 4 , 5 , 6 ] , [ 7 , 8 , 9 ] ;

function  matrizOriginal ( arregloMatriz )  {   //Ordenamiento de la matriz i(filas),j(columnas), de acuerdo a sus respectivos componentes.
    consola _ log ( "Matriz Original" ) ;    
                                   
    para ( sea  i = 0 ,  j = 0 ;  i < 3 ;  i ++ )
    {
        consola _ log ( arreglo Matriz [ i ] [ j ] ,
                    arreglo Matriz [ i ] [ j + 1 ] ,
                    arreglo Matriz [ i ] [ j + 2 ] ) ;   //usamos j+1, j+2 para ir agregando los componentes por columnas, tiene esta apariencia para que me imprima los numeros en forma de matriz.   
    }
}

function  salida1 ( arreglo Matriz )  {
    consola_registro ( "Salida 1" ) ;

    for ( let  i = 2 ,  j = 2 ;  i >= 0 ;  i -- )   //Empezamos con la posición 2 que en este caso es la última parte del arregloMatriz [7,8,9] agregamos el decremento i-- de forma que quede 9,8,7.
    {
        <consola_log ( arreglo Matriz [ i ] [ j ] ,
                    arregloMatriz [ i ] [ j - 1 ] ,
                    arreglo Matriz [ i ] [ j - 2 ] ) ;  // para ir agregando los valores de j ponemos -1,-2 respectivamente, ya que estamos con decremento y siga el mismo orden.    
    }
}

function  salida2 (arreglo Matriz)  {
    consola_registro ( "Salida 2" ) ;

    for ( let  i = 0 , j = 0 ; j < 3 ; j ++ )        //Se puede decir que es una "matriz transpuesta" A 3*3 transposición A^{t} 3*3.
    {
        <consola_log (arreglo Matriz [ i ] [ j ] ,
                    arreglo Matriz [ i + 1 ] [ j ] ,
                    arreglo Matriz [ i + 2 ] [ j ] ) ;  //cambiamos a i+1, i+2 para ir agregando sus componentes por filas.   
    }
}

<function  salida3 ( arreglo Matriz )  {
    consola_registro ( "Salida 3" ) ;

    for ( let  i = 2 , j = 2 ; j >= 0 ; j -- )  //intercambio de filas y columnas, comenzando por la posición 2 del arreglo  Matriz [7,8,9] e ir decrementando por columnas(j) .
    {
        <consola_log ( arreglo Matriz [ i ] [ j ] ,
                    arreglo Matriz [ i - 1 ] [ j ] ,
                    arreglo Matriz [ i - 2 ] [ j ] ) ;  // para ir agregando los valores de i ponemos -1,-2 respectivamente, ya que estamos con decremento y siga el mismo orden.
    }
}   

matrizOriginal ( arregloMatriz ) ;
salida1 ( arreglo Matriz ) ;
salida2 ( arreglo Matriz ) ;
salida3 ( arreglo Matriz ) ;
< cuerpo >
</html> 