let buttonEl= document.querySelector("buttons")
let inputID= document.getElementById("result")




const clearResult= () =>{
 inputID.textContent=""
}

const calculateResult= () =>{
inputID.value=eval(inputID.eval)

}
const appendValue=(buttonValue) => {
    inputID.value+= buttonValue
}