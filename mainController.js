app.controller('mainController',function mainController($scope,todoStorage){
	var todos=$scope.todos=todoStorage.get();
	$scope.newTask=' ';
	$scope.addNew=function(){
		var newTask=$scope.newTask;//.trim();
		if(newTask.length===0){
			return;
		}
		todos.push({
			title:newTask,
			completed:false
		});
		todoStorage.put(todos);
		localStorage.setItem('todo', JSON.stringify(todos));
		//todoStorage.put(todos);
	$scope.todoCompleted = function (todo) {
		
		todoStorage.put(todos);
		};
	};
})