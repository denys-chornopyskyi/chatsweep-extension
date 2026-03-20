export function debounce(fn, delay) {
	let timer
	return function (...args) {
		clearTimeout(timer)
		setTimeout(() => fn(...args), delay)
	}
}