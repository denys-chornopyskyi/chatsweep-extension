export const createButton = (text, onClick) => {
	const btn = document.createElement('button')
	btn.style.border = '1px solid white'
	btn.classList.add('btn')
	btn.textContent = text
	btn.addEventListener('click', onClick);
	return btn;
}