function removeSplash() {
  Ext.getBody().removeCls("launching");
  var elem = document.getElementById("splash");
  elem.parentNode.removeChild(elem);
}

Ext.onReady(() => {
  removeSplash();
  const personComponent = Ext.create("GestionStockApp.utils.PersonComponent");
  console.log("personComponent: ", personComponent);
});
