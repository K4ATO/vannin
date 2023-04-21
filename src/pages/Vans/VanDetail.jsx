import { Link, useLocation, useLoaderData } from 'react-router-dom';
import classes from '../../index.module.css';
import { getVans } from '../../utility/vansApi';

export const vanLoader = ({ params }) => {
    return getVans(params.id);
};

const VanDetail = () => {
    const van = useLoaderData();
    const location = useLocation();

    const search = location.state?.searchParams || '';
    return (
        <div className={classes['van-detail-container']}>
            <Link
                to={`..${search}`}
                relative='path'
                className={classes['back-button']}
            >
                &larr; <span>Back to {location.state.type} vans</span>
            </Link>

            <div className={classes['van-detail']}>
                <img src={van.imageUrl} />
                <i
                    className={`${classes['van-type']} ${
                        classes[van.type]
                    } selected`}
                >
                    {van.type}
                </i>
                <h2>{van.name}</h2>
                <p className={classes['van-price']}>
                    <span>${van.price}</span>/day
                </p>
                <p>{van.description}</p>
                <button className={classes['link-button']}>
                    Rent this van
                </button>
            </div>
        </div>
    );
};

export default VanDetail;
