let cityinput=document.getElementById( "city");
let searchbutton =document.getElementById("searchbutton");
const resultDiv =document.getElementById( "result");
searchbutton.addEventListener("click",()=>{
    let city=cityinput.value.trim("");
    if (city===""){
        resultDiv.innerHTML="please enter a city";
        return;
    }
    getweather(city);
});
const API_key="c6a73b2c75f5e189f09fc5c2b247f1d2";
function getweather(city){
    const apiurl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    fetch(apiurl).then(Response =>{
        if (!Response.ok){
            throw new Error("city not found");
        }
        return Response.json();
    })
    .then(data =>{
        const temp= data.main.temp;
        const desc=data.weather[0].description;
        const cityName=data.name;
        const country=data.sys.country;
        resultDiv.innerHTML=`
        <h2>${cityName},${country}</h2>
        <p> Temperature : ${temp}°C</p>
        <p> condition :${desc}</p>`;
        
        
    })
    .catch(error =>{
        resultDiv.innerHTML=`❌ ${error.message}`;
    });
}

