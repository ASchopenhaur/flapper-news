angular.module('flapperNews')
.factory('posts', [function(){
  var o = {
    posts: [],
    incrementUpvotes: function(txt){
      txt.upvotes += 1;
    }
  };
  return o;
}]);
