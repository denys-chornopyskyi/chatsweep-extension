import {deleteChat} from "./deleteChat";
import {detachDebugger} from "../cdp";
import {delay} from "../utils";

export async function deleteSelectedChats() {
	const selectedChats = document.querySelectorAll("#history a input[type='checkbox']:checked")
	if (selectedChats.length === 0) return

	console.log(selectedChats)
	for (const chat of selectedChats) {
		const selectedChat = chat.closest('a');
		console.log(selectedChat);
		await deleteChat(selectedChat);
		await delay(100)
	}
	await detachDebugger()
}