function kereses(){
    let keresett_elem = document.getElementById("varos").value;
    keresett_elem = keresett_elem.trim().toLowerCase();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${keresett_elem}&appid=5fc20d0e4344e82dccd9751947802841&units=metric`


fetch(url)
.then(response => response.json())
.then(data =>{

    const div = document.getElementById("eredmeny");
    div.innerHTML = "";

    function weather_icon(weather_icon_name){
        const url = `https://openweathermap.org/img/wn/${weather_icon_name}@2x.png`
        const img = document.createElement("img")
        img.src = url;
        div.appendChild(img);
    }

    const City = document.createElement("h1");
    City.textContent = `${data.name}`
    div.appendChild(City);

    weather_icon(data.weather[0].icon);

    const weather = document.createElement("p");
    weather.textContent = `Időjárás: ${data.weather[0].main}`;
    div.appendChild(weather);

    const description = document.createElement("p");
    description.textContent = `Leírás: ${data.weather[0].description}`;
    div.appendChild(description);

    const Temp = document.createElement("p");
    Temp.textContent = `Hőmérséklet: ${data.main.temp} C°`;
    div.appendChild(Temp);

    const Temp_Feels_Like = document.createElement("p");
    Temp_Feels_Like.textContent = `Hőérzet: ${data.main.feels_like} C°`;
    div.appendChild(Temp_Feels_Like);

    const Min_temp = document.createElement("p");
    Min_temp.textContent = `Minimum hőmérséklet: ${data.main.temp_min} C°`
    div.appendChild(Min_temp);

    
    const Max_temp = document.createElement("p");
    Max_temp.textContent = `Maximum hőmérséklet: ${data.main.temp_max} C°`
    div.appendChild(Max_temp);

    const Humidity = document.createElement("p");
    Humidity.textContent = `Páratartalom: ${data.main.humidity}%`;
    div.appendChild(Humidity);

    const Pressure = document.createElement("p");
    Pressure.textContent = `Légköri nyomás: ${data.main.pressure} hPa`;
    div.appendChild(Pressure);

    const Wind_Speed = document.createElement("p");
    Wind_Speed.textContent = `Szélsebesség: ${data.wind.speed}m/s`;
    div.appendChild(Wind_Speed);

    const Clouds = document.createElement("p");
    Clouds.textContent = `Felhőzet: ${data.clouds.all}%`;
    div.appendChild(Clouds);

    const Country = document.createElement("p");
    Country.textContent = `Ország: ${data.sys.country}`;
    div.appendChild(Country);

    // const Sunrise = document.createElement("p");
    // const sunrise_Time_UTC = new Date ( data.sys.sunrise * 1000);
    // const Sunrise_hours = sunrise_Time_UTC.getHours();
    // const Sunrise_hours_GMT = (Sunrise_hours + 1).toString().padStart(2, '0'); 
    // const Sunrise_minutes = sunrise_Time_UTC.getMinutes().toString().padStart(2, '0');
    // const Sunrise_seconds = sunrise_Time_UTC.getSeconds().toString().padStart(2, '0');
    // Sunrise.textContent = `Napkelte(Magyar idő szerint):  ${Sunrise_hours_GMT}:${Sunrise_minutes}:${Sunrise_seconds}`;
    // div.appendChild(Sunrise);

    // const SunSet = document.createElement("p");
    // const sunset_Time_UTC = new Date ( data.sys.sunset * 1000);
    // const Sunset_hour = sunset_Time_UTC.getHours();
    // const Sunset_hours_GMT = (Sunset_hour + 1).toString().padStart(2, '0');
    // const Sunset_minutes = sunset_Time_UTC.getMinutes().toString().padStart(2, '0');
    // const Sunset_seconds = sunset_Time_UTC.getSeconds().toString().padStart(2, '0');
    // SunSet.textContent = `Napnyugta(Magyar idő szerint): ${Sunset_hours_GMT}: ${Sunset_minutes}:${Sunset_seconds}`;
    // div.appendChild(SunSet);

    const Dt = document.createElement("p");
    const Dt_Time_UTC = new Date(data.dt * 1000);
    const Dt_Time_Hours = Dt_Time_UTC.getHours();
    const Dt_Time_hours_GMT = (Dt_Time_Hours + 1).toString().padStart(2, "0");  
    const Dt_Time_minutes = Dt_Time_UTC.getMinutes().toString().padStart(2, "0");  
    const Dt_Time_Seconds = Dt_Time_UTC.getSeconds().toString().padStart(2, "0");  
    Dt.textContent = `Az adatok rögzítésének az ideje(Magyar idő szerint): ${Dt_Time_hours_GMT}:${Dt_Time_minutes}:${Dt_Time_Seconds}` 
    div.appendChild(Dt);

})
.catch(error =>{
    const div = document.getElementById("eredmeny");
    div.innerHTML = ""; 

    const erroMsg = document.createElement("p");
    erroMsg.textContent = error.message;

    div.appendChild(erroMsg);
})
}
document.getElementById("kereses").addEventListener("click", kereses);
document.getElementById("varos").addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        kereses();
    }
})