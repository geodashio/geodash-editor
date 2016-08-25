geodash.controllers["controller_modal_edit_object"] = function($scope, $element, $controller)
{

  angular.extend(this, $controller('GeoDashControllerModal', {$element: $element, $scope: $scope}));
  //////////////////////////////////
  var m = $.grep(geodash.meta.modals, function(x, i){ return x['name'] == 'edit_object';})[0];
  $scope.config = m.config;
  $scope.ui = m.ui;
  //////////////////////////////////
  $scope.html5data = geodasheditor.html5data;
  $scope.updateValue = geodash.api.updateValue;
  //////////////////////////////////
  $scope.showOptions = geodash.ui.showOptions;
  //////////////////////////////////
  //////////////////////////////////

  $scope.when = function(object_field)
  {
    if(extract("when.field", object_field, undefined) != undefined)
    {
      var keyChain = $scope.stack.head.path_array.concat(
        object_field.when.field.split(".")
      );
      var value = extract(keyChain, $scope.stack.head.workspace);
      var arr = object_field.when.values || [];
      return $.inArray(value, arr) != -1;
    }
    else
    {
      return true;
    }
  };

  $scope.verbose_title = function(objectIndex)
  {
    if(angular.isDefined($scope.stack.head))
    {
      var keyChain = angular.isDefined(objectIndex) ?
        $scope.stack.head.path_array.concat([objectIndex]) :
        $scope.stack.head.path_array;
      var obj = extract(keyChain, $scope.stack.head.workspace);
      return extract('title', obj) || extract('id', obj) || objectIndex || $scope.stack.head.objectIndex;
    }
    else
    {
      return "";
    }
  };

  $scope.validateFields = function(field_flat_array)
  {
    for(var i = 0; i < field_flat_array.length; i++)
    {
      $scope.validateField(field_flat_array[i]);
    }
  };

  $scope.validateField = function(field_flat)
  {
    $scope.updateValue(
      field_flat,
      $scope.workspace_flat,
      $scope.workspace);

    $scope["object"] = extract(
      expand($scope.path_array),
      $scope.workspace);
  };

};
