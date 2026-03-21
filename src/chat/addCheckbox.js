import {once} from "../utils";

export const addAllCheckBox = (chats, createCheckbox) => {
	chats.forEach(chat => {
		const checkbox = createCheckbox()
		checkbox.addEventListener('click', (e) => {
			e.stopPropagation()
		})
		const check = chat.querySelector('label')
		if (!check) chat.firstChild.insertBefore(checkbox, chat.firstChild.lastChild)
	})
}

export const addCheckboxOnce = once(addAllCheckBox);
