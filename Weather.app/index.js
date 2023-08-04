const apikey="9dab9c7f08d1373bedebe5c87693fd4a "
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.getElementById("search-el");
const searchbtn=document.getElementById("search button");
const weatherIcone=document.getElementById("weather-icon")
 
async function checkweather(city) {
    const response =await fetch(apiurl+ city+`&appid=${apikey}`);
     var data =await response.json()
     document.getElementById("city").innerHTML=data.name;
     document.getElementById("temp").innerHTML= Math.round(data.main.temp) + "°C";
    if(data.weather[0].main=="clouds"){
        weatherIcone.src="weather.jpeg"

    }
    else if(data.weather[0].main=="rain"){
    weatherIcone.src="rain.jpeg"
    }else if(data.weather[0]=="Drizzel"){
        weatherIcone.src="drizze.jpeg"

    }
    else if(data.weather[0].main=="mist"){
        weatherIcone.src="mist.jpeg"
    }

    document.getElementById("Weather").style.display="block"

    
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})