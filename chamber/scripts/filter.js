const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const cards = document.querySelector('#cards');

gridbutton.addEventListener("click", () => {
	cards.classList.add("grid");
	cards.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	cards.classList.add("list");
	cards.classList.remove("grid");
}
