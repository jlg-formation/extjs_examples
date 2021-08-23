console.log("about to define PersonComponent");

Ext.define("GestionStockApp.utils.PersonComponent", {
  xtype: "personComponent",
  extend: "Ext.Component",
  renderTo: Ext.getBody(),
  html: "<b>I am a person!</b>",
});
