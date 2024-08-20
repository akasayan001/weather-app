async function submit()
{
    var name = document.getElementById("name").value;
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=610f38e1b091be8efceece0b072ef417&units=metric`)
    const data= await response.json();
    document.getElementById("temp").innerHTML=data.main.temp;
    document.getElementById("humidity").innerHTML=data.main.humidity;
    document.getElementById("windspeed").innerHTML=data.wind.speed;
    document.getElementById("pressure").innerHTML=data.main.pressure;

    var description = data.weather[0].description;
    document.getElementById("description").innerHTML = description;

}
