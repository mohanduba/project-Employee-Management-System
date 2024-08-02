import React from "react";
import { useState,useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function UpdateEmployeeComponent(){

    let navigate=useNavigate();

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const {id}=useParams();

    useEffect(()=>
    {
        EmployeeService.getEmployeeById(id).then(res=>
            {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmail(res.data.email);
            }).catch(error=>
            {
                console.log(error);
            })

        
    },[])

    const cancelHandler=(e)=>
    {
        navigate("/employees");
    }

    const updateHandler=(e)=>
    {
        e.preventDefault();
        const employee={firstName,lastName,email};

        if(id){
            EmployeeService.updateEmployee(id,employee).then(res=>
            {
                navigate("/employees");
            })
        }
        else{
            EmployeeService.createEmployee(employee).then(res=>
            {
                console.log(res.data);
                navigate("/employees");
            })
        }
    }

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">Update Employee</h2>
                    <div className="card-body">
                        <form>
                        <div className="form-group">
                        <label className="my-3">FirstName:</label>
                        <input type="text" name="firstName" placeholder='First Name' className="form-control"
                         autoComplete="off" value={firstName} onChange={(e)=>setFirstName(e.target.value)} ></input>
                        </div>
                        <div className="form-group">
                        <label className="my-3">LastName:</label>
                        <input type="text" name="lastName" placeholder='Last Name' className="form-control"
                         autoComplete="off" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                        <label className="my-3">Email:</label>
                        <input type="text" name="email" placeholder='Email' className="form-control"
                         autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>
                        <button className="btn btn-success mt-3" onClick={updateHandler}> save </button>
                        <button className="btn btn-danger mt-3 ms-3" onClick={cancelHandler}> cancel </button>
                        </form>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default UpdateEmployeeComponent;