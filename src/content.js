import {createButton, createCheckbox, createToolbar} from "./ui";
import {debounce, observe} from './utils'
import {addCheckboxOnce, addAllCheckBox, clearAllChecked, deleteSelectedChats} from "./chat";

const deleteChatsBtn = createButton('Delete', deleteSelectedChats)
const clearCheckedBtn = createButton('Clear', clearAllChecked)


const rootObserver = observe(document.body, debounce(() => {
	const chatPanel = document.querySelector('#history[bis_skin_checked]')

	if (chatPanel) {
		rootObserver.disconnect()

		const chatList = chatPanel.querySelectorAll('a')
		let prevChatLength = chatList.length;

		addCheckboxOnce(chatList, createCheckbox)

		const toolbar = createToolbar([clearCheckedBtn, deleteChatsBtn])
		chatPanel.insertAdjacentElement('beforebegin', toolbar)

		const chatPanelObserver = observe(chatPanel, () => {
			const newChatList = chatPanel.querySelectorAll('a')
			const newChatLength = newChatList.length
			const newChat = [...newChatList]

			console.log('Prev:', prevChatLength)
			console.log('New:', newChatLength)
			console.log(newChat.slice(prevChatLength))

			addAllCheckBox(newChat.slice(prevChatLength), createCheckbox)
			prevChatLength = newChatLength;
		})
	}
}, 300))