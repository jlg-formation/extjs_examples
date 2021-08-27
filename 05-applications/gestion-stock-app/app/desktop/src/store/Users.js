Ext.define("GestionStockApp.store.Users", {
  extend: "Ext.data.Store",
  alias: "store.users",
  model: "GestionStockApp.model.User",
  data: [
    { firstName: "Jean-Louis", age: "34" },
    { firstName: "Scott", age: "72" },
    { firstName: "Gary", age: "19" },
    { firstName: "Capybara", age: "208" },
  ],
});
