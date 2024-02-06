import { getToDoData } from "./lib/firebase/api";

// single source of truth for the data...
let store = [];
async function appInit() {
	const toDos = await getToDoData();
	console.log(toDos);

	// Object.values(toDos).forEach((toDo) => console.log(toDo));
	// to get the values from the object we use the Object.values(obj) Object.keys(obj) Object.entries(obj)
	// store = [...Object.values(toDos)];
	// // Create your own todo data
	// // find method.
	// const searchingFor = "-NpB-eTM3CAL9ana07fx";
	// const keys = Object.keys(toDos);
	// const item = keys.filter((item) => {
	// 	if (item === searchingFor) {
	// 		return item;
	// 	}
	// });
	// console.log(item);
}

appInit();

/* 

       RTDB returns Object of Object.... 
       [objets] 
*/
