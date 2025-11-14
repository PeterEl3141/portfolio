import './Navbar.css'

export default function Navbar (){


    return(
        <nav className='navbar'>
            <div className='navbar-left'>
                <a href="#hero">Peter Elliott</a>
            </div>
            <div className='navbar-right'>
                <ul>
                    <li><a href="#hero">ABOUT</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#contact">CONTACTS</a></li>
                </ul>
            </div>
        </nav>
    )
}