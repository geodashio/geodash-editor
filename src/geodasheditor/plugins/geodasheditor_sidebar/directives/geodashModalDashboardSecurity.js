geodash.directives["geodashModalDashboardSecurity"] = function(){
  return {
    controller: geodash.controllers.controller_modal_dashboard_security,
    restrict: 'EA',
    replace: true,
    scope: {},
    templateUrl: 'geodash_modal_dashboard_security.tpl.html',
    link: function ($scope, element, attrs){}
  };
};
