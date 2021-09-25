Ext.define("GestionStockApp.view.stock.AddViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.stock_addviewcontroller",

  onSubmit: function () {
    const form = this.getView();
    console.log("form: ", form);

    form.submit({
      url: "http://localhost:3000/articles",
      failure: function (form, result) {
        // this is crazy because for a success,
        // extJS requires a "success" property in the JSON returned...
        // so for the success we check the failure method...
        console.log("result: ", result);
        console.log("form: ", form);
        // refresh the store
        articleStore.load();
        const ctrl = form.up("mainview").getController();
        ctrl.redirectTo("stock_list", true);
      },
    });
  },
});
