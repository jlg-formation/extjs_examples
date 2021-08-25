Ext.define("GestionStockApp04.Application04", {
  extend: "Ext.app.Application",
  name: "GestionStockApp04",

  removeSplash: function () {
    Ext.getBody().removeCls("launching");
    var elem = document.getElementById("splash");
    elem.parentNode.removeChild(elem);
  },

  launch: function () {
    console.log("launch Application04");
    this.removeSplash();
    const view = Ext.create("Ext.NavigationView", {
      fullscreen: true,

      items: [
        {
          title: "First",
          items: [
            {
              xtype: "button",
              text: "Push a second view!",
              handler: function () {
                // use the push() method to push another view. It works much like
                // add() or setActiveItem(). it accepts a view instance, or you can give it
                // a view config.
                view.push({
                  title: "Second",
                  html: "Second view!",
                  items: [
                    {
                      xtype: "button",
                      text: "Push a third view!",
                      handler: function () {
                        // use the push() method to push another view. It works much like
                        // add() or setActiveItem(). it accepts a view instance, or you can give it
                        // a view config.
                        view.push({
                          title: "Third",
                          html: "Third view!",
                          items: [],
                        });
                      },
                    },
                  ],
                });
              },
            },
          ],
        },
      ],
    });
    Ext.Viewport.add([view]);
    console.log("view: ", view);
  },
});
