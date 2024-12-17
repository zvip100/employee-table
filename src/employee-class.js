export class Employee {
  constructor(team, title, prefix, firstName, lastName, salary) {
    this.team = team;
    this.title = title;
    this.prefix = prefix;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  team;
  title;
  prefix;
  firstName;
  lastName;
  salary;
  bonus;
  

  calculateBonus() {
    let bonusAmount;
    switch (this.title) {
      case "Executive":
        bonusAmount = (this.salary / 100) * 20;
        break;
      case "Supervisor":
        bonusAmount = (this.salary / 100) * 10;
        break;
      case "Manager":
        bonusAmount = (this.salary / 100) * 8;
        break;
      case "Employee":
        bonusAmount = (this.salary / 100) * 5;
    }
  
    return bonusAmount;
  }

  addToBonus() {
    const getCurrentBonus = this.calculateBonus()
    const updateBonus = getCurrentBonus + (this.salary / 100) * 5;
    this.bonus = updateBonus;
    return updateBonus;
  }
}
