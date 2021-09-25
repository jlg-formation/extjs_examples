Ext.define("GestionStockApp.store.Articles", {
  extend: "Ext.data.Store",
  alias: "store.articles",
  model: "GestionStockApp.model.Article",

  autoLoad: true,

  proxy: {
    type: "rest",
    url: "http://localhost:3000/articles",
  },
});
