Ext.define("GestionStockApp.utils.Person", {
  alias: "person",
  name: undefined,
  constructor: function (name) {
    console.log("calling constructor");
    this.name = name || "Alice";
  },
  sayHello: function () {
    console.log(`Hello my name is ${this.name}`);
  },
});
