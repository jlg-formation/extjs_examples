Ext.define("GestionStockApp.view.layout.HeaderView", {
  extend: "Ext.Toolbar",
  xtype: "headerview",
  cls: "headerview",
  items: [
    {
      xtype: "button",
      text: "Gestion Stock",
      iconCls: "header-icon",
    },
  ],
});
