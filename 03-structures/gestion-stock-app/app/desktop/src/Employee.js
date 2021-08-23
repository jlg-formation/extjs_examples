Ext.define("GestionStockApp.utils.Employee", {
  xtype: "employee",
  extend: "GestionStockApp.utils.Person",
  config: {
    salary: 1200,
  },
  statics: {
    count: 0,
  },

  constructor: function () {
    GestionStockApp.utils.Employee.count++;
  },

  applySalary: function (salary) {
    console.log("applySalary", salary);
    const s = +salary;
    if (isNaN(s)) {
      throw new Error("bad arg for salary");
    }
    return s;
  },
});
