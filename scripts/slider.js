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

// const swipeDetect = (el) => {
// 	let surface = el;
// 	let startX = 0;
// 	let startY = 0;
// 	let distX = 0;
// 	let distY = 0;
// 	let startTime = 0;
// 	let elapsedTime = 0;
// 	const threshold = 150;
// 	const restraint = 100;
// 	const allowedTime = 300;

// 	surface.addEventListener(
// 		"mousedown",
// 		function(e) {
// 			startX = e.pageX;
// 			startY = e.pageY;
// 			startTime = new Date().getTime();
// 			e.preventDefault();
// 		},
// 		false,
// 	);
// 	surface.addEventListener(
// 		"mouseup",
// 		function(e) {
// 			distX = e.pageX - startX;
// 			distY = e.pageY - startY;
// 			elapsedTime = new Date().getTime() - startTime;
// 			if (elapsedTime <= allowedTime) {
// 				if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
// 					if (distX > 0) {
// 						if (isEnabled) {
// 							previousItem(currentItem);
// 						}
// 					} else {
// 						if (isEnabled) {
// 							nextItem(currentItem);
// 						}
// 					}
// 				}
// 			}
// 			e.preventDefault();
// 		},
// 		false,
// 	);

// 	surface.addEventListener(
// 		"touchstart",
// 		function(e) {
// 			if (
// 				e.target.classList.contains("arrow") ||
// 				e.target.classList.contains("control")
// 			) {
// 				if (e.target.classList.contains("left")) {
// 					if (isEnabled) {
// 						previousItem(currentItem);
// 					}
// 				} else {
// 					if (isEnabled) {
// 						nextItem(currentItem);
// 					}
// 				}
// 			}
// 			var touchobj = e.changedTouches[0];
// 			startX = touchobj.pageX;
// 			startY = touchobj.pageY;
// 			startTime = new Date().getTime();
// 			e.preventDefault();
// 		},
// 		false,
// 	);

// 	surface.addEventListener(
// 		"touchmove",
// 		function(e) {
// 			e.preventDefault();
// 		},
// 		false,
// 	);

// 	surface.addEventListener(
// 		"touchend",
// 		function(e) {
// 			let touchobj = e.changedTouches[0];
// 			distX = touchobj.pageX - startX;
// 			distY = touchobj.pageY - startY;
// 			elapsedTime = new Date().getTime() - startTime;
// 			if (elapsedTime <= allowedTime) {
// 				if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
// 					if (distX > 0) {
// 						if (isEnabled) {
// 							previousItem(currentItem);
// 						}
// 					} else {
// 						if (isEnabled) {
// 							nextItem(currentItem);
// 						}
// 					}
// 				}
// 			}
// 			e.preventDefault();
// 		},
// 		false,
// 	);
// };

// swipeDetect(htmlElements.corousel);
