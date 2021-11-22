
let value1 = document.getElementById("Valeur1");
let value2 = document.getElementById("Valeur2");
let buttonAdd = document.getElementById("Add");
let buttonSub = document.getElementById("Sub");
let buttonMultiply = document.getElementById("Mult");
let buttonDivide = document.getElementById("Div");
let result = document.getElementById("result");

buttonAdd.addEventListener("click", function(){

   result.value = Number.parseInt(value1.value) + Number.parseInt(value2.value);

})
buttonSub.addEventListener("click", function(){

    result.value = Number.parseInt(value1.value) - Number.parseInt(value2.value);

})
buttonMultiply.addEventListener("click", function(){

    result.value = Number.parseInt(value1.value) * Number.parseInt(value2.value);

})
buttonDivide.addEventListener("click", function(){
    let valeur2 = Number.parseInt(value2.value);
    if(valeur2 === 0){
        alert('Impossible de diviser par zéro')
    }
    result.value = Number.parseInt(value1.value) / valeur2;

})