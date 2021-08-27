Ext.define("GestionStockApp06.Application06", {
  extend: "Ext.app.Application",
  name: "GestionStockApp06",

  removeSplash: function () {
    Ext.getBody().removeCls("launching");
    var elem = document.getElementById("splash");
    elem.parentNode.removeChild(elem);
  },

  launch: function () {
    console.log("launch Application06");
    this.removeSplash();
    const view = Ext.create("Ext.Panel", {
      viewModel: Ext.create("Ext.app.ViewModel", {
        data: {
          name: "Hello",
        },
      }),
      layout: {
        type: "hbox",
        align: "center",
        pack: "center",
      },
      items: [
        {
          xtype: "textfield",
          bind: {
            value: "{name}",
          },
        },
        {
          xtype: "textfield",
          bind: {
            value: "{name}",
          },
        },
        {
          xtype: "container",
          bind: {
            html: "{name}",
          },
        },
      ],
    });
    Ext.Viewport.add([view]);
    console.log("view: ", view);
  },
});
