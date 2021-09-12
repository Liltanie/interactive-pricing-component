'use strict'

const price = document.querySelector('.price')
const views = document.querySelector('.views')
const slider = document.getElementById('slider')
const switchBilling = document.getElementById('switch')

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

//save in local storage
