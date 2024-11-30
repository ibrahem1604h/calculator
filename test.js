let result = document.querySelector("#outPut");
let button = document.getElementsByClassName("number");
let opration = document.getElementsByClassName("spaicla");


let number = [];
let opration_marks = ["\\d+","x", "\\-", "\\+", "\\/", "%"];


for (let i = 0; i < button.length; i++){
    
    button[i].onclick = function () {
        
        if (result.value === "0") {
        result.value = "";
        };
        
        number.push(this.textContent)
        result.value = number.join("");
    };
    
};

for (let x = 0; x < opration.length; x++) {
    opration[x].onclick = function () {
        switch (opration[x].textContent) {
            case "+":
            case "-":
            case "/":
            case "x":
            case "%":
                if (result.value === "0" || opration_marks.includes(result.value.slice(-1))) {
                    break;
                };
                number.push(this.textContent);
                result.value = number.join("");
                break;
            case "-/+":
                
                if (result.value.slice(-1).includes("-")) {
                    break;
                }
                number.push("-");
                result.value = number.join("");
                
                break;
            case "C":
                result.value = '0';
                number.length = 0;
                break;
            case "AC":
                number.pop()
                result.value = result.value.slice(0, -1)
                if (result.value === '') {
                    result.value = '0'
                }
                break;
            case "=":
                let proses = result.value;
                result.value = "";
                number.length = 0;
                let b=new RegExp(`(${opration_marks.join("|")})`,"g")
                let arr = proses.match(b)
                
                for (let r = 0; r < arr.length; r++){
                    if (arr[r] === "x") {
                        arr[r] = "*";
                    }
                }
                let claulator = arr.join("");
                claulator = eval(claulator);
                
                
                
                result.value = claulator;

        }
    }
}