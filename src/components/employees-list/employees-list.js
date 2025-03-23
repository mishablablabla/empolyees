import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;

    return <EmployeesListItem key={item.id} {...itemProps} />;
  });

  return (
    <ul className="app-list list-group">
      <h6>
        * In case you wanna give a promote to an employee, click on his/her
        name.
      </h6>

      {elements}
    </ul>
  );
};

export default EmployeesList;
