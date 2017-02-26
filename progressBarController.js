angular.module("progressBarApp",[])
  .controller("progressBarCtrl",['$scope',function($scope)
  {
    $scope.newValue=0;
    $scope.selectedValue='progress1';
    $scope.progressElement='';
      
    $scope.changeTheProgress = function(value)
    {
      $scope.progressElement =document.getElementById($scope.selectedValue);
      var currentValue=$scope.progressElement.getAttribute("aria-valuenow");
      
      $scope.newValue=parseInt(currentValue)+parseInt(value);
      if($scope.newValue>0 && $scope.newValue<=100)
      {
        $scope.progressElement.setAttribute("aria-valuenow",$scope.newValue);
        $scope.progressElement.style.width=$scope.newValue+"%";
        $scope.progressElement.style.background="#4682B4";
      }
      else
      {
       if($scope.newValue>100)
       {
          $scope.progressElement.setAttribute("aria-valuenow",$scope.newValue);
          $scope.progressElement.style.width=100+"%";
          $scope.progressElement.style.background="red";
        } 
        else if($scope.newValue<=0)
        {
          $scope.progressElement.setAttribute("aria-valuenow",0);
         $scope.progressElement.style.width=0+"%";
        }
      }
    }
    
  }]);