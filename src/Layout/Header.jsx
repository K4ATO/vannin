import { Link } from 'react-router-dom';
import classes from '../index.module.css';
const Header = () => {
    return (
        <header>
            <Link className={classes['site-logo']} to='/'>
                #VANNIN
            </Link>
            <nav>
                <Link to='/host'>Host</Link>
                <Link to='/vans'>Vans</Link>
                <Link to='/about'>About</Link>
            </nav>
        </header>
    );
};
export default Header;
