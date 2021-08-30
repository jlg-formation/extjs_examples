Ext.define("GestionStockApp.view.layout.HomeView", {
  extend: "Ext.Container",
  xtype: "homeview",
  requires: ["Ext.Label"],
  layout: {
    type: "vbox",
    align: "center",
    pack: "center",
  },
  items: [
    {
      xtype: "label",
      html: "<h1>Gérer efficacement votre stock !</h1>",
    },
    {
      xtype: "button",
      cls: "btn-primary",
      text: "Voir le stock",
      scale: "large",
    },
  ],
});
