Ext.application({
  extend: "GestionStockApp.Application",
  name: "GestionStockApp",
});

console.log("GestionStockApp: ", GestionStockApp);

const alice = Ext.create("GestionStockApp.utils.Person");
alice.sayHello();
const bob = Ext.create("GestionStockApp.utils.Person", "Bob");
bob.sayHello();

// Not recommanded because you cannot always be sure the class has been already well defined.
// Please get the habbit of using Ext.create
const charly = new GestionStockApp.utils.Employee("Charly");
charly.sayHello();

const dany = Ext.create("widget.employee", "Dany");
dany.sayHello();
dany.setSalary(1300);
console.log("dany salary: " + dany.getSalary());
try {
  dany.setSalary("toto");
} catch (e) {
  console.log("e: ", e);
}
console.log("Employee count: " + GestionStockApp.utils.Employee.count);
