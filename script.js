const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const container = document.querySelector('.search-container');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	input.addEventListener('input', function(evt){
		str = input.value;
		fruit.filter((val, idx) => {
			val[0].toLowerCase() === str[0].toLowerCase() ? results.push(val) : console.log('hi!');
		})
		searchHandler(results);
	}) 	
	return results;
}
search(input.value);

const dropdownLst = document.createElement('select');
dropdownLst.setAttribute('id', 'myList');
dropdownLst.setAttribute('onchange', 'searchHanndler(results)');

function searchHandler(results) {
	container.appendChild(dropdownLst);
	for (let fruit of results){
		const option = document.createElement('option');
		option.value = 'fruit'; 
		option.text = fruit;	
		dropdownLst.appendChild(option);
	}
	console.log(results)
}

function showSuggestions(results, inputVal) {
	const theOpt = document.querySelector('select');
	theOpt.addEventListener('mouseover', function(evt){
		console.log("...you")
	})

}
showSuggestions
function useSuggestion(e) {
	// TODO
}

// input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);