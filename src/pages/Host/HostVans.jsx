import { Link, useLoaderData, defer, Await } from 'react-router-dom';
import classes from '../../index.module.css';
import { getHostVans } from '../../utility/vansApi';
import { requireAuth } from '../../utility/requireAuth';
import { Suspense } from 'react';

export const hostVansLoader = async ({ request }) => {
    await requireAuth(request);
    return defer({ vans: getHostVans() });
};

const HostVans = () => {
    const dataPromise = useLoaderData();

    const renderVanElements = (vans) => {
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
            <div className={classes['host-vans-list']}>
                <section>{hostVansEls}</section>
            </div>
        );
    };

    return (
        <section>
            <h1 className={classes['host-vans-title']}>Your listed vans</h1>
            <Suspense fallback={<h2>Loading vans...</h2>}>
                <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
            </Suspense>
        </section>
    );
};

export default HostVans;
