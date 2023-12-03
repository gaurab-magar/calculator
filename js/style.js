document.addEventListener("DOMContentLoaded",function(){
    let Display = document.getElementById("calculatorInput");
    let btns = document.getElementsByClassName("btn");
    let currentValue = "";
    function evaluateResult(){
        const result = eval(currentValue);
        currentValue = result.toString();
        Display.value = currentValue;
    }
    function removeLast(){
        if (Display.value == "0"){
            return false;
            } else {
                currentValue = currentValue.slice(0, -1)
                Display.value = currentValue;
                };
    }
    
    for(let i=0; i < btns.length; i++){
        const btn = btns[i];
        btn.addEventListener("click",function(){
            const values = btn.innerText;
            if(values == 'RESET' ){
                currentValue = "";
                Display.value = currentValue;
            }else if(values == "="){
                evaluateResult();
            }else if(values == "DEL"){
                removeLast();
            }else{
                currentValue += values;
                Display.value = currentValue;
            }

        })
    }
})