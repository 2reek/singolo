const htmlElements = {
	corousel: document.querySelector(".corousel"),
	items: document.querySelectorAll(".corousel .item"),
	buttonLeft: document.querySelector(".slider__arrow_left"),
	buttonRight: document.querySelector(".slider__arrow_right"),
};

let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + htmlElements.items.length) % htmlElements.items.length;
}

function hideItem(direction) {
	isEnabled = false;
	htmlElements.items[currentItem].classList.add(direction);
	htmlElements.items[currentItem].addEventListener("animationend", function() {
		this.classList.remove("active", direction);
	});
}

function showItem(direction) {
	htmlElements.items[currentItem].classList.add("next", direction);
	htmlElements.items[currentItem].addEventListener("animationend", function() {
		this.classList.remove("next", direction);
		this.classList.add("active");
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem("to-left");
	changeCurrentItem(n + 1);
	showItem("from-right");
}

function previousItem(n) {
	hideItem("to-right");
	changeCurrentItem(n - 1);
	showItem("from-left");
}

htmlElements.buttonLeft.addEventListener("click", function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

htmlElements.buttonRight.addEventListener("click", function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});
