Ext.define("GestionStockApp.model.Article", {
  extend: "Ext.data.Model",

  fields: [
    { name: "id", type: "string" },
    { name: "name", type: "string" },
    { name: "price", type: "float" },
    { name: "qty", type: "int" },
  ],
});
