const phonesButtonHome = document.querySelectorAll(".slider__button-home");

phonesButtonHome.forEach((element) => {
	element.addEventListener("click", buttonHomeClick);
});

function buttonHomeClick(event) {
	const display = event.target.parentElement.firstElementChild;
	const arrayClass = [...display.classList];
	arrayClass.includes("deactivate")
		? display.classList.remove("deactivate")
		: display.classList.add("deactivate");
}
