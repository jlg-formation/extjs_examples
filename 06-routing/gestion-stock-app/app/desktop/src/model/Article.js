Ext.define("GestionStockApp.model.Article", {
  extend: "Ext.data.Model",

  fields: [
    { name: "id", type: "string" },
    { name: "name", type: "string" },
    { name: "price", type: "float" },
    { name: "qty", type: "int" },
  ],

  proxy: {
    type: "rest",
    url: "http://localhost:3000/articles",
  },
});
