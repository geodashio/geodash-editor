geodash.directives["geodasheditorModalWelcome"] = function(){
  return {
    controller: geodash.controllers.controller_modal_geodasheditor_welcome,
    restrict: 'EA',
    replace: true,
    scope: {},
    //scope: {
    //  layer: "=layer"
    //},
    //scope: true,  // Inherit exact scope from parent controller
    templateUrl: 'modal_welcome_geodasheditor.tpl.html',
    link: function ($scope, $element, attrs)
    {

      setTimeout(function(){
        geodash.init.typeahead($element);
        geodasheditor.welcome();
      }, 10);

    }
  };
};
