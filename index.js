function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.querySelectorAll('#nested .target')[0]
}

function deepestChild() {
	return document.querySelectorAll('#grand-node div div div div')[0]
}

function increaseRankBy(n) {
	var array = document.querySelectorAll('ul.ranked-list li');
	for (var i = 0; i < array.length; i++) {
		array[i].innerHTML = n + parseInt(array[i].innerHTML)
	}
}