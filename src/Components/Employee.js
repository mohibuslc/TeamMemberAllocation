
import female from './images/female.jpg';
import male from './images/male.png';


const Employee = ({employees,selectTeam,handleClick,handleEmployeeCardClick}) => {

 
  return (
    <main className="container">

      <div class="row justify-content-center mt-3 mb-4" >

        <div class="col-6">
          <select class="form-select form-select-lg" value={selectTeam} onChange={handleClick}>
            <option value ='TeamA'>TeamA</option>
            <option value ='TeamB'>TeamB</option>
            <option value ='TeamC'>TeamC</option>
            <option value ='TeamD'>TeamD</option>


          </select>
          
          <br></br>
           </div>

        <div className=" col-8">

          <div className="card-collection">
            {

              employees.map(employee => {

                return (
                  <div  key={employee.id}  style={{cursor: "pointer"}} id={employee.id} className={(employee.teamName === selectTeam ? 'card m-2 standout' : 'card m-2')} onClick={handleEmployeeCardClick}>

                    {/*  JavaScript Logic .. Help to Salected geneder wase name */}

                    {(employee.gender === 'male') ? <img src={male} className="card-img-top " />:<img src={female} className="card-img-top " />}



                    <div className="card-body">

                      <h5 className="card-titla">FullName:{employee.fullName}</h5>
                      <p className="card-text"> <b>Designation:</b> {employee.designation}</p>
                    </div>

                  </div>
                )
              })





            }





          </div>
        </div>


      </div>




    </main>

  )
}

export default Employee;

