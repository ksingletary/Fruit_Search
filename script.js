const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const container = document.querySelector('.search-container');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	input.addEventListener('input', function(evt){
		str = input.value;
		return fruit.filter((val, idx) => {
			val.toLowerCase() === str.toLowerCase() ? results.push(str) : console.log(input.value);
			searchHandler(results);
		})
	}) 	
	return results;
}
search(input.value);

const dropdownLst = document.createElement('select');
dropdownLst.setAttribute('id', 'myList');
dropdownLst.setAttribute('onchange', 'search(str)');
container.appendChild(dropdownLst);
const option = document.createElement('option');

function searchHandler(results) {
	let count = 0;
	for (let fruit of results){
		option.value = count; 
		option.text = fruit;	
		dropdownLst.appendChild(option);
		count++;
	}
}

function showSuggestions(results, inputVal) {

	// TODO
}

function useSuggestion(e) {
	// TODO
}

// input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);