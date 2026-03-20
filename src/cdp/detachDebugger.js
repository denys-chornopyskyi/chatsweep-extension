export async function detachDebugger() {
	await chrome.runtime.sendMessage({
		type: "DETACH"
	})
}