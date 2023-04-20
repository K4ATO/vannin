import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import classes from '../index.module.css';

const Layout = () => {
    return (
        <div className={classes['site-wrapper']}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
export default Layout;
