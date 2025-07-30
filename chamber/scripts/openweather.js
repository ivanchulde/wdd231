//SELECT HTML ELEMENTS IN THE DOCUMENT
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const myToday = document.querySelector('#today');
const myDay2 = document.querySelector('#day2');
const myDay4 = document.querySelector('#day4');
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


//CREATE REQUIED VARIABLES FOR THE URL
const myKey = "36016bf371f6a793ae9bf5ba9e72fe32";
const myLat = "-1.26696911825746034";
const myLong = "-78.62687872536068";

// CONSTRUCT A FULL PATH USING TEMPLETE LITERALS
const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;
const myForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;




//TRY TO GRAB THE WEATHER FORECAST DATA
async function apiFetchForecast() {
  try {
    const response = await fetch(myForecastUrl);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

//GET THE DAY

function getDayNameFromTimestamp(timestamp) {
  const date = new Date(timestamp * 1000); // El timestamp viene en segundos, se convierte a milisegundos
  return dayNames[date.getDay()];
}

//DISPLAY THE JASON DATA ONTO THE HTML WEB PAGE

function displayForecast(data) { 
    console.log("hello");
    myTown.innerHTML = data.city.name
    myDescription.innerHTML = data.list[0].weather[0].description
    myTemperature.innerHTML = `${data.list[0].main.temp}&deg;C`
    const icon_today = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    myGraphic.setAttribute('src', icon_today);
    myGraphic.setAttribute('alt', data.list[0].weather[0].description);

    const day0 = data.list[0];  
    const day2 = data.list[16];
    const day4 = data.list[32];
    
    const day0Name = getDayNameFromTimestamp(day0.dt);
    const day2Name = getDayNameFromTimestamp(day2.dt);
    const day4Name = getDayNameFromTimestamp(day4.dt);


    myToday.innerHTML = `${day0Name}: ${day0.main.temp}&deg;C - ${day0.weather[0].description}`;
    myDay2.innerHTML = `${day2Name}: ${day2.main.temp}&deg;C - ${day2.weather[0].description}`;
    myDay4.innerHTML = `${day4Name}: ${day4.main.temp}&deg;C - ${day4.weather[0].description}`;


}



//

apiFetchForecast();
