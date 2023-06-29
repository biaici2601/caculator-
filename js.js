const ApiKey = "8b756c3dbc92949101f279ec7be8ac42";
const WetherData = document.getElementById("wether-data")
const Inphutcity = document.getAnimations("input-city")
const FormEL     = document.querySelector("form")
FormEL.addEventListener("submit" ,function(even){
    even.preventDefault()
    const cityValue = Inphutcity.value;
    getWetherData(cityValue);
})
async function getWetherData(cityValue){
    try{
        const respon = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${ApiKey}&units=metric`);
    if(!respon.ok){
        throw new Error("Đã xảy ra lỗi nhé")
    }
    const data = await respon.json();
    const temperature = Math.round(data.main.temp);
    const description = data.wether[0].icon;
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ];
    WetherData.querySelector(".icon").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
    WetherData.querySelector(".description").textContent =description;
    WetherData.querySelector(".details").innerHTML = details
    .map((detail) => `<div>${detail}</div>`)
    .join("");



    }catch(error){
        
        WetherData.querySelector(".icon").innerHTML = "";
        WetherData.querySelector(".temperature").textContent = "";
        WetherData.querySelector(".description").textContent =
          "An error happened, please try again later";
    
        WetherData.querySelector(".details").innerHTML = "";
      }
    }




