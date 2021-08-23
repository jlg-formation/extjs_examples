Ext.define("GestionStockApp.view.main.MainViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.mainviewcontroller",

  onIncrement: function () {
    console.log("this: ", this);
    const vm = this.getViewModel();
    console.log("incrementing...", vm);
    const counter = vm.get("counter");
    vm.set("counter", counter + 1);
  },

  onDecrement: function () {
    console.log("this: ", this);
    const vm = this.getViewModel();
    console.log("decrementing...", vm);
    const counter = vm.get("counter");
    vm.set("counter", counter - 1);
  },
});
