var numberButton = document.querySelectorAll(".numbers");
var addButton = document.querySelector("#operator-add");
var subtractButton = document.querySelector("#operator-subtract"); 
var multiplyButton = document.querySelector("#operator-multiply"); 
var divideButton = document.querySelector("#operator-divide"); 
var clearButton = document.querySelector("#clear");

var returnOutput = document.querySelector("#output");
var click = parseInt(numberButton.innerText);
var storeNumber;
var input = [];

// created function for add operator to add multiple numbers


function store(){
    input.push(storeNumber)
}
storeNumber = returnOutput.innerText;
console.log(storeNumber);


//  function to store addition
function add () {
    if (input.length === 0){
        store()
}
    input.push("+")
    returnOutput.innerText= ""
} 
    // var total = [];
    // var total = 0;
    // for (var i = 0; i < total.length; i++) {
    //     total += +totals[i];
    // } 
    // return total
//   }
// created function for subtract operator to subtract multiple numbers


function subtract(){

}

function multiply(){

}

function divide(){

}

function clickNumber(){
    returnOutput.innerText = returnOutput.innerText + this.innerText;
    storeNumber = parseInt(returnOutput.innertext);
    return storeNumber
}
for (var i = 0; i < numberButton.length; i++){
numberButton[i].addEventListener("click", clickNumber);    
}

function clickOperatorsAdd(){
    returnOutput.innerText = returnOutput.innerText + addButton.innerText;
}
addButton.addEventListener("click", clickOperatorsAdd); 

function clickOperatorsSubtract(){
    returnOutput.innerText = returnOutput.innerText + subtractButton.innerText;
}
subtractButton.addEventListener("click", clickOperatorsSubtract);    

function clickOperatorsMultiply(){
    returnOutput.innerText = returnOutput.innerText + multiplyButton.innerText;
}
multiplyButton.addEventListener("click", clickOperatorsMultiply); 

function clickOperatorsDivide(){
    returnOutput.innerText = returnOutput.innerText + divideButton.innerText;
}
divideButton.addEventListener("click", clickOperatorsDivide); 

function clear(){
    returnOutput.innerText = "";
}
clearButton.addEventListener("click", clear);

function equals(){

}
































// let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('button'));

// buttons.map( button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = "Error"
//                 }
//                 break;
//             case '←':
//                 if (display.innerText){
//                    display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });
