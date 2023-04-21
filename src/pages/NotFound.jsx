import { Link } from 'react-router-dom';
import classes from '../index.module.css';
export default function NotFound() {
    return (
        <div className={classes['not-found-container']}>
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to='/' className={classes['link-button']}>
                Return to Home
            </Link>
        </div>
    );
}
