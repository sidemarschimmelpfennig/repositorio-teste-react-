import './style.css';
import aikoLogo from '../../../assets/img/aiko.png';
import { Link } from 'react-router-dom';





function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/">
                    <img src={aikoLogo} alt="logo da aiko" className='logo'/>
                </Link>
                    <ul className='list'>  
                        <li className='item'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='item'> 
                            <Link to="/contact">Contato</Link>
                        </li>
                      
                        <li className='item'>
                            <Link to="/company">Empresa</Link>
                        </li>
                    </ul>
            </div>
        </nav>
    );
}

export default Nav;