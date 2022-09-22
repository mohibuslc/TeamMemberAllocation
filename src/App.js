import Content from "./Components/Content";
import Employee from "./Components/Employee";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import{useState , useEffect} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const[selectTeam , setTeam]=useState(JSON.parse(localStorage.getItem('selectTeam') ) || "TeamB")

  const [employees, setEmployees] = useState( JSON.parse(localStorage.getItem('employeesList')) ||[{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);

  function handleClick(event){
  console.log(event.target.value)
    setTeam(event.target.value)
  }
  function handleEmployeeCardClick(event){

    const transformEmployee = employees.map((employee)=> employee.id ===parseInt(event.currentTarget.id) ? (employee.teamName ===selectTeam)? {...employee , teamNam: ''}:{...employee , teamName : selectTeam }:employee);


    setEmployees(transformEmployee)
  }

// make of Local Storage

useEffect(()=>{

localStorage.setItem('employeeList',JSON.stringify(employees));

},[employees]);

useEffect(()=>{

  localStorage.setItem('selectTeamList',JSON.stringify(selectTeam));
  
  },[selectTeam]);


  return (
    <div >      
      <BrowserRouter>
      

        
      
      
      <Header selectTeam={selectTeam} 


    teamcount ={employees.filter((employee) => employee.teamName === selectTeam).length}/>
    <Routes>
    <Route  path ="/" element={<Employee employees={employees}
                selectTeam ={selectTeam}
                handleClick={handleClick}
                handleEmployeeCardClick={handleEmployeeCardClick} />} />
      <Route>
    <Route path ="content" element={<Content />}/>
    </Route>
    

</Routes>
      ls
      
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
