geodash.controllers["controller_modal_geodasheditor_welcome"] = function($scope, $element, $controller)
{
  angular.extend(this, $controller('GeoDashControllerModal', {$element: $element, $scope: $scope}));
  var m = $.grep(geodash.meta.modals, function(x, i){ return x['name'] == 'geodasheditor_welcome';})[0];
  $scope.config = m.config;
  $scope.ui = m.ui;
  $scope.html5data = geodasheditor.html5data;
  $scope.updateValue = geodash.api.updateValue;
  $scope.showOptions = geodash.ui.showOptions;
};
