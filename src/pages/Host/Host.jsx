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
                    to='.'
                    end
                >
                    Dashboard
                </NavLink>
                <NavLink
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                    to='vans'
                    end
                >
                    Vans
                </NavLink>
                <NavLink
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                    to='income'
                    end
                >
                    Income
                </NavLink>
                <NavLink
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                    to='reviews'
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
