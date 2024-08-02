import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function CreateEmployeeComponent(){

    const[employee,setEmployee]=useState({
        firstName:"",
        lastName:"",
        email:""
    })

    let navigate=useNavigate();

    const handleClick=(e)=>
    {
        var name=e.target.name;
        var value=e.target.value;
        setEmployee({...employee,[name]:value})
    }

    const saveHandler=(e)=>
    {
        e.preventDefault();
        EmployeeService.createEmployee(employee).then(res=>
        {
            navigate("/employees");
        })
    }

    const cancelHandler=()=>
    {
     navigate('/employees');
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">Add Employee</h2>
                    <div className="card-body">
                        <form>
                        <div className="form-group">
                        <label className="my-3">FirstName:</label>
                        <input type="text" name="firstName" placeholder='First Name' className="form-control"
                         autoComplete="off" value={employee.firstName} onChange={handleClick}></input>
                        </div>
                        <div className="form-group">
                        <label className="my-3">LastName:</label>
                        <input type="text" name="lastName" placeholder='Last Name' className="form-control"
                         autoComplete="off" value={employee.lastName} onChange={handleClick}></input>
                        </div>
                        <div className="form-group">
                        <label className="my-3">Email:</label>
                        <input type="text" name="email" placeholder='Email' className="form-control"
                         autoComplete="off" value={employee.email} onChange={handleClick}></input>
                        </div>
                        <button className="btn btn-success mt-3" onClick={saveHandler}> save </button>
                        <button className="btn btn-danger mt-3 ms-3" onClick={cancelHandler}> cancel </button>
                        </form>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default CreateEmployeeComponent;