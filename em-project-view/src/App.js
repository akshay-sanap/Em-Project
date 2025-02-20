import "./App.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/EmNavbar";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
   
    <Route path="/" element= { <EmployeeList/>}/>
    <Route path="/addEmployee" element= {<AddEmployee/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
};

export default App;
