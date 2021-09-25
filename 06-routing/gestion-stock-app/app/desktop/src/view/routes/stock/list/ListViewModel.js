Ext.define("GestionStockApp.view.stock.ListViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.stock_listviewmodel",

  formulas: {
    // We'll explain formulas in more detail soon.
    hasSelectedArticle: {
      bind: {
        selection: "{articleGrid.selection}",
      },

      get: function (data) {
        console.log("arguments", arguments, this);
        const view = this.getView();
        console.log("view: ", view);
        const grid = view.query("grid")[0];
        console.log("grid: ", grid);
        const selectable = grid.getSelectable();
        const items = selectable._selected.items;
        console.log("items: ", items);
        return items.length > 0;
      },
    },
  },
});
