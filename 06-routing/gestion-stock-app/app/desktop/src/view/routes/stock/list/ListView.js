Ext.define("GestionStockApp.view.routes.stock.ListView", {
  extend: "Ext.Container",
  xtype: "stock_listview",
  requires: ["Ext.Label", "Ext.grid.*", "Ext.grid.plugin.*"],
  layout: {
    type: "vbox",
    align: "center",
  },
  items: [
    {
      xtype: "label",
      html: "<h1>Liste des articles</h1>",
    },
    {
      xtype: "grid",
      flex: 1,
      title: "Liste des articles",

      store: "Articles",
      columnLines: true,

      selectable: {
        columns: false, // Can select cells and rows, but not columns
        extensible: true, // Uses the draggable selection extender
        checkbox: true,
      },

      columns: [
        {
          text: "Nom",
          dataIndex: "name",
          width: 300,
        },
        {
          text: "Prix",
          dataIndex: "price",
          width: 100,
          align: "right",
          renderer: Ext.util.Format.numberRenderer("0.00 €"),
        },
        {
          text: "Quantité",
          dataIndex: "qty",
          align: "right",
          width: 100,
        },
      ],
    },
  ],
});
