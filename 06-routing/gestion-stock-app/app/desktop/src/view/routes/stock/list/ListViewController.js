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

    // const view = this.getView();
    // const removeBtn = view.query("#remove-button")[0];
    // console.log("removeBtn: ", removeBtn);
    // removeBtn.show();
  },

  onDeselect: function (grid, selected, eOpts) {
    const selectable = grid.getSelectable();
    console.log("selectable: ", selectable);
    const items = selectable._selected.items;
    console.log("items: ", items);
    const selection = selectable.getSelection();
    console.log("selection: ", selection);
  },

  removeArticles() {
    const vm = this.getViewModel();
    console.log("vm: ", vm);
    const selectedArticles = vm.data.selectedArticles;
    console.log("about to remove items", selectedArticles);
    for (const a of selectedArticles) {
      a.erase();
    }
  },
});
