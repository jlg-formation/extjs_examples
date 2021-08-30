Ext.define("GestionStockApp.view.stock.ListViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.stock_listviewcontroller",

  onSelect: function (grid, selected, eOpts) {
    const selectable = grid.getSelectable();
    console.log("selectable: ", selectable);
    const items = selectable._selected.items;
    console.log("items: ", items);
    const selection = selectable.getSelection();
    console.log("selection: ", selection);
  },
  onDeselect: function (grid, selected, eOpts) {
    const selectable = grid.getSelectable();
    console.log("selectable: ", selectable);
    const items = selectable._selected.items;
    console.log("items: ", items);
    const selection = selectable.getSelection();
    console.log("selection: ", selection);
  },
});
