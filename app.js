// Variables de los elementos de la calculadora
const pantalla = document.querySelector("#Pantalla");
let signo = document.querySelector(".signos");
const btnPotencia = document.querySelector("#potencia");
const btnRaiz = document.querySelector("#raiz");
const btnMultiplicacion = document.querySelector("#multiplicacion");
const btnDivision = document.querySelector("#division");
const btnSuma = document.querySelector("#suma");
const btnResta = document.querySelector("#resta");

//Variables para el backend
let num1 = "";
let num2 = "";
let elemento = ""; // En esta variable guardaremos el signo para cada funcion
let numero = ""; //Se guarda todo el contenido de la pantalla junto al simbolo
let operacion = true;   //Variable para el control de los botones
let indice; // Variable para el tamaño del string

// Funcion para mostrar la cuenta o los resultados en la pantalla
function Pantalla(num){
    numero = numero + num;
    pantalla.innerHTML = numero;
}

// Deteccion de los simbolos
function signos(simbolo){
    switch(simbolo){
        case "C":
            Eliminar();
            break;
        case "<-":
            Borrar();
            break;
        case "=":
            Resultado();
            break;
        case "^":
            operacion = false;
            elemento = '^';
            Desactivar();
            break;
        case "√":
            operacion = false;
            elemento = '√';
            Desactivar();
            break;
        case "X":
            operacion = false;
            elemento = 'X';
            Desactivar();
            break;
        case "/":
            operacion = false;
            elemento = '/';
            Desactivar();
            break;
        case "+":
            operacion = false;
            elemento = '+';
            Desactivar();
            //Raiz();
            break;
        case "-":
            operacion = false;
            elemento = '-';
            Desactivar();
            break;                
    }
}

// Funcion para limpiar la pantalla y las variables importantes
function Eliminar(){
    numero="";
    pantalla.innerHTML = 0;
    operacion = true;
    Desactivar();  
}

// Funcion para eliminar un numero de la variable y de la pantalla
function Borrar(){
    numero = numero + "";
    indice = numero.length;
    let resultado = "";
    if(indice <= 1){
        numero = "";
        pantalla.innerHTML = 0;
    }else{
        for(let i = 0; i < indice - 1; i++){
            resultado = resultado + numero[i]; 
        }
        numero = resultado;
        pantalla.innerHTML = 0;
        pantalla.innerHTML = numero;
    }

    if(numero.includes('^') || numero.includes('√') || numero.includes('X') || numero.includes('/') || numero.includes('+') || numero.includes('-')){
        operacion = false;
        Desactivar(); 
    }else{
        operacion = true;
        Desactivar();
    }
}

// Funcion que llama a las otras funciones y que entrega los valores
function Resultado(){
    let posicion = numero.indexOf(elemento);
    
    if(posicion < numero.length - 1 || posicion === -1){ //Validacion para NaN
        num1 = parseFloat(numero.slice(0,posicion));
        num2 = parseFloat(numero.slice(posicion+1, numero.length));
        
        switch(elemento){
            case '^':
                numero = Potencia(num1, num2);
                break;
            case '√':
                numero = Raiz(num2);
                break;
            case 'X':
                numero = Multiplicacion(num1,num2);
                break;
            case '/':
                numero = Division(num1, num2);
                break;    
            case '+':
                numero = Suma(num1, num2);
                break;
            case '-':
                numero = Resta(num1, num2);
                break;
        }
        pantalla.innerHTML = numero;
        operacion = true;
        Desactivar();
    }
    
}

// Operaciones
function Potencia(numero1, numero2){
    return Math.pow(numero1, numero2);
}

function Raiz(numero){
    return Math.sqrt(numero);
}

function Multiplicacion(numero1, numero2){
    return numero1 * numero2;
}

function Division(numero1, numero2){
    return numero1 / numero2;
}

function Suma(numero1, numero2){
    return numero1 + numero2;
}

function Resta(numero1, numero2){
    return numero1 - numero2;
}
// Operaciones

// Activa o desactiva los botones de la calculadora
function Desactivar(){
    if(operacion){
        btnPotencia.disabled = false;
        btnRaiz.disabled = false;
        btnDivision.disabled = false;
        btnMultiplicacion.disabled = false;
        btnSuma.disabled = false;
        btnResta.disabled = false;
        operacion = false; 
    }
    else{
        btnPotencia.disabled = true;
        btnRaiz.disabled = true;
        btnDivision.disabled = true;
        btnMultiplicacion.disabled = true;
        btnSuma.disabled = true;
        btnResta.disabled = true;
    }
    
}