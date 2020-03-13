const phones = document.querySelectorAll(".slider__image");
const phonesScreen = document.querySelectorAll(".iphone-display");

phones.forEach((element) => {
	element.addEventListener("click", phoneClick);
});

phonesScreen.forEach((element) => {
	element.addEventListener("click", phoneScreenClick);
});

function phoneClick(event) {
	const display = event.target.previousElementSibling;
	const arrayClass = Array.from(display.classList);
	arrayClass.includes("deactivate")
		? display.classList.remove("deactivate")
		: display.classList.add("deactivate");
}

function phoneScreenClick(event) {
	const display = event.target;
	const arrayClass = Array.from(display.classList);
	arrayClass.includes("deactivate")
		? display.classList.remove("deactivate")
		: display.classList.add("deactivate");
}
