import "./popup.css";

export function Popup({ employee, togglePopup, newBonus }) {
  return (
    <div className="modal">
      <div className="overlay" onClick={togglePopup}>
        <div className="modal-content">
          <button type="button" className="close-modal" onClick={togglePopup}>
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
                {employee.team !== null && <td>{employee.team}</td>}

                <td>{employee.title}</td>
                <td>{employee.prefix}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>

                {employee.manager && <td>{employee.manager}</td>}

                <td>${employee.salary}.00</td>

                <td>
                  ${newBonus ? employee.bonus : employee.calculateBonus()}.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
