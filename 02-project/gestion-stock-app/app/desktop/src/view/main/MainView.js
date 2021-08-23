Ext.define("GestionStockApp.view.main.MainView", {
  extend: "Ext.Container",
  xtype: "mainview",
  controller: "mainviewcontroller",
  viewModel: {
    type: "mainviewmodel",
  },
  items: [
    {
      xtype: "button",
      text: "Increment",
      handler: "onIncrement",
    },
    {
      xtype: "button",
      text: "Decrement",
      bind: {
        badgeText: "{counter}",
      },
      handler: "onDecrement",
      tooltip: "Decrement the counter.",
    },
    {
      xtype: "textfield",
      name: "name",
      fieldLabel: "Name",
      bind: {
        value: "{counter}",
      },
    },
  ],
});

// Basic info
console.log(Ext.ClassManager.aliasToName);
