// main.js

const cards = document.querySelector('#cards');
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

// ========== GRID / LIST VIEW ==========

gridbutton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
    gridbutton.classList.add("active");
    listbutton.classList.remove("active");
});

listbutton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
    listbutton.classList.add("active");
    gridbutton.classList.remove("active");
});

// ========== LOAD COMPANIES ==========

const url = 'data/members.json';

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');
        //let description = document.createElement('p');
        let membership = document.createElement('p');

        name.textContent = company.name;
        address.textContent = `Address: ${company.address}`;
        phone.textContent = `Phone: ${company.phone}`;
        //email.textContent = `Email: ${company.email}`;
        website.textContent = "Visit Website";
        website.href = company.website;
        website.target = "_blank";
        //description.textContent = `Description: ${company.description}`;
        //membership.textContent = `Membership: ${company.membership}`;

        image.setAttribute('src', company.image);
        image.setAttribute('alt', `Logo of ${company.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '200');
        card.appendChild(image);
        card.appendChild(name);
        //card.appendChild(description);
        card.appendChild(address);
        card.appendChild(phone);
        //card.appendChild(email);
        //card.appendChild(membership);
        card.appendChild(website);

        cards.appendChild(card);
    });
};

getCompanyData();
