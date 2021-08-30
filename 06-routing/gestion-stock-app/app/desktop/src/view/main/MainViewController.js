Ext.define("GestionStockApp.view.main.MainViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.mainviewcontroller",
  routes: {
    home: () => {
      console.log("I am on homeview");
    },
    legal: "onLegal",
  },
  onLegal: function () {
    console.log("I am on legalview");
  },
});
