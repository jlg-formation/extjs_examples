Ext.define("GestionStockApp07.Application07", {
  extend: "Ext.app.Application",
  name: "GestionStockApp07",

  requires: ["GestionStockApp.store.Users"],

  removeSplash: function () {
    Ext.getBody().removeCls("launching");
    var elem = document.getElementById("splash");
    elem.parentNode.removeChild(elem);
  },

  launch: function () {
    console.log("launch Application07");
    this.removeSplash();
    const view = Ext.create({
      xtype: "dataview",
      fullscreen: true,

      store: {
        xclass: "GestionStockApp.store.Users",
      },

      itemTpl: "<div>{firstName} is {age} years old</div>",
    });
    Ext.Viewport.add([view]);
    console.log("view: ", view);
  },
});
