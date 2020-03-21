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
		: shuffleArray([...nodeList]).map((elem) => {
				htmlElements.portfolioContainerImages.append(elem);
		  });
}

function shuffleArray(arr) {
	const array = arr;
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	return array;
}

htmlElements.portfolioContainerImages.addEventListener("click", highlightImage);

function highlightImage(event) {
	Helper.removeClass("selected_image", htmlElements.portfoliosImages);
	event.target.classList.add("selected_image");
}
