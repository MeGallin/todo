export class Init {


	load(){
	
		if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
				console.log('Something coming');


			var todos = [
				{
					text: 'Pick up the Kids'
				},
				{
					text: 'Meeting with Boss'
				}
			];

			localStorage.setItem('todos', JSON.stringify(todos));
			return

		} else {
			console.log('Found todos');
		}
	}
}