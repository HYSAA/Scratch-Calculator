let buttonEl= document.querySelectorAll("buttons")
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
appendValue()
}
});

}

const clearResult= () =>{
 inputID.textContent=""
}

const calculateResult= () =>{
inputID.value=eval(inputID.eval)

}
const appendValue=(buttonValue) => {
    inputID.value+= buttonValue
}