let inputValue = document.querySelector("cityInput");
let btn = document.querySelector("add");
let city = document.querySelector("cityOutput");
let description = document.querySelector("description");
let temp = document.querySelector("temp");
apik="63a90ae96d390ec37d6c1252f5a86e1a";

function convertion(val){
  return (val-273).toFixed(3)
}

btn.addEventListener("click",function(){
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid="+apik)
  .then(res => res.json())

  .then(data =>{
    let nameVal = data["name"]
    let description = data["weather"]["0"]["description"]
    let temperature = data["main"]["temp"]
    let windSpeed = data["wind"]["speed"]


    city.innerHTML=`weather of <span>${nameVal}</span>`
    temp.innerHTML=`Temperature: <span>${convertion(temperature)} C </span>`
    description.innerHTML=`Sky Conditions:<span>${description}</span>`
    wind.innerHTML-`Wind Speed:<span>${windSpeed} km/h</span>`
  })

  .catch(err => alert("You Entered Wrong City Name"))
})