Ext.define("GestionStockApp.store.Articles", {
  extend: "Ext.data.Store",
  alias: "store.articles",
  model: "GestionStockApp.model.Article",

  autoLoad: true,

  proxy: {
    type: "ajax",
    url: "http://localhost:3000/articles",
    reader: "json",
  },
});

var articleStore = Ext.create("GestionStockApp.store.Articles");
