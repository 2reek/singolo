import { Helper } from "./classHelper.js";

const htmlElements = {
	inputFormName: document.querySelector(".form__input_text"),
	inputFormEmail: document.querySelector(".form__input_email"),
	buttonFormSubmit: document.querySelector(".form__input_submit"),
	inputFormSubject: document.querySelector(".form__input_subject"),
	inputFormTextarea: document.querySelector(".form__input_textarea"),
	popup: document.querySelector(".popup"),
	popupOutputSubject: document.querySelector(".popup__content_subject-info"),
	popupOutputTextarea: document.querySelector(".popup__content_textarea-info"),
	popupButtonOk: document.querySelector(".popup__content button"),
};

htmlElements.buttonFormSubmit.addEventListener("click", openPopup);
htmlElements.popupButtonOk.addEventListener("click", closePopup);

function openPopup(event) {
	event.preventDefault();

	if (!Helper.isString(htmlElements.inputFormName.value)) {
		return alert("Не корректно введено имя");
	}
	if (!Helper.isEmail(htmlElements.inputFormEmail.value)) {
		return alert("Не корректно введена почта");
	}
	htmlElements.popupOutputSubject.innerHTML = "";
	htmlElements.popupOutputTextarea.innerHTML = "";

	Helper.isString(htmlElements.inputFormSubject.value)
		? (htmlElements.popupOutputSubject.value = `Tema :	${htmlElements.inputFormSubject.value}`)
		: (htmlElements.popupOutputSubject.value = "Без темы");

	Helper.isString(htmlElements.inputFormTextarea.value)
		? (htmlElements.popupOutputTextarea.value = `Oписание :	${htmlElements.inputFormTextarea.value}`)
		: (htmlElements.popupOutputTextarea.value = "Без описания");

	htmlElements.popup.removeAttribute("hidden");
}

function closePopup() {
	htmlElements.popup.setAttribute("hidden", true);
	htmlElements.inputFormName.value = "";
	htmlElements.inputFormEmail.value = "";
	htmlElements.inputFormSubject.value = "";
	htmlElements.inputFormTextarea.value = "";
}
