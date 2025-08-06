import { places } from '../data/places.mjs';
console.log(places);

const showHere = document.querySelector('#allplaces');

function displayItems(places) {
    places.forEach(x => {
        let thecard = document.createElement('div');
        let thephoto = document.createElement('img');
        
        // Load eagerly if it's the first/main image (e.g., first in the array)
        if (places.indexOf(x) === 0) {
            thephoto.loading = 'eager';  // Critical LCP image
        } else {
            thephoto.loading = 'lazy';   // All other images
        }
        thephoto.src = `images/${x.photo_url}`;



        thephoto.alt = x.name;
        thephoto.loading = 'lazy';
        thecard.appendChild(thephoto);
        //build the title element
        const thetitle = document.createElement('h2');
        thetitle.innerText = x.name;
        thecard.appendChild(thetitle);
        //build the address element
        const theaddress = document.createElement('address');
        theaddress.innerText = x.address;
        thecard.appendChild(theaddress);
        //build the description element
        const thedesc = document.createElement('p');
        thedesc.innerText = x.description;
        thecard.appendChild(thedesc);
        //build the button element
        const thebutton = document.createElement('button');
        thebutton.innerText = "Learn More";
        thecard.appendChild(thebutton);

        showHere.appendChild(thecard);
    });
}

displayItems(places);

const messageContainer = document.getElementById("visit-message");
const lastVisitKey = "lastVisit";
const now = Date.now();

function showVisitMessage() {
    const lastVisit = localStorage.getItem(lastVisitKey);

    let message = "";

    if (!lastVisit) {
        // First-time visitor
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const msInDay = 1000 * 60 * 60 * 24;
        const daysSinceLastVisit = Math.floor((now - Number(lastVisit)) / msInDay);

        if (daysSinceLastVisit < 1) {
            message = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit === 1) {
            message = `You last visited 1 day ago.`;
        } else {
            message = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    }

    // Display message in sidebar
    messageContainer.textContent = message;

    // Save the current date as the new last visit
    localStorage.setItem(lastVisitKey, now);
}

showVisitMessage();