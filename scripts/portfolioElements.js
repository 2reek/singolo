import { Helper } from "./classHelper.js";

const htmlElements = {
	portfolioMenu: document.querySelector(".portfolio__menu"),
	portfolioMenuButtons: document.querySelectorAll(".menu__item button"),
	portfolioContainerImages: document.querySelector(".portfolio__images"),
	portfolioElementsWithImages: document.querySelectorAll(".images__item"),
	portfoliosImages: document.querySelectorAll(".image-portfolio"),
};

htmlElements.portfolioMenu.addEventListener("click", (event) =>
	showImages(event, htmlElements.portfolioElementsWithImages),
);

function showImages(event, nodeList) {
	Helper.removeClass("selected_image", htmlElements.portfoliosImages);
	htmlElements.portfolioContainerImages.innerHTML = "";
	Helper.removeAttribute("disabled", htmlElements.portfolioMenuButtons);
	Helper.removeClass("selected_menu", htmlElements.portfolioMenuButtons);

	event.target.setAttribute("disabled", true);
	event.target.classList.add("selected_menu");
	event.target.innerText === "All"
		? [...nodeList].map((elem) => {
				htmlElements.portfolioContainerImages.append(elem);
		  })
		: mixArray([...nodeList]).map((elem) => {
				htmlElements.portfolioContainerImages.append(elem);
		  });
}

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

htmlElements.portfolioContainerImages.addEventListener("click", highlightImage);

function highlightImage(event) {
	Helper.removeClass("selected_image", htmlElements.portfoliosImages);
	event.target.classList.add("selected_image");
}
