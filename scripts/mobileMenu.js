const htmlElements = {
	mobileIconMenu: document.querySelector(".mobile-version__icon"),
	mobileMenu: document.querySelector(".mobile-version_overlay "),
	mobileNavBlock: document.querySelector(".mobile-nav "),
	mobileNavLinks: document.querySelectorAll(".mobile-nav__link"),
	documentSections: document.querySelectorAll("section"),
	headerLogo: document.querySelector(".header__logo"),
};

htmlElements.mobileIconMenu.addEventListener("click", controlMenu);
htmlElements.mobileMenu.addEventListener("click", controlMenu);
htmlElements.mobileNavLinks.forEach((element) =>
	element.addEventListener("click", controlMenu),
);
htmlElements.mobileNavBlock.addEventListener("click", (event) =>
	event.stopPropagation(),
);

function controlMenu() {
	htmlElements.mobileMenu.classList.toggle("hiddenElement");
	htmlElements.mobileIconMenu.classList.toggle("openMenu");
	htmlElements.headerLogo.classList.toggle("movingLogo");
}

document.addEventListener("scroll", onScrollDocument);

function onScrollDocument() {
	const offsetSections = 150;
	const currentPosition = window.scrollY + offsetSections;

	htmlElements.documentSections.forEach((section) => {
		if (
			section.offsetTop <= currentPosition &&
			section.offsetTop + section.offsetHeight > currentPosition
		) {
			htmlElements.mobileNavLinks.forEach((link) => {
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
