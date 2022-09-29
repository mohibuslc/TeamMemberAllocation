import { Link } from "react-router-dom"
import Employee from './Employee';
import Content from './Content';


const Nav=()=>{

    return (


        <div className="nav-bar">
        <nav>
        <li><Link to="/">Home</Link></li>
        <li> <Link to="content">Content</Link></li>
        
        </nav>
        
        </div>
    )
}

export default Nav ; 
