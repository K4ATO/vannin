import { Outlet, Link } from 'react-router-dom';
import classes from '../../index.module.css';
const Host = () => {
    return (
        <>
            <nav className={classes['host-nav']}>
                <Link to='/host'>Dashboard</Link>
                <Link to='/host/income'>Income</Link>
                <Link to='/host/reviews'>Reviews</Link>
            </nav>
            <Outlet />
        </>
    );
};
export default Host;
