const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	const lowerStr = str.toLowerCase();
	fruit.filter((val, idx) => {
		const lowerCaseWord = val.toLowerCase();
		return lowerCaseWord.includes(lowerStr) ? results.push(val) : console.log('non-values');
	})
	return results;
}

function searchHandler(evt) {
	suggestions.innerHTML = "";

	if (!evt.target.value) return;

	const inputVal = evt.target.value;
	const results = search(inputVal);
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	for (const [index, fruit] of results.entries()) {
		const li = document.createElement('li');
		li.innerHTML = selectedInp(fruit, inputVal);
		suggestions.appendChild(li);
	}
}

function selectedInp(fruit, inputVal) {
	const regEx = new RegExp(inputVal, "ig");
	return fruit.replace(regEx, `<b>$&</b>`);
}

function useSuggestion(evt) {
	const selectedText = evt.target.textContent;
	input.value = selectedText;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);