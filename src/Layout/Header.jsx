import { Link, NavLink } from 'react-router-dom';
import classes from '../index.module.css';
import profileIcon from '../assets/images/avatar-icon.png';
const Header = () => {
    function fakeLogOut() {
        localStorage.removeItem('loggedin');
    }
    return (
        <header>
            <Link className={classes['site-logo']} to='/'>
                #VANNIN
            </Link>
            <nav>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? classes['active-link'] : null
                    }
                    to='/host'
                >
                    Host
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? classes['active-link'] : null
                    }
                    to='/vans'
                >
                    Vans
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? classes['active-link'] : null
                    }
                    to='/about'
                >
                    About
                </NavLink>
                <Link to='login' className={classes['login-link']}>
                    <img src={profileIcon} className={classes['login-icon']} />
                </Link>
                <button onClick={fakeLogOut}>X</button>
            </nav>
        </header>
    );
};
export default Header;
