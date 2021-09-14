'use strict'

const price = document.querySelector('.price')
const views = document.querySelector('.views')
const slider = document.getElementById('slider')
const switchBilling = document.getElementById('switch')
const progressBar = document.querySelector('.progress-bar__fill')

const prices = [
	{ pageviews: '10K', pricePerMonth: 8 },
	{ pageviews: '50K', pricePerMonth: 12 },
	{ pageviews: '100K', pricePerMonth: 16 },
	{ pageviews: '500K', pricePerMonth: 24 },
	{ pageviews: '1M', pricePerMonth: 36 },
]

addEventListener('DOMContentLoaded', e => {
	if (localStorage.getItem('price')) setStatus(JSON.parse(localStorage.getItem('price')))
	setPrice(slider.value)
})

slider.addEventListener('input', e => {
	setPrice(slider.value)
})

switchBilling.addEventListener('input', e => {
	setPrice(slider.value)
})

const setStatus = price => {
	slider.value = price.value
	switchBilling.checked = price.switchActive
}

const setPrice = value => {
	let billing = prices[value].pricePerMonth
	if (switchBilling.checked) billing -= (billing * 25) / 100
	price.textContent = `$${billing}.00`
	views.textContent = prices[value].pageviews
	changeProgressBar(slider.value)
	savePriceLocalStorage(slider.value, switchBilling.checked)
}

const changeProgressBar = value => {
	let progress = 0
	for (let i = 0; i < value; i++) {
		progress += 25
	}
	progressBar.style.width = `${progress}%`
}

const savePriceLocalStorage = (value, switchActive) => {
	localStorage.setItem(
		'price',
		JSON.stringify({
			value: value,
			switchActive: switchActive,
		})
	)
}
