import { Link, useLoaderData } from 'react-router-dom';
import classes from '../../index.module.css';
import { getHostVans } from '../../utility/vansApi';

export const hostVansLoader = () => {
    return getHostVans();
};

const HostVans = () => {
    const vans = useLoaderData();

    const hostVansEls = vans.map((van) => (
        <Link
            to={van.id}
            key={van.id}
            className={classes['host-van-link-wrapper']}
        >
            <div className={classes['host-van-single']} key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className={classes['host-van-info']}>
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ));

    return (
        <section>
            <h1 className={classes['host-vans-title']}>Your listed vans</h1>
            <div className={classes['host-vans-list']}>
                <section>{hostVansEls}</section>
            </div>
        </section>
    );
};

export default HostVans;
