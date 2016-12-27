angular.module('flapperNews')
.controller('PostsCtrl', ['$scope',
 '$stateParams',
 'posts',
 function($scope, $stateParams, posts){
   console.log(posts.posts);
   console.log($stateParams.id);
   $scope.post = posts.posts[$stateParams.id];
   $scope.incrementUpvotes = posts.incrementUpvotes;
   $scope.addComment = function(){
     if($scope.body === '') {return;}
     $scope.post.comments.push({
       body: $scope.body,
       author: 'user',
       upvotes: 0
     });
     $scope.body = '';
   };
 }]);
