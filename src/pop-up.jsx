import "./popup.css";

export function Popup({ employee, togglePopup }) {
  return (
    <div className="popup">
      <div className="overlay" onClick={togglePopup}>
        <div className="popup-content">
          <button type="button" className="close-popup" onClick={togglePopup}>
            Close
          </button>

          <table>
            <thead>
              <tr>
                {employee.team && <th scope="col">Team</th>}

                <th scope="col">Title</th>
                <th scope="col">Prefix</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>

                {employee.manager && <th scope="col">Manager</th>}

                <th scope="col">Salary</th>
                <th scope="col">Bonus</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                {employee.team && <td>{employee.team}</td>}

                <td>{employee.title}</td>
                <td>{employee.prefix}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>

                {employee.manager && <td>{employee.manager}</td>}

                <td>${employee.salary}.00</td>

                <td>${employee.bonus}.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
