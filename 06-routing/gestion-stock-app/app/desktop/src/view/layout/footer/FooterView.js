Ext.define("GestionStockApp.view.layout.FooterView", {
  extend: "Ext.Toolbar",
  xtype: "footerview",
  controller: { type: "footerviewcontroller" },
  layout: {
    pack: "center",
  },
  cls: "footerview",
  items: [
    {
      xtype: "button",
      text: "Mentions Légales",
      handler: "gotoLegal",
    },
  ],
});
