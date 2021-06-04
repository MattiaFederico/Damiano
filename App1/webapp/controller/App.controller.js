sap.ui.define([
  'App/controller/BaseController',
  'sap/ui/model/json/JSONModel'
], function(BaseController, JSONModel) {
  'use strict';
  
  BaseController.extend( "App.controller.App", {
    onInit: function() {
      let oData = {
        products: [
          {
            id: 1,
            name: "Cpu",
            description: "Intel i7-6700k",
            price: 270.00,
            currency: "EUR",
            image: "https://images-na.ssl-images-amazon.com/images/I/812WLoBXlfL._AC_SL1500_.jpg",
            category: "Electronics",
            weight: "0,1 kg",
            dimension: "30x30x10 cm"
          },
          {
            id: 2,
            name: "Ram",
            description: "Corsair Vengeance 2x8GB DDR4",
            price: 70.00,
            currency: "EUR",
            image: "https://images-na.ssl-images-amazon.com/images/I/71bBVZMyZOL._AC_SL1500_.jpg",
            category: "Electronics",
            weight: "0,4 kg",
            dimension: "20x10x5 cm"
          },
          {
            id: 3,
            name: "Gpu",
            description: "Nvidia GeForce GTX 1060 6GB",
            price: 350.00,
            currency: "EUR",
            image: "https://images-na.ssl-images-amazon.com/images/I/71eoMkl0sFL._AC_SY450_.jpg",
            category: "Electronics",
            weight: "0,8 kg",
            dimension: "60x30x15 cm"
          },
          {
            id: 4,
            name: "Motherboard",
            description: "Msi Z170-A Gaming Pro Carbon",
            price: 170.00,
            currency: "EUR",
            image: "https://asset.msi.com/resize/image/global/product/product_7_20160309171043_56dfe893b3673.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
            category: "Electronics",
            weight: "0,6 kg",
            dimension: "50x70x15 cm"
          }
        ]
      }
      let oJSONModel = new JSONModel( oData );
      this.getView().setModel(oJSONModel);
    }
  })
});