import {checkElementVisibility} from "./checkElementVisibility";
import {delay, waitFor} from "../utils";
import {clickElement, hoverElement} from "../cdp";

export async function deleteChat(chat) {
	try {
		const sidePanel = document.querySelector('nav')
		await checkElementVisibility(chat, sidePanel)
		await delay(100);
		await hoverElement(chat)

		const menuBtn = chat.querySelector('button')
		console.log(menuBtn)
		await clickElement(menuBtn)

		const deleteMenuItem = await waitFor("div[data-testid='delete-chat-menu-item']")
		deleteMenuItem.click()

		const confirmBtn = await waitFor("button[data-testid='delete-conversation-confirm-button']")
		confirmBtn.click()

	} catch (e) {
		console.log(e)
	}
}