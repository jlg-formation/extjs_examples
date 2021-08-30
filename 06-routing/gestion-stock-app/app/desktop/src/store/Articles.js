Ext.define("GestionStockApp.store.Articles", {
  extend: "Ext.data.Store",
  alias: "store.articles",
  model: "GestionStockApp.model.Article",

  data: [
    { id: "a1", name: "Tournevis", price: 2.34, qty: 123 },
    { id: "a2", name: "Tournevis Cruciforme", price: 3.12, qty: 56 },
    { id: "a3", name: "Pelle", price: 10, qty: 2000 },
    { id: "a4", name: "Marteau", price: 3, qty: 15 },
    { id: "a5", name: "Pince", price: 6, qty: 358 },
  ],
});
