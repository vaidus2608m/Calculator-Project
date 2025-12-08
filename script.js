const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "/", "*", "-", "+"];
const equalsTo = '=';
let output = "";

const calculate = (btnValue) => {
    if(btnValue == "AC"){
        output = "";
    } else if(btnValue == "DEL"){
        output = output.toString().slice(0,-1);
    } else if(output !== "" && btnValue == equalsTo){
        output = eval(output.replace("%", "/100"));
    } else {
        if(output == "" && specialChars.includes(btnValue)) return;
        let lastChar = output.slice(-1);
        if(specialChars.includes(lastChar) && specialChars.includes(btnValue)){
            output = output.slice(0, -1) + btnValue;
            display.value = output;
            return;
        }
        output += btnValue;
    }
    display.value = output;
}


buttons.forEach((button) => {
    button.addEventListener("click", (res) => calculate(res.target.dataset.value));
});
