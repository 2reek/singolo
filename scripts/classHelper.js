function removeClass(className, elements) {
	elements.forEach((element) => element.classList.remove(className));
}

function addClass(className, elements) {
	elements.forEach((element) => element.classList.add(className));
}

function addAttribute(attribute, value, elements) {
	elements.forEach((element) => element.setAttribute(attribute, value));
}

function removeAttribute(attribute, elements) {
	elements.forEach((element) => element.removeAttribute(attribute));
}

function isNumber(value) {
	if (
		value != null &&
		value != undefined &&
		!isNaN(value) &&
		value.trim() !== ""
	) {
		return true;
	}
	return false;
}

function isString(value) {
	if (
		value !== null &&
		value !== undefined &&
		value.trim() !== "" &&
		typeof value === "string"
	) {
		return true;
	}
	return false;
}

function isEmail(email) {
	const emailRegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return emailRegExp.test(email);
}

function Helper() {}
Helper.addClass = addClass;
Helper.removeClass = removeClass;
Helper.addAttribute = addAttribute;
Helper.removeAttribute = removeAttribute;
Helper.isNumber = isNumber;
Helper.isString = isString;
Helper.isEmail = isEmail;

export { Helper };
