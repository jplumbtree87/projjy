angular.module("myApp", []).controller("myCtrl", function ($scope) {

	$scope.numCorrect = 0;
	$scope.operator = "";
	$scope.value1 =1;
	$scope.nextQuestion = function () {
		var radios = document.getElementsByName('question');
		var difficulty = document.getElementsByName('difficulty');
		if (difficulty[0].checked) {
        $scope.n1 = Math.floor((Math.random() * 9)+1);
        $scope.n2 = Math.floor((Math.random() * 9)+1);
		}
		if (difficulty[1].checked) {
        $scope.n1 = Math.floor((Math.random() * 14)+4);
        $scope.n2 = Math.floor((Math.random() * 14)+4);
		}
		else{
		$scope.n1 = Math.floor((Math.random() * 11)+2);
        $scope.n2 = Math.floor((Math.random() * 11)+2);
		}
		
		
		
		
		if (radios[0].checked) {
				$scope.randomQuestion = $scope.n1 + "+" + $scope.n2+ "=?";
				$scope.operator = "+";
				}
		if (radios[1].checked){
				$scope.randomQuestion = $scope.n1 + "-" + $scope.n2+ "=?";
				$scope.operator = "-";
				}
		if (radios[2].checked){
				$scope.randomQuestion = $scope.n1 + "*" + $scope.n2+ "=?";
				$scope.operator = "*";
				}
	};
	
	$scope.submitAnswer = function () {
		var textboxValue = document.getElementById("answerName").value;
		
		if ($scope.operator == "+"){
			if (textboxValue == $scope.n1+$scope.n2){
				$scope.numCorrect++;
				$scope.correct = $scope.numCorrect;
			}
		}
		if ($scope.operator == "-"){
			if (textboxValue == $scope.n1-$scope.n2){
				$scope.numCorrect++;
				$scope.correct = $scope.numCorrect;
			}
		}
		if ($scope.operator == "*"){
			if (textboxValue == $scope.n1*$scope.n2){
				$scope.numCorrect++;
				$scope.correct = $scope.numCorrect;
			}
		}
		$scope.nextQuestion();
	};
	
  
    $scope.nextQuestion();
});