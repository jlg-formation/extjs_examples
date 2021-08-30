Ext.define("GestionStockApp.view.routes.stock.ListView", {
  extend: "Ext.Container",
  xtype: "stock_listview",
  requires: ["Ext.Label", "Ext.grid.*", "Ext.grid.plugin.*"],
  layout: {
    type: "vbox",
    align: "center",
  },
  controller: { type: "stock_listviewcontroller" },
  items: [
    {
      xtype: "label",
      html: "<h1>Liste des articles</h1>",
    },
    {
      xtype: "container",
      flex: 1,
      layout: {
        type: "vbox",
        align: "left",
      },
      items: [
        {
          xtype: "button",
          text: "Ajouter",
        },
        {
          xtype: "grid",
          flex: 1,
          title: "Liste des articles",

          store: "Articles",
          columnLines: true,

          selectable: {
            checkbox: true,
            // mode: "multi",
            toggleOnClick: true,
            deselectable: true,
          },

          listeners: {
            select: "onSelect",
            deselect: "onDeselect",
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
    },
  ],
});
