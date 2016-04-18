# AngularMoveLog <br/>
The tracker displays a list of exercises. Tapping the + or - changes the number of reps for that exercise <br/>
1. Created a new module named MoveLogApp, and attached to the <body>; <br/>
2. In the controller, created $scope.excercises and set it equal to an Array of 7 objects; <br/>
3. Attached controller to the <div class=”main”> and then made sure that all items are visible; <br/>
4. In the controller added two more properties increase/decrease and set them equal to a function, that takes in the index of the exercise that was clicked, and then add/remove one from the exercise’s count property; <br/>
5. Using ng-click to tell AngularJS to run increase()/decrease() functions when clicked. <br/>
