Ext.define("GestionStockApp.view.main.MainViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.mainviewcontroller",
  routes: {
    ":route": { action: "onRoute" },
  },
  onRoute: function (route) {
    console.log("this: ", this);
    console.log("I am on " + route);
    const view = Ext.create({
      xtype: route + "view",
    });
    const body = this.lookup("bodyview");
    body.setActiveItem(view);
  },
});
