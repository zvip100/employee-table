import { Employee } from "./employee-class.js";

const roth = new Employee(null, "Executive", "Mr", "Moshe", "Roth", 250000);

const stark = new Employee(
  "Store",
  "Supervisor",
  "Mr",
  "Chaim",
  "Stark",
  150000
);

const spira = new Employee(
  "Warehouse",
  "Supervisor",
  "Mr",
  "Moshe",
  "Spira",
  160000
);

const gold = new Employee(
  "Applications",
  "Manager",
  "Mr",
  "Yehuda",
  "gold",
  120000
);
const weiss = new Employee(
  "Website",
  "Manager",
  "Mrs",
  "Miriam",
  "Weiss",
  120000
);

const green = new Employee(
  "Website",
  "Employee",
  "Mr",
  "Shlomo",
  "Green",
  65000
);

const silver = new Employee(
  "Website",
  "Employee",
  "Mrs",
  "Ester",
  "Silver",
  75000
);

const weiser = new Employee(
  "Applications",
  "Employee",
  "Mr",
  "Yakov",
  "Weiser",
  70000
);

export const allEmployees = [
  roth,
  stark,
  spira,
  gold,
  weiss,
  green,
  silver,
  weiser,
];

console.log(allEmployees);
