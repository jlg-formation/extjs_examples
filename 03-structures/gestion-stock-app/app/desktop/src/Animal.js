console.log("about to define Animal");

Ext.define("GestionStockApp.utils.Animal", {
  alias: "animal",
  eat: function (food) {
    console.log(`Miam, I am eating ${food}!`);
  },
  sleep: function () {
    console.log("I am sleeping...");
  },
});
