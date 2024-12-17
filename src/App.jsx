import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { allEmployees } from "./all-employees.js";

function App() {
  const [newBonus, setNewBonus] = useState(false);

  function updateBonus() {
    allEmployees.forEach((employee) => {
      employee.addToBonus();
      console.log(employee.bonus);
      setNewBonus(true);
    });
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>B&H</h1>

      <button type="button" onClick={updateBonus}>
        Increase Bonus by 5%
      </button>

      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">Last Name</th>
              <th scope="col">Bonus Amount</th>
            </tr>
          </thead>
          <tbody>
            {allEmployees.map((employee, index) => (
              <>
                <tr key={index}>
                  <td key={index + 1}>{employee.lastName}</td>

                  <td key={index + 2}>
                    ${newBonus ? employee.bonus : employee.calculateBonus()}.00
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
