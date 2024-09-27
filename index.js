const apikey="662bd1b375415fffdbd950a5fb6c4981";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");







async function checkweather(city){
    const response = await fetch(apiUrl+ city +`&appid=${apikey}`);
    var data= await response.json();
    console.log(data);
    console.log(data.weather[0].main);

    if(response.status==404){
        document.querySelector(".weather").style.display= "none";
        document.querySelector(".error").style.display= "block";

    }
    else{
        console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";


    document.querySelector(".weather").style.display= "block";
    document.querySelector(".error").style.display= "none";

    if(data.weather[0].main == "Haze"){
        document.getElementsByClassName(".weather-icon").src="images\drizzle.png";
    }
    



    
}
}



searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})
