import { Link } from 'react-router-dom';
import classes from '../index.module.css';
const Home = () => {
    return (
        <div className={classes['home-container']}>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>
                Add adventure to your life by joining the #vannin movement. Rent
                the perfect van to make your perfect road trip.
            </p>
            <Link to='vans'>Find your van</Link>
        </div>
    );
};
export default Home;
