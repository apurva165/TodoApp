var items = [];


var itemList = document.getElementById('todo-list');
var itemInput = document.getElementById('todo-input');




function addTodo() {
	console.log('button is clicked');
	// Get text from the input
	//var todoText = itemInput.value;
	items.push(itemInput.value);
	console.log(items);
	itemInput.value='';
	renderTodoList();
}

function renderTodoList() {
	// clear the list 
	itemList.innerHTML = "" ;

	// loopthrough items of array
	for(var i = 0; i < items.length; i++) {

		var newTodo = document.createElement('li');
		newTodo.id = 'item-' + i.toString();
		newTodo.innerText = items[i];

	// Options buttin  
	appendOptionButtons(i , newTodo);

		itemList.appendChild(newTodo);
	}
}


function appendOptionButtons(index , item) {
	//delete todo
	var deleteButton = document.createElement('button');
	deleteButton.className ='deleteBtn' ;

	deleteButton.innerHTML = 'X';

	deleteButton.onclick = function() {
		removeTodo(index)
	};
	item.appendChild(deleteButton);
}

function removeTodo(index) {
	items.splice(index ,1);
	console.log(index)
	renderTodoList();
}


