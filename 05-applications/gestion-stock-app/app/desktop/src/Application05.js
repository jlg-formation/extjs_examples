Ext.define("GestionStockApp05.Application05", {
  extend: "Ext.app.Application",
  name: "GestionStockApp05",

  removeSplash: function () {
    Ext.getBody().removeCls("launching");
    var elem = document.getElementById("splash");
    elem.parentNode.removeChild(elem);
  },

  launch: function () {
    console.log("launch Application05");
    this.removeSplash();
    const menu = Ext.create({
      xtype: "menu",
      floated: false,
      docked: "left",
      items: [
        {
          text: "regular item 1",
        },
        {
          text: "regular item 2",
          menu: {
            xtype: "menu",
            items: [
              {
                text: "regular item 1",
              },
              {
                text: "regular item 2",
              },
              {
                text: "regular item 3",
                menu: {
                  xtype: "menu",
                  items: [
                    {
                      text: "regular item 1",
                    },
                    {
                      text: "regular item 2",
                    },
                    {
                      text: "regular item 3",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          text: "regular item 3",
        },
      ],
    });
    console.log("menu: ", menu.getDefaultType());
    const view = Ext.create("Ext.Panel", {
      fullscreen: true,

      items: [
        menu,
        {
          html: "truc",
        },
      ],
    });
    Ext.Viewport.add([view]);
    console.log("view: ", view);
  },
});
