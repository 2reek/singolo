const htmlElements = {
	headerNavLinks: document.querySelectorAll(".nav__link"),
	documentSections: document.querySelectorAll("section"),
};

document.addEventListener("scroll", onScrollDocument);

function onScrollDocument() {
	const offsetSections = 205;
	const currentPosition = window.scrollY + offsetSections;

	htmlElements.documentSections.forEach((section) => {
		if (
			section.offsetTop <= currentPosition &&
			section.offsetTop + section.offsetHeight > currentPosition
		) {
			htmlElements.headerNavLinks.forEach((link) => {
				link.classList.remove("selected_nav");

				if (
					section.getAttribute("id") === link.getAttribute("href").substring(1)
				) {
					link.classList.add("selected_nav");
				}
			});
		}
	});
}
