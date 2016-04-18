app.controller('MainController', ['$scope', function($scope) {
  $scope.exercises = [
    {
      icon: 'https://s3.amazonaws.com/codecademy-content/projects/4/move-log/img/pushup.jpg',
      name: 'Pushups',
      count: 20
    },
    {
      icon: 'https://s3.amazonaws.com/codecademy-content/projects/4/move-log/img/squat.jpg',
      name: 'Squats',
      count: 15
    },
    {
      icon: 'https://s3.amazonaws.com/codecademy-content/projects/4/move-log/img/pullup.jpg',
      name: 'Pullups',
      count: 10
    },
    {
      icon: 'https://s3.amazonaws.com/codecademy-content/projects/4/move-log/img/row.jpg',
      name: 'Rows',
      count: 10
    },
    {
      icon: 'https://s3.amazonaws.com/codecademy-content/projects/4/move-log/img/lunge.jpg',
      name: 'Lunges',
      count: 10
    },
    {
      icon: 'https://s3.amazonaws.com/codecademy-content/projects/4/move-log/img/stepup.jpg',
      name: 'Step Ups',
      count: 10
    },
    {
      icon: 'https://s3.amazonaws.com/codecademy-content/projects/4/move-log/img/situp.jpg',
      name: 'Sit Ups',
      count: 15
    }
  ];
  $scope.increase = function(index) {
  	$scope.exercises[index].count +=1;
  };
  $scope.decrease = function(index) {
  		$scope.exercises[index].count -=1;
  };


}]);
