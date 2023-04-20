import classes from '../index.module.css';
import { Link } from 'react-router-dom';
const Van = (props) => {
    return (
        <div key={props.id} className={classes['van-tile']}>
            <Link to={`/vans/${props.id}`}>
                <img src={props.imageUrl} />
                <div className={classes['van-info']}>
                    <h3>{props.name}</h3>
                    <p>
                        ${props.price}
                        <span>/day</span>
                    </p>
                </div>
                <i
                    className={`${classes['van-type']} ${
                        classes[props.type]
                    } selected`}
                >
                    {props.type}
                </i>
            </Link>
        </div>
    );
};
export default Van;
