console.log("Application01");

Ext.define("GestionStockApp01.Application01", {
  extend: "Ext.app.Application",
  name: "GestionStockApp01",

  removeSplash: function () {
    Ext.getBody().removeCls("launching");
    var elem = document.getElementById("splash");
    elem.parentNode.removeChild(elem);
  },

  launch: function () {
    console.log("launch");
    this.removeSplash();
    const container = Ext.create("Ext.Panel", {
      xtype: "truc",
      title: "Truc",
      html: "The content",
    });
    Ext.Viewport.add([container]);
  },
});
