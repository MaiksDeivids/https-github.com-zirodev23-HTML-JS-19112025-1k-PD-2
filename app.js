// your code goes here
const buttonCalc = document.getElementById("calc-button")
const inputField1 = document.getElementById("input1")
const inputField2 = document.getElementById("input2")
const outputVal = document.getElementById("value-output")
const outputBMI = document.getElementById("bmi-output")

    buttonCalc.addEventListener('click', calcBMI)

    function calcBMI(){
        let sum = 0;
        output =  inputField1.value / inputField2.value

        outputVal.innerHTML = output

    }


