export function observe(target, callback, options = {childList: true, subtree: true}) {
	const observer = new MutationObserver(callback)
	observer.observe(target, options)
	return observer
}