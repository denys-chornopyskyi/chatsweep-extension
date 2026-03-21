export async function checkElementVisibility(element, scrollableContainer) {
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting && entry.boundingClientRect.top < scrollableContainer.clientHeight / 2 + 100) {
				observer.disconnect()
			} else {
				element.scrollIntoView({block: 'center'})
			}
		})
	}, {threshold: 1})

	observer.observe(element)
}