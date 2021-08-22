(function () {
  "use strict";

  console.log("Ext: ", Ext);
  Ext.onReady(() => {
    console.log("on ready");

    Ext.create("Ext.Panel", {
      renderTo: "myApp",
      height: 300,
      width: 400,
      title: "Hello ExtJs!",
      html: "<i> This is an italic text. </i>",
    });
  });
})();
