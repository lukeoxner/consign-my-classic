const form = document.getElementById('contact-form');
const nameEl = form.elements['name'];
const phoneEl = form.elements['phone'];
const vehicleEl = form.elements['vehicle'];

form.addEventListener('submit', sendEmail);

function sendEmail(e) {
	e.preventDefault();
	const name = nameEl.value;
	const phone = phoneEl.value;
	const vehicle = vehicleEl.value;
	const message = `Hi, my name is ${name} and my phone number is ${phone}. I would like more information about your consignment program! Here are my vehicle details: ${vehicle}`;

	window.location.href = `mailto:consignmyclassic@conquestcc.com?Subject=ConsignMyClassic: ${name} would like more information!&body=${message}`;
}
