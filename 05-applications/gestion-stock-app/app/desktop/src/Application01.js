Ext.define("GestionStockApp01.Application01", {
  extend: "Ext.app.Application",
  name: "GestionStockApp01",

  removeSplash: function () {
    Ext.getBody().removeCls("launching");
    var elem = document.getElementById("splash");
    elem.parentNode.removeChild(elem);
  },

  launch: function () {
    console.log("launch Application01");
    this.removeSplash();
    const panel = Ext.create("Ext.Panel", {
      title: "Titre du panel",
      iconCls: "svg-stock",
      items: [
        {
          xtype: "toolbar",
          dock: "top",
          items: [
            {
              // the xtype by default for a toolbar is button (see toolbar defaultType property)
              text: "Ajouter",
            },
            {
              iconCls: "x-fa fa-redo",
              xtype: "button",
            },
          ],
        },
      ],
      closable: true,
      tools: [
        {
          type: "help",
          handler: function () {
            // show help here
          },
        },
        {
          itemId: "refresh",
          type: "refresh",
          hidden: true,
          handler: function () {
            // do refresh
          },
        },
        {
          type: "search",
          handler: function (panel) {
            // do search
            panel.down("#refresh").show();
          },
        },
      ],
    });
    Ext.Viewport.add([panel]);
    console.log("panel: ", panel);
  },
});
