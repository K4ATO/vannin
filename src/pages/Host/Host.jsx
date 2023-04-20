import { Outlet, NavLink } from 'react-router-dom';
import classes from '../../index.module.css';
const Host = () => {
    const activeStyles = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616',
    };
    return (
        <>
            <nav className={classes['host-nav']}>
                <NavLink
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                    to='/host'
                    end
                >
                    Dashboard
                </NavLink>
                <NavLink
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                    to='/host/income'
                    end
                >
                    Income
                </NavLink>
                <NavLink
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                    to='/host/reviews'
                    end
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    );
};
export default Host;
