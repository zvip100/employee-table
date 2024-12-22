import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { allEmployees } from "./all-employees.js";
import { Popup } from "./pop-up.jsx";

function App() {
  const [newBonus, setNewBonus] = useState(false);
  const [disableBtn, SetDisableBtn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [employee, SetEmployee] = useState({});

  function updateBonus() {
    allEmployees.forEach((employee) => {
      employee.addToBonus();
      setNewBonus(true);
      SetDisableBtn(true);
    });
  }

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  function handleClick(employee) {
    SetEmployee(employee);
    togglePopup();
  }

  if (showPopup) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Employee Table</h1>

      {!disableBtn && (
        <button type="button" onClick={updateBonus}>
          Increase Bonus by 5%
        </button>
      )}

      {disableBtn && <h2>All Bonuses were successfully updated!</h2>}

      <div className="employee-table">
        <h4>&#183; Click on any Employee name to see more info &#183;</h4>

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
                  <td key={index + 1} onClick={() => handleClick(employee)}>
                    {employee.lastName}
                  </td>

                  <td key={index + 2}>
                    ${newBonus ? employee.bonus : employee.calculateBonus()}.00
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      {showPopup && (
        <section>
          <Popup
            employee={employee}
            togglePopup={togglePopup}
            newBonus={newBonus}
          />
        </section>
      )}
    </>
  );
}

export default App;
