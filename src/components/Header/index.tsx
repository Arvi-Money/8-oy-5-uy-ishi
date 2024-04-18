import "../index.css"
import logo from "../../assets/logoxe.svg"


const Header = () => {
    return (
        <div style={{backgroundColor: "rgb(10, 20, 110)", width:"100%"}} >
             <div  className="p-3 container d-flex justify-content-between align-items-center text-white">
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className="d-flex personalBusiness">
                    <li style={{  padding: "8px" }} >Personal</li>
                    <span style={{padding: "8px"}} className="">|</span>
                <li style={{marginRight:"7px", padding:"8px", color:"rgba(255, 255, 255, 0.5)"}} >Business</li>
            </ul>
            <ul className="d-flex sendMessage">
                <li >Send Money</li>
                <li >Converter</li>
                <li >Currency API</li>
                <li >Tools</li>
                <li >Resources</li>
            </ul>
            <div className="d-flex registerBtn">
                <button className="first">Sign in</button>
                <button className="second">Register</button>
            </div>
        </div>
       </div>
    )
}

export default Header