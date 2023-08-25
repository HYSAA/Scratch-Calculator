let buttonEl= document.querySelectorAll("button")
let inputID= document.getElementById("result")

for(let i=0; i < buttonEl.length;i++)
{
buttonEl[i].addEventListener("click",() =>{
let buttonValue=buttonEl[i].textContent;
console.log(buttonEl[i])

if(buttonValue==="C"){
    clearResult()
}else if(buttonValue==="=")
{
    calculateResult()
}
else{
appendValue(buttonValue)
}
});

}

const clearResult= () =>{
 inputID.value=""
}

const calculateResult= () =>{
inputID.value=eval(inputID.value)

}
function appendValue(buttonValue){
    inputID.value+=buttonValue;
}