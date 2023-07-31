
// 1) Multiplicacion
  function multi(a, b) {
  return a * b;
}

//2) RAIZ CUDRADA

  function raizCuadrada(a) {
  let resultado = 1; 
  while (resultado * resultado < a) {
    resultado = resultado+0.1 ; 
  }
  return parseFloat(resultado);
}

//3)Funcion potencia
function potencia(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
      result = result * a;
    } 
  return result;
  }
//4) DIVICION
function divicion(dividendo,divisor) {
let result=dividendo/divisor
return result
}

//5) Area de un circulo
function areaCirculo(radio,) {
  return 3.14*(radio*radio)
}

//6 SUMA
 function suma(a , b) {
  return  parseInt(a)+ parseInt(b)
 }

 //7) RESTA

 function resta(a,b) {
  return a-b
 }



 //8)NUMERO FACTORAIL

 function factorial(numero) {
  let resultado=""
  let total=0;
  for (let i = 1; i <= numero; i++){
   resultado=i+ " + "+resultado 
   total=total+i  
  }
  return resultado+" = "+total
 }
 //9) Numeros pares
 function pares(numero) {
  if (numero%2==0) {
    return numero +' es par'
  } else {
    return numero +' es impar'
  }
 }
 //10) PERIMETOR DE UN CILINDRO

 function areaDeUnCilindro(radio, altura) {
  return (2*3.14*radio*altura)+(2*3.14*(radio*radio))
 }

export default operaciones