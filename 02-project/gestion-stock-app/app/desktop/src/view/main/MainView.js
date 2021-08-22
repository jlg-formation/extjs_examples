Ext.define("GestionStockApp.view.main.MainView", {
  extend: "Ext.Container",
  xtype: "mainview",
  items: [
    {
      xtype: "button",
      text: "My First Button",
    },
    {
      xtype: "button",
      text: "My Second Button",
      badgeText: "2",
    },
  ],
});
