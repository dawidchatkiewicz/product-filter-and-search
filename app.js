let products = {
	data: [
		{
			productName: 'Wooden Chair',
			category: 'Chairs',
			price: '2500',
			image: './images/chair-002.webp',
		},

		{
			productName: 'Cozy beige chair',
			category: 'Chairs',
			price: '3500',
			image: './images/chair-004.webp',
		},

		{
			productName: 'Wooden night table',
			category: 'Night-Tables',
			price: '1500',
			image: './images/ntable-002.webp',
		},
		{
			productName: 'Concrete night table',
			category: 'Night-Tables',
			price: '3200',
			image: './images/ntable-004.webp',
		},
		{
			productName: 'Marmur night table',
			category: 'Night-Tables',
			price: '4200',
			image: './images/ntable-0012.webp',
		},
		{
			productName: 'Wooden simple night table',
			category: 'Night-Tables',
			price: '1700',
			image: './images/ntable-0022.webp',
		},
		{
			productName: 'Cozy white chair',
			category: 'Chairs',
			price: '1900',
			image: './images/chair-003.webp',
		},
		{
			productName: 'Candle set',
			category: 'Candles',
			price: '129',
			image: './images/candles-001.webp',
		},
		{
			productName: 'Black Chair',
			category: 'Chairs',
			price: '1200',
			image: './images/chair-001.webp',
		},
		{
			productName: 'Bulb candle set',
			category: 'Candles',
			price: '159',
			image: './images/candles-002.webp',
		},
		{
			productName: 'Black candle set',
			category: 'Candles',
			price: '99',
			image: './images/candles-003.webp',
		},
		{
			productName: 'Sand candle',
			category: 'Candles',
			price: '89',
			image: './images/candles-004.webp',
		},
		{
			productName: 'Yellow table lamp',
			category: 'Lamps',
			price: '599',
			image: './images/lamp-001.webp',
		},
		{
			productName: 'White table lamp',
			category: 'Lamps',
			price: '359',
			image: './images/lamp-004.webp',
		},
		{
			productName: 'White paper lamp',
			category: 'Lamps',
			price: '299',
			image: './images/lamp-003.webp',
		},
		{
			productName: 'Beige paper lamp',
			category: 'Lamps',
			price: '299',
			image: './images/lamp-002.webp',
		},
	],
};

for (let i of products.data) {
	// Create card
	let card = document.createElement('div');
	// Card category
	card.classList.add('card', i.category, 'hide');
	//image
	let imgContainer = document.createElement('image-container');
	//img tag
	let image = document.createElement('img');
	image.setAttribute('src', i.image);
	imgContainer.appendChild(image);
	card.appendChild(imgContainer);
	//container------
	let container = document.createElement('div');
	container.classList.add('container');
	//product name
	let name = document.createElement('h5');
	name.classList.add('product-name');
	name.innerText = i.productName.toUpperCase();
	container.appendChild(name);
	//Price
	let price = document.createElement('h6');
	price.innerText = i.price + ' zł';
	container.appendChild(price);

	card.appendChild(container);
	document.getElementById('products').appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
	//Button class code
	let buttons = document.querySelectorAll('.button-value');
	buttons.forEach(button => {
		//check if value equals innerText
		if (value.toUpperCase() == button.innerText.toUpperCase()) {
			button.classList.add('active');
		} else {
			button.classList.remove('active');
		}
	});
	//select all cards
	let elements = document.querySelectorAll('.card');
	//loop through all cards
	elements.forEach(element => {
		//display all cards on 'all' button click
		if (value == 'all') {
			element.classList.remove('hide');
		} else {
			//Check if element contains category class
			if (element.classList.contains(value)) {
				//display element based on category
				element.classList.remove('hide');
			} else {
				//hide other elements
				element.classList.add('hide');
			}
		}
	});
}

//Search function

const searchItem = () => {
	//initializations
	let searchInput = document.getElementById('search-input').value;
	let elements = document.querySelectorAll('.product-name');
	let cards = document.querySelectorAll('.card');
	//loop through all elements
	elements.forEach((element, index) => {
		//check if text includes the search value
		if (element.innerText.includes(searchInput.toUpperCase())) {
			//display matching card
			cards[index].classList.remove('hide');
		} else {
			//hide others
			cards[index].classList.add('hide');
		}
	});
};

document.getElementById('search').addEventListener('click', searchItem);
document.getElementById('search-input').addEventListener("keyup", function(e) {
    if (e.key === 'Enter') {
        searchItem();
    }});

//Initially display all products
window.onload = () => {
	filterProduct('all');
};
