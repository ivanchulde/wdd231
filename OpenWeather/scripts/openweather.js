//SELECT HTML ELEMENTS IN THE DOCUMENT
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

//CREATE REQUIED VARIABLES FOR THE URL
const myKey = "36016bf371f6a793ae9bf5ba9e72fe32";
const myLat = "-1.26696911825746034";
const myLong = "-78.62687872536068";

// CONSTRUCT A FULL PATH USING TEMPLETE LITERALS
const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

//TRY TO GRAB THE CURRENT WEATHER DATA
async function apiFetch() {
  try {
    const response = await fetch(myUrl);
    if (response.ok) {
      const data = await response.json();
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

//DISPLAY THE JASON DATA ONTO THE HTML WEB PAGE

function displayResults(data) {  
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;C`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
    
}

apiFetch();
