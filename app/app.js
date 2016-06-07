/* IIFE (immediately-invoked function expression)
  - avoids variable hoisting from within blocks
  - protect against global namespace pollution
  - angular has own namespace, but not vanilla js */
(function() {

  // create new module (setter)
  angular.module('starCraft', [])
  .controller('myController', ['$http', myController]);


  function myController($http) {
    var myCtrl = this;
    console.log('test');

    function changePage(page) {
      pageNum = page;
    }

    $http({
      method: 'GET',
      url: './starCraftData.json'
    }).then(function(response) {
      gotData(response);
    })
    function gotData(response) {
      console.log(response.data)
      myCtrl.starCraftJSON = response.data;
    

    console.log(myCtrl.starCraftJSON)


    myCtrl.pageNum = 1;
    myCtrl.pageSize = 20;
    myCtrl.maxPage = Math.floor(myCtrl.starCraftJSON.data.length / myCtrl.pageSize);
    myCtrl.pages = new Array(myCtrl.maxPage);

    myCtrl.getRows = function(index){
      if (index < (myCtrl.pageNum * myCtrl.pageSize) && index > (myCtrl.pageNum-1) * myCtrl.pageSize){
        return true;
      }
      else{
        return false;
      }
    }
    // myCtrl.sortType =
    myCtrl.sortReverse = true;
    myCtrl.sortType = '4';
    myCtrl.sortCol = function(e){
      myCtrl.sortType = (e.target.cellIndex).toString();
      myCtrl.sortReverse = !myCtrl.sortReverse;
    }
      // if ( $event.target.indexOf) {
      //
      // }
  }
}

})();
