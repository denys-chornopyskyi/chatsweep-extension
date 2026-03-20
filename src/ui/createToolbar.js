export const createToolbar = (elementArr) => {
	const toolbar = document.createElement('div')
	toolbar.classList.add('toolbar-wrapper')
	toolbar.append(...elementArr)
	return toolbar
}