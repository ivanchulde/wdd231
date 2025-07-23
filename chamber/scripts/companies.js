const url = 'data/members.json';
const cards = document.querySelector('#cards');

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

getCompanyData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');
        let description = document.createElement('p');
        let membership = document.createElement('p');

        // Build the h2 content out to show the company's name
        name.textContent = company.name;
        address.textContent = `Address: ${company.address}`;
        phone.textContent = `Phone: ${company.phone}`;
        email.textContent = `Email: ${company.email}`;
        website.textContent = `Website: ${company.website}`;
        description.textContent = `Description: ${company.description}`;
        membership.textContent = `Membership: ${company.membership}`;

        website.href = company.website;
        website.textContent = "Visit Website";
        website.target = "_blank";

        image.setAttribute('src', company.image);
        image.setAttribute('alt', `Logo of ${company.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');

        // Append elements to card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(email);
        card.appendChild(membership);
        card.appendChild(website);

        // Append card to container
        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}