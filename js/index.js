import { getToDoData } from './lib/firebase/api';
import { toDoItemTemplate } from './templates/toDoItem';
import { toElement } from './utils/toElement';


let store = [];

async function appInit() {
	const appData = await getToDoData();
	
	const toDoItems = Object.values(appData).map((obj) => {
		return toDoItemTemplate(obj.todo, obj.status, obj.category, obj.start);
	});

	toDoItems.splice(1,20)
	console.log(toDoItems)


	const div = document.createElement('div')
	toDoItems.forEach((markup) => {
		div.appendChild(markup)
	});

	console.log(div)
	document.querySelector('main').appendChild(div)

	
	
}

appInit();

/* 

       RTDB returns Object of Object.... 
       [objets] 
*/
