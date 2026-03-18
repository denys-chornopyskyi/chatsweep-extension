const rootObserver = new MutationObserver(() => {
	const chatPanel = document.querySelector('#history[bis_skin_checked]')

	if (chatPanel) {
		rootObserver.disconnect()
		const chatList = chatPanel.querySelectorAll('a')
		let prevLength = chatList.length;

		const chatPanelObserver = new MutationObserver(() => {
			const newChatList =  chatPanel.querySelectorAll('a')
			const newLength = newChatList.length
			console.log('Prev: ',prevLength)
			console.log('New: ', newLength)
			const newChat = [...newChatList]
				console.log(newChat.slice(prevLength))
			newChat.slice(prevLength).forEach((element) => {
				const checkbox = createCustomCheckbox()
				element.firstChild.insertBefore(checkbox, element.firstChild.lastChild)
			})

			prevLength = newLength

		})
		chatPanelObserver.observe(chatPanel, {
			childList: true,
			subtree: true
		})

		const createCustomCheckbox = () => {
			const checkboxElement = document.createElement('label')
			checkboxElement.classList.add('checkbox-container')
			checkboxElement.innerHTML = `
			<input type="checkbox">
  		<span class="checkmark"></span>
		`
			return checkboxElement;
		}

		const createButton = (text, onClick) => {
			const btn = document.createElement('button')
			btn.style.border = '1px solid white'
			btn.classList.add('btn')
			btn.textContent = text
			btn.addEventListener('click', onClick);
			return btn;
		}

		const createToolbar = (chatPanel) => {
			const btnWrap = document.createElement('div')
			btnWrap.classList.add('toolbar-wrapper')

			const deleteBtn = createButton('Delete', () => {
				const checked = chatPanel.querySelectorAll("input[type='checkbox']:checked")
				console.log(checked)
			})

			const clearAllBtn = createButton('Clear', () => {
				const checked = chatPanel.querySelectorAll("input[type='checkbox']:checked")
				console.log(chatPanel)
				checked.forEach((checkbox) => {
					checkbox.checked = false;
				})
			})

			btnWrap.append(deleteBtn, clearAllBtn)
			return btnWrap
		}

		const btnWrap = createToolbar(chatPanel)


		chatPanel.insertAdjacentElement('beforebegin', btnWrap)
		chatPanel.addEventListener('click', (e) => {
			console.log(e)
			e.stopPropagation()
		}, {capture: true})


		chatList.forEach((element) => {
			const checkbox = createCustomCheckbox()
			element.firstChild.insertBefore(checkbox, element.firstChild.lastChild)
		})
	}
})

rootObserver.observe(document.body, {
	subtree: true,
	childList: true
})