(function () {
  "use strict";

  Ext.onReady(() => {
    console.log("on ready", Ext);

    Ext.create("Ext.Panel", {
      renderTo: "myApp",
      height: 300,
      width: 400,
      title: "Hello ExtJs!",
      html: "<i> This is an italic text. </i>",
      listeners: {
        afterrender: function () {
          Ext.Msg.alert("Success!", "We have been rendered");
        },
      },
    });
  });
})();
