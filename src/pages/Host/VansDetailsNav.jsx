import { NavLink } from 'react-router-dom';
import classes from '../../index.module.css';
const VansDetailsNav = () => {
    const activeStyles = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616',
    };
    return (
        <nav className={classes['host-van-detail-nav']}>
            <NavLink
                to='.'
                end
                style={({ isActive }) => (isActive ? activeStyles : null)}
            >
                Details
            </NavLink>
            <NavLink
                to='pricing'
                style={({ isActive }) => (isActive ? activeStyles : null)}
            >
                Pricing
            </NavLink>
            <NavLink
                to='photos'
                style={({ isActive }) => (isActive ? activeStyles : null)}
            >
                Photos
            </NavLink>
        </nav>
    );
};

export default VansDetailsNav;
