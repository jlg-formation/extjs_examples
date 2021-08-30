Ext.define("GestionStockApp.view.routes.stock.AddView", {
  extend: "Ext.Container",
  xtype: "stock_addview",
  requires: ["Ext.Label"],
  layout: {
    type: "vbox",
    align: "center",
    pack: "center",
  },
  items: [
    {
      xtype: "label",
      html: "<h1>Ajout d'un article</h1>",
    },
  ],
});
