Ext.define("GestionStockApp.view.main.MainView", {
  extend: "Ext.Container",
  xtype: "mainview",
  controller: "mainviewcontroller",

  items: [
    {
      xtype: "button",
      text: "Increment",
      handler: "onIncrement",
    },
    {
      xtype: "button",
      text: "Decrement",
      badgeText: "2",
    },
  ],
});

// Basic info
console.log(Ext.ClassManager.aliasToName);
