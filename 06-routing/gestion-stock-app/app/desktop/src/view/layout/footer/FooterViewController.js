Ext.define("GestionStockApp.view.layout.FooterViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.footerviewcontroller",
  gotoLegal: function () {
    console.log("go to mentions legal");
    console.log("this: ", this);
    this.redirectTo("legal", true);
  },
});
