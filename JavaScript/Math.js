//Math.pow => POTENCIA
function potencia(x,y){
    return Math.pow(x,y);
}
console.log(potencia(2,3));

//Math.round: redondeará el número decimal al entero más próximo.
function MathRound(x){
    return Math.round(x);
}
console.log(MathRound(0.49));
console.log(MathRound(0.50));

//Math.floor: redondeará el número decimal al entero de menor valor.
function MathFloor(x){
    return Math.floor(x);
}
console.log(MathFloor(5.88));

//Math.ceil: redondeará un número al siguiente entero.
function MathCeil(x){
    return Math.ceil(x);
}
console.log(MathCeil(3.27));

//Math.max - Math.min: Nos permitirán conocer el valor máximo o mínimo de un conjunto de números.
function MathMax(){
    return Math.max(1,2,3,4,5);
}
console.log(MathMax());

function MathMin(){
    return Math.min(1,2,3,4,5);
}
console.log(MathMin());

//Math.random: nos permitirá generar un número aleatorio. Es importante tener en cuenta que el número que se 
// generará es decimal, y puede ser cualquiera entre el 0 y el 1.

console.log(Math.random());
