const url = 'data/members.json';
const spotlights = document.querySelector('#spotlights');

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();

    // Filtrar solo miembros oro (3) o plata (2)
    const filteredMembers = data.companies.filter(company => 
        company.membershipLevel === 3 || company.membershipLevel === 2
    );

    // Mezclar aleatoriamente el arreglo
    const shuffledMembers = filteredMembers.sort(() => 0.5 - Math.random());

    // Tomar los primeros 2 o 3 (aquí tomamos 3 si hay suficientes)
    const spotlightsToShow = shuffledMembers.slice(0, 3);

    displaySpotlights(spotlightsToShow);
}

function displaySpotlights(members) {
    spotlights.innerHTML = ''; // Limpiar contenido previo

    members.forEach(company => {
        let card = document.createElement('section');
        card.classList.add('spotlight-card'); // para estilos si quieres

        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');
        let membership = document.createElement('p');

        name.textContent = company.name;
        address.textContent = `Address: ${company.address}`;
        phone.textContent = `Phone: ${company.phone}`;
        membership.textContent = `Membership: ${company.membershipLevel === 3 ? 'Gold' : 'Silver'}`;

        website.textContent = "Visit Website";
        website.href = company.website;
        website.target = "_blank";

        image.setAttribute('src', company.image);
        image.setAttribute('alt', `Logo of ${company.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(membership);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        spotlights.appendChild(card);
    });
}

getCompanyData();
