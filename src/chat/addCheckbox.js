import {once} from "../utils";

export const addAllCheckBox = (chats, createCheckbox) => {
	chats.forEach(chat => {
		const checkbox = createCheckbox()
		checkbox.addEventListener('click', (e) => {
			e.stopPropagation()
		})
		chat.firstChild.insertBefore(checkbox, chat.firstChild.lastChild)
	})
}

export const addCheckboxOnce = once(addAllCheckBox);
