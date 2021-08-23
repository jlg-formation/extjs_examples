Ext.application({
  extend: "GestionStockApp.Application",
  name: "GestionStockApp",
});

console.log("GestionStockApp: ", GestionStockApp);
console.log("about to override Person");

// 1) use the prototype (not recommanded)
// GestionStockApp.utils.Person.prototype.sayHello = function () {
//   console.log(`New version: Hello my name is ${this.name}`);
// };

// 2) use Ext.Base.override
// GestionStockApp.utils.Person.override({
//   sayHello: function () {
//     this.callParent();
//     console.log("I am glad to meet you.");
//   },
// });

// 3) use Ext.override
Ext.override(GestionStockApp.utils.Person, {
  sayHello: function () {
    this.callParent();
    console.log("I am VERY glad to meet you.");
  },
});

const alice = Ext.create("GestionStockApp.utils.Person");
alice.sayHello();
alice.sleep();
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
