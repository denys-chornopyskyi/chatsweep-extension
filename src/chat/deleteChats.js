import {clickElement, hoverElement} from "../cdp";
import {waitFor} from "../utils";

export async function deleteSelectedChats() {
	try {
		const checkedCheckbox = document.querySelector("#history a input[type='checkbox']:checked")
		const checkedChat = checkedCheckbox.closest('a')

		await hoverElement(checkedChat)

		const menuBtn = checkedChat.querySelector('button')
		await clickElement(menuBtn)

		const deleteMenuItem = await waitFor("div[data-testid='delete-chat-menu-item']")
		deleteMenuItem.click()

		const confirmBtn = await waitFor("button[data-testid='delete-conversation-confirm-button']")
		confirmBtn.click()

	} catch (e) {
		console.log(e)
	}
}