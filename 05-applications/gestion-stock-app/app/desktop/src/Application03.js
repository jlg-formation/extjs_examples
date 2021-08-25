Ext.define("GestionStockApp03.Application03", {
  extend: "Ext.app.Application",
  name: "GestionStockApp03",

  removeSplash: function () {
    Ext.getBody().removeCls("launching");
    var elem = document.getElementById("splash");
    elem.parentNode.removeChild(elem);
  },

  launch: function () {
    console.log("launch Application03");
    this.removeSplash();
    const container = Ext.create("Ext.Container", {
      items: [
        {
          xtype: "button",
          text: "Click me!",
          handler: () => {
            console.log("click");
            const dialog = Ext.create({
              xtype: "dialog",
              title: "Dialog",

              maximizable: true,
              closable: true,
              html: "Content<br>goes<br>here",

              buttons: {
                ok: function () {
                  // standard button (see below)
                  dialog.destroy();
                },
              },
            });

            dialog.show();
          },
        },
      ],
    });
    Ext.Viewport.add([container]);
    console.log("container: ", container);
  },
});
