import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { allEmployees, saveToStorage } from "./all-employees.js";
import { Popup } from "./pop-up.jsx";

function App() {
  const [disableBtn, SetDisableBtn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [employee, SetEmployee] = useState({});
  const [sortingOrder, setSortingOrder] = useState("");

  function updateBonus() {
    allEmployees.forEach((employee) => {
      employee.addToBonus();
    });
    SetDisableBtn(true);
    saveToStorage();
  }

  function sortTable(arr, order) {
    if (order === "Sort By highest Bonus first") {
      arr.sort((a, b) => b.bonus - a.bonus);
    } else if (order === "Sort by name") {
      arr.sort((a, b) => a.lastName.localeCompare(b.lastName));
    } else if (order === "Sort By lowest Bonus first") {
      arr.sort((a, b) => a.bonus - b.bonus);
    }
  }

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  function handleClick(employee) {
    SetEmployee(employee);
    togglePopup();
  }

  if (showPopup) {
    document.body.classList.add("active-popup");
  } else {
    document.body.classList.remove("active-popup");
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="title">Employee Table</h1>

      {!disableBtn && (
        <button type="button" onClick={updateBonus}>
          Increase Bonus by 5%
        </button>
      )}

      {disableBtn && <h2>All Bonuses were successfully updated!</h2>}

      <select
        className="dropdown"
        value={sortingOrder}
        onChange={(event) => setSortingOrder(event.target.value)}
      >
        <option>Choose your sorting order</option>
        <option>Sort by name</option>
        <option>Sort By highest Bonus first </option>
        <option>Sort By lowest Bonus first </option>
      </select>

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
            {sortTable(allEmployees, sortingOrder)}
            {allEmployees.map((employee, index) => (
              <tr key={index}>
                <td onClick={() => handleClick(employee)}>
                  {employee.lastName}
                </td>

                <td>${employee.bonus}.00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPopup && (
        <section>
          <Popup employee={employee} togglePopup={togglePopup} />
        </section>
      )}
    </>
  );
}

export default App;
