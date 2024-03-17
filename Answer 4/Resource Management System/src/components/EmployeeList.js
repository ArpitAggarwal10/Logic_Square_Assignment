import React from 'react';
import '../styles/Employee.css';
const EmployeeList = ({ employees, handleEdit, handleDelete }) => {
    return (
        <div className="employee-list">
            <h2>Employee Listing</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.designation}</td>
                            <td>{emp.department}</td>
                            <td>{emp.age}</td>
                            <td>
                                <button onClick={() => handleEdit(emp.id)}>Edit</button>
                                <button onClick={() => handleDelete(emp.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;