class DebuggerManager {
	constructor() {
		this.tabId = null
		this.attached = false
	}

	async attach(tabId){
		console.log(this.attached)
		if (this.attached) return
		await chrome.debugger.attach({tabId}, '1.3')
		this.attached = true
		this.tabId = tabId
	}

	async hover(x, y){
		await chrome.debugger.sendCommand({tabId: this.tabId}, 'Input.dispatchMouseEvent', {
			type: 'mouseMoved',
			x,
			y
		})
	}

	async click(x, y){
		await chrome.debugger.sendCommand({tabId: this.tabId}, 'Input.dispatchMouseEvent', {
			type: 'mousePressed',
			x,
			y,
			button: 'left',
			clickCound: 1
		})
		await chrome.debugger.sendCommand({tabId: this.tabId}, 'Input.dispatchMouseEvent', {
			type: 'mouseReleased',
			x,
			y,
			button: 'left',
			clickCound: 1
		})
	}

	async detach() {
		if (!this.attached) return
		await chrome.debugger.detach({tabId: this.tabId})
		this.attached = false
		this.tabId = null;
	}
}

const Debugger = new DebuggerManager()

chrome.runtime.onMessage.addListener( (message, sender) => {
	(async () => {
		await Debugger.attach(sender.tab.id)
		switch (message.type) {
			case 'CLICK_ELEMENT':
				await Debugger.click(message.x, message.y)
				break;
			case 'HOVER_ELEMENT':
				await Debugger.hover(message.x, message.y)
				break;
			case 'DETACH':
				await Debugger.detach()
				break;
		}
	})()
})


