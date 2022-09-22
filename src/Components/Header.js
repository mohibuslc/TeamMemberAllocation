
const Header =({selectTeam ,teamcount})=>{

    return(
        <header >
        <div className="container">

            

            <h1>Team Member Allocation</h1>

            <h3>{selectTeam} , has {teamcount} member</h3>
            </div>
        </header>


       
       
    )
}

export default Header ;

