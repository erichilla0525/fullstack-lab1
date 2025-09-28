import organizationData from '../data/management_role.json';
import OrganizationCard from './OrganizationCard';
import { useState } from 'react';
import SearchBar from './SearchBar';


const ManagementRole = () => {

    const [inputText, setInputText ] = useState("");

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }
    
    const filteredResult = organizationData.departments.filter((department) => {
        if (inputText === ''){
            return true
        }

        const searchInput = inputText.toLowerCase();
        return department.name.toLocaleLowerCase().includes(searchInput) ||
            department.employees.some(employee => {
                return employee.name.toLowerCase().includes(searchInput)
            });

        
    });
    
    return(
        <main>
            <h2>Leadership Team</h2>
            <SearchBar onChange={inputHandler} />
            {filteredResult.map((department) => {
                return(
                    <section key={department.name}>
                    <h3>{department.name}</h3>
                    {department.employees.map((employee) => {
                        return (
                            <OrganizationCard 
                            key={employee.name} 
                            role={employee.name} 
                            description={employee.description}/>
                        )
                    })}
                </section>
                )
            })}
             
        </main>
    )
}

export default ManagementRole