import {observe} from "./observe";

export function waitFor(selector, timeout = 3000) {
	return new Promise((resolve, reject) => {
		const el = document.querySelector(selector)
		if (el) return resolve(el)

		const observer = observe(document.body, () => {
			const el = document.querySelector(selector)
			if (el)  {
				observer.disconnect()
				return resolve(el)
			}
		})
		setTimeout(() => {
			observer.disconnect()
			reject(new Error(`${selector} not found`))
		}, timeout)

	})
}