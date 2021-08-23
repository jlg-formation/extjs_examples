Ext.application({
  extend: "GestionStockApp.Application",
  name: "GestionStockApp",
});

console.log("GestionStockApp: ", GestionStockApp);

const alice = Ext.create("GestionStockApp.utils.Person");
alice.sayHello();
const bob = Ext.create("GestionStockApp.utils.Person", "Bob");
bob.sayHello();
