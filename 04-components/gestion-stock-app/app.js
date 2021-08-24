function removeSplash() {
  Ext.getBody().removeCls("launching");
  var elem = document.getElementById("splash");
  elem.parentNode.removeChild(elem);
}

Ext.onReady(() => {
  removeSplash();

  Ext.create("Ext.container.Container", {
    renderTo: Ext.getBody(),
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
    ],
  });
});
