app.controller("addController", ["$scope", "$location", "foodFactory", function($scope, $location, foodFactory) {
	$scope.recipe = {
		title : "",
		steps : [],
		ingredients : [],
		tags : []
	};

	$scope.addRecipe = function(){
		if($scope.recipe.title !== ""){
			foodFactory.postRecipe(recipe).success(function(data, status, headers) {
				console.log(status);
			});
		}
	}
}]);