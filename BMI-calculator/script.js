const weight_input=document.getElementById("weight");
const height_input=document.getElementById("height");
const calculatebtn=document.getElementById("calculate");
const resetbtn=document.getElementById("reset");
const resultDiv=document.getElementById("result");



calculatebtn.addEventListener("click",()=>{
    const weight=parseFloat(weight_input.value);
    const height=parseFloat(height_input.value);
    if(!weight||!height||weight<=0||height<=0){
        resultDiv.textContent="enter valid weight and height";
        return;
    }
    const BMI=weight/((height*0.01)*(height*0.01)).toFixed(2);
    let category="";
    if (BMI<18.5){category="Underweight";}
    else if (BMI<24.9){category="Normal weight";}
    else if (BMI<24.9){category="overweight";}
    else{category="Obese";}
    
    resultDiv.textContent=`your BMI is ${BMI}(${category})`;

});

resetbtn.addEventListener("click",()=>{
    weight_input.value="";
    height_input.value="";
    resultDiv.textContent="";
});

