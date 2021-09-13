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
	setPrice(slider.value)
})

slider.addEventListener('input', e => {
	setPrice(slider.value)
	changeProgressBar(slider.value)
})

switchBilling.addEventListener('input', e => {
	setPrice(slider.value)
})

const setPrice = value => {
	let billing = prices[value].pricePerMonth
	if (switchBilling.checked) billing -= (billing * 25) / 100
	price.textContent = billing
	views.textContent = prices[value].pageviews
}

const changeProgressBar = value => {
	let progress = 0
	for (let i = 0; i < value; i++) {
		progress += 25
	}
	progressBar.style.width = `${progress}%`
}

//save in local storage
