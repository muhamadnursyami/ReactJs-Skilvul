import './navbar.css';

let listStyle ={
    border:"1px solid green",
    marginTop : "50px"
}
function Navbar () {

    return(

        <header style={{backgroundColor:"blue"}}>
        <nav >
            <ul className="navbar">
                <li style={listStyle}>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
        )
}

export default Navbar;