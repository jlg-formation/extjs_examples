Ext.define("GestionStockApp.view.main.MainViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.mainviewcontroller",
  routes: {
    ":route": { action: "onRoute" },
  },
  onRoute: function (route) {
    console.log("I am on " + route);
  },
});
