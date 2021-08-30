Ext.define("GestionStockApp.view.MainView", {
  extend: "Ext.Container",
  xtype: "mainview",
  controller: { type: "mainviewcontroller" },
  requires: ["Ext.layout.Fit"],
  layout: "fit",
  items: [
    {
      xtype: "headerview",
      docked: "top",
    },
    {
      xtype: "bodyview",
      reference: "bodyview",
    },
    {
      xtype: "footerview",
      docked: "bottom",
    },
  ],
});
