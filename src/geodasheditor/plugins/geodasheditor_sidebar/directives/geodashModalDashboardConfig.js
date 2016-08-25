geodash.directives["geodashModalDashboardConfig"] = function(){
  return {
    controller: geodash.controllers.controller_modal_dashboard_config,
    restrict: 'EA',
    replace: true,
    scope: {},
    templateUrl: 'geodash_modal_dashboard_config.tpl.html',
    link: function ($scope, element, attrs){}
  };
};
