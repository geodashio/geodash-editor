geodash.controllers["controller_modal_dashboard_security"] = function($scope, $element, $controller)
{
  angular.extend(this, $controller('GeoDashControllerModal', {$element: $element, $scope: $scope}));
  var m = $.grep(geodash.meta.modals, function(x, i){ return x['name'] == 'dashboard_security';})[0];
  $scope.config = m.config;
  $scope.ui = m.ui;
  $scope.html5data = geodasheditor.html5data;
  $scope.updateValue = geodash.api.updateValue;
  $scope.showOptions = geodash.ui.showOptions;
};
