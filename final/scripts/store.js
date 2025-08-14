const showHere = document.querySelector('#allplaces');

async function displayItems() {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=12');
        const data = await response.json();
        const products = data.products;

        products.forEach((x, index) => {
            let thecard = document.createElement('div');
            thecard.className = 'product-card'; // opcional para CSS

            let thephoto = document.createElement('img');
            
            // Load eagerly if it's the first/main image
            if (index === 0) {
                thephoto.loading = 'eager';
            } else {
                thephoto.loading = 'lazy';
            }
            thephoto.src = x.thumbnail;
            thephoto.alt = x.title;
            thecard.appendChild(thephoto);

            // Title
            const thetitle = document.createElement('h2');
            thetitle.innerText = x.title;
            thecard.appendChild(thetitle);

            // Description
            const thedesc = document.createElement('p');
            thedesc.innerText = x.description;
            thecard.appendChild(thedesc);

            // Price
            const theprice = document.createElement('p');
            theprice.innerHTML = `<strong>Price:</strong> $${x.price}`;
            thecard.appendChild(theprice);

            // Button
            const thebutton = document.createElement('button');
            thebutton.innerText = "Add to Cart";
            thecard.appendChild(thebutton);

            showHere.appendChild(thecard);
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        showHere.innerHTML = "<p>Failed to load products. Try again later.</p>";
    }
}

displayItems();
