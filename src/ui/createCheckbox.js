export const createCheckbox = () => {
	const checkboxElement = document.createElement('label')
	checkboxElement.classList.add('checkbox-container')
	checkboxElement.innerHTML = `
			<input type="checkbox" checked="checked">
  		<span class="checkmark"></span>
		`
	return checkboxElement;
}