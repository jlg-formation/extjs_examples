console.log("Application01");

Ext.define("GestionStockApp01.Application01", {
  extend: "Ext.app.Application",
  name: "GestionStockApp01",

  removeSplash: function () {
    Ext.getBody().removeCls("launching");
    var elem = document.getElementById("splash");
    elem.parentNode.removeChild(elem);
  },

  launch: function () {
    console.log("launch");
    this.removeSplash();
    const panel = Ext.create("Ext.Panel", {
      xtype: "truc",
      title: "Titre du panel",
      iconCls: "svg-stock",
      html: "The content <b>of the panel</b>",
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
  },
});
