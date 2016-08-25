geodash.directives["geodashDashboardEditor"] = function(){
  return {
    restrict: 'EA',
    replace: true,
    scope: true,  // Inherit exact scope from parent controller
    templateUrl: 'dashboard_editor.tpl.html',
    link: function ($scope, $element, attrs)
    {
      setTimeout(function(){
        $('[data-toggle="tooltip"]', $element).tooltip();

        geodash.init.typeahead(
          $element,
          $scope.workspace.config.featurelayers,
          $scope.workspace.config.baselayers);
      },0);
    }
  };
};
