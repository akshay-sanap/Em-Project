import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import EmployeeService from "../service/EmployeeService";

const EmployeeList = () => {

  const [loading, setLoading]= useState(true);
  const[employee, setEmployee]= useState(null);
  useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true);
    try{
      const response= await EmployeeService.getEmployees();
      setEmployee(response.data);
    }catch(error){
      console.log(error);
    }
    setLoading(false)
  };
  fetchData();
  },[]);


  const navigate = useNavigate();
  return (
    <div className="container mx-48 my-8 ">
      <div>
        <button
        onClick={()=> navigate("/addEmployee")}
         className="bg-slate-600 hover:bg-blue-700  my-4 px-16 py-2 rounded font-semibold">
          Add New Employee <FontAwesomeIcon icon={faUserPlus} size="l" />
        </button>
      </div>

      <div>
        <table className="shadow">
          <thead className="bg-slate-600">
            <th className="text-left px-10 py-3 uppercase tracking-wide">
              Name
            </th>
            <th className="text-left px-10 py-3 uppercase tracking-wide">
              Email
            </th>
            <th className="text-left px-10 py-3 uppercase tracking-wide">
              Phone
            </th>
            <th className="text-left px-10 py-3 uppercase tracking-wide">
              Address
            </th>
            <th className="text-left px-10 py-3 uppercase tracking-wide">
              Actions
            </th>
          </thead>

          {!loading &&(
          <tbody>
            {employee.map((employee)=>(
            <tr className="hover:bg-cyan-100 bg-slate-300  text-slate-900 ">
              <td className="text-left px-10 py-4 whitespace-nowrap">
                {employee.name}
              </td>
              <td className="text-left px-10 py-4 whitespace-nowrap">
                {employee.email}
              </td>
              <td className="text-left px-10 py-4 whitespace-nowrap">
                {employee.phone}
              </td>
              <td className="text-left px-10 py-4 whitespace-nowrap">
                {employee.address}
              </td>
              <td className="text-left px-10 py-4 whitespace-nowrap">
                <a className="pr-3" href="/">
                  Edit{" "}
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    size="lg"
                    style={{ color: "#015718" }}
                  />
                </a>
                <a href="/">
                  Delete{" "}
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    size="lg"
                    style={{ color: "red" }}
                  />
                </a>
              </td>
            </tr>
            ))}
          </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
