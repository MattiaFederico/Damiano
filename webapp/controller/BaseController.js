sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/ui/core/UIComponent'
], function(Controller, UiComponent) {
  'use strict';
  
  return Controller.extend("App.controller.BaseController", {
    getRouter: function() {
      return UiComponent.getRouterFor(this);
    }
  });
});