import { Helper } from "./classHelper.js";

const portfolioButtons = document.querySelectorAll(".menu__item button");
const hederButtons = document.querySelectorAll(".nav__link");
const portfolioImages = document.querySelectorAll(".image-portfolio");

function createInteractivityElements(className, domElements) {
	domElements.forEach((element) => {
		element.addEventListener("click", (event) => {
			Helper.removeClass(className, domElements);
			event.target.classList.add(className);
		});
	});
}

window.onload = function() {
	createInteractivityElements("selected_nav", hederButtons);
	createInteractivityElements("selected_menu", portfolioButtons);
	createInteractivityElements("selected_image", portfolioImages);
};

const arrayNambers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function mixArray(arr) {
	let array = arr.slice();
	const mixedArray = [];
	moveNambers(array);

	function moveNambers(array) {
		if (array.length === 1) {
			mixedArray.push(array[0]);
		} else {
			const randomValue = array[Math.floor(Math.random() * array.length)];
			const indexValue = array.indexOf(randomValue);
			mixedArray.push(randomValue);
			array.splice(indexValue, 1);
			moveNambers(array);
		}
	}

	return mixedArray;
}

portfolioButtons.forEach((element, index) => {
	element.innerHTML === "All"
		? element.addEventListener("click", (event) =>
				showImages(event, arrayNambers),
		  )
		: element.addEventListener("click", (event) =>
				showImages(event, mixArray(arrayNambers)),
		  );
});

function showImages(event, arr) {
	Helper.removeAttribute("disabled", portfolioButtons);
	Helper.removeClass("selected_image", portfolioImages);
	event.target.setAttribute("disabled", true);
	portfolioImages.forEach((element, index) => {
		element.src = `assets/images/Image_${arr[index]}.png`;
	});
}
