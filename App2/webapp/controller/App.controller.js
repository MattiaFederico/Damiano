sap.ui.define([
  'App/controller/BaseController',
  "sap/ui/core/Fragment",
  "sap/ui/model/json/JSONModel"
], function(BaseController, Fragment, JSONModel) {
  'use strict';
  
  BaseController.extend( "App.controller.App", {
    _getDialog : function () {
      let oView = this.getView();
      if (!this.pDialog) {
				this.pDialog = Fragment.load({
					id: oView.getId(),
          name: "App.view.fragment.Data",
          controller: this
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					return oDialog;
				});
			}
    },
    onDialogClose: function() {
      this.byId("userDialog").close();
    },
    onHelpRequest: function() {
      this._getDialog();
      this.pDialog.then( (oDialog) => {
        oDialog.open();
      })
    },
    onConfirm: function(oEvent) {
      let oInput = this.byId("input");
      let tokens = oEvent.getParameters().selectedItems;
      let addTokens = [];
      tokens.forEach( val => {
        let token = new sap.m.Token({
          text: val.getProperty("title")
        });
        addTokens.push(token);
      })
      oInput.setTokens(addTokens)
    }
  })
});