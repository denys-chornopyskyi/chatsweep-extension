export async function hoverElement(element) {
	const rect = element.getBoundingClientRect();

	await chrome.runtime.sendMessage({
		type: 'HOVER_ELEMENT',
		x: rect.x + rect.width / 2,
		y: rect.y + rect.height / 2,
	});
}