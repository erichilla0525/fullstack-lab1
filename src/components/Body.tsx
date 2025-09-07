import employeeData from '../data/employees.json';

const Body = () => {
    return(
        <main>
            <h2>Employees List</h2>
            {employeeData.departments.map((department) => (
                <section key={department.name}>
                    <h3>{department.name}</h3>
                    {department.employees.map((employee) => (
                        <p key={employee.name}>{employee.name}</p>
                    ))}
                </section>
            ))}
        </main>
    )};

export default Body;