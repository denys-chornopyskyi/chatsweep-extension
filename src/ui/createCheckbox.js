export const createCheckbox = () => {
	const checkboxElement = document.createElement('label')
	checkboxElement.classList.add('checkbox-container')
	checkboxElement.innerHTML = `
			<input type="checkbox">
  		<span class="checkmark"></span>
		`
	return checkboxElement;
}