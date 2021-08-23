console.log("about to define Person");

Ext.require("GestionStockApp.utils.Animal");

Ext.define("GestionStockApp.utils.Person", {
  xtype: "person",
  name: undefined,
  constructor: function (name) {
    console.log("calling constructor");
    this.name = name || "Alice";
  },
  sayHello: function () {
    console.log(`Hello my name is ${this.name}`);
  },
  mixins: {
    eat: "GestionStockApp.utils.Animal",
    sleep: "GestionStockApp.utils.Animal",
  },
});
