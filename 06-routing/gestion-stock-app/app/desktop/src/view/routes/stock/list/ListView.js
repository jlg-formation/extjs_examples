Ext.define("GestionStockApp.view.routes.stock.ListView", {
  extend: "Ext.Container",
  xtype: "stock_listview",
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
