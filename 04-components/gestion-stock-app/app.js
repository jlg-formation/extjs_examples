function removeSplash() {
  Ext.getBody().removeCls("launching");
  var elem = document.getElementById("splash");
  elem.parentNode.removeChild(elem);
}

// In Debug mode, Ext.MessageBox is not included.
// Force the Dynamic Loader to include it.
Ext.define("forceTheDynamicLoaderToRequire", {
  requires: ["Ext.MessageBox"],
});

const panel = Ext.create("Ext.Panel", {
  html: "coucou !!!",
  title: "Hello",
  xtype: "truc.panel",
  labelWidth: 100,
});

// version:
const version = Ext.getVersion().version;
console.log("version: ", version);

Ext.onReady(() => {
  removeSplash();
  console.log("on ready", Ext);
  const container = Ext.create("Ext.Container", {
    renderTo: Ext.getBody(),
    layout: {
      type: "hbox",
    },
    width: 400,
    border: 1,
    style: { borderColor: "#000000", borderStyle: "solid", borderWidth: "1px" },
    defaults: {
      labelWidth: 80,
      // implicitly create Container by specifying xtype
      xtype: "datefield",
      flex: 1,
      style: {
        padding: "10px",
      },
    },
    items: [
      {
        xtype: "datefield",
        name: "startDate",
        fieldLabel: "Start date",
      },
      {
        xtype: "datefield",
        name: "endDate",
        fieldLabel: "End date",
      },
      panel,
    ],
    listeners: {
      painted: function () {
        Ext.Msg.alert("Success!", "We have been rendered");
      },
      myniceevent: () => {
        // the myniceevent is fired when the mouse is over the container.
        Ext.Msg.alert("nice...");
      },
    },
  });

  console.log("container: ", container);
  container.el.on(
    "mouseover",
    function () {
      this.fireEvent("myniceevent", container);
    },
    container
  );

  //   console.log(Ext.ClassManager.aliasToName);
});
