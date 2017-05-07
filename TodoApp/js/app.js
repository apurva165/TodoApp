var item = [];


var itemList = document.getElementById('todo-list');
var itemInput = document.getElementById('todo-input');




function addTodo() {
	console.log('button is clicked');
	// Get text from the input
	item.push(itemInput.value);
	console.log(item);
	renderTodoList();
}

function renderTodoList() {
	// clear the list 
	itemList.innterHTML = " " ;

	// loopthrough items of array
	for(var i = 0; i < item.length; i++) {

		var newTodo = document.createElement('li');
		newTodo.id = 'item-' + i.toString();
		newTodo.innerText = item[i];

		itemList.appendChild(newTodo);
	}
}