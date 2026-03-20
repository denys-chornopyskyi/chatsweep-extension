export function clearAllChecked() {
	const checkedChats = document.querySelectorAll("#history a input[type='checkbox']:checked")
	checkedChats.forEach((checkbox) => checkbox.checked = false)
}