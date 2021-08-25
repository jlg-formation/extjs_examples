Ext.define("GestionStockApp02.Application02", {
  extend: "Ext.app.Application",
  name: "GestionStockApp02",

  removeSplash: function () {
    Ext.getBody().removeCls("launching");
    var elem = document.getElementById("splash");
    elem.parentNode.removeChild(elem);
  },

  launch: function () {
    console.log("launch Application02");
    this.removeSplash();
    const container = Ext.create("Ext.Container", {
      requires: ["Ext.layout.Fit"],
      layout: "fit",
      items: [
        {
          cls: "header",
          xtype: "toolbar",
          docked: "top",
          items: [
            {
              xtype: "img",
              src: "/resources/images/stock.svg",
              height: 24,
              width: 24,
            },
            {
              xtype: "container",
              padding: "0 10",
              html: "Gestion Stock",
            },
          ],
        },
        {
          layout: {
            type: "vbox",
            align: "center",
            pack: "center",
          },
          items: [
            {
              xtype: "label",
              html: "<h1>Gérer efficacement votre stock !</h1>",
            },
            {
              xtype: "button",
              cls: "btn-primary",
              text: "Voir le stock",
              scale: "large",
            },
          ],
        },
        {
          xtype: "toolbar",
          docked: "bottom",
          cls: "footer",
          layout: {
            pack: "center",
          },
          items: [
            {
              xtype: "button",
              text: "Mentions Légales",
            },
          ],
        },
      ],
    });
    Ext.Viewport.add([container]);
    console.log("container: ", container);
  },
});
