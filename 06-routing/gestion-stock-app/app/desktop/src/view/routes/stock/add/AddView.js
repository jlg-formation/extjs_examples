Ext.define("GestionStockApp.view.routes.stock.AddView", {
  extend: "Ext.Container",
  xtype: "stock.addview",
  requires: ["Ext.Label"],
  layout: {
    type: "vbox",
    align: "center",
    pack: "center",
  },
  items: [
    {
      xtype: "label",
      html: "<h1>Liste des articles</h1>",
    },
  ],
});
