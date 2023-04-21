import classes from '../../index.module.css';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import VansDetailsNav from './VansDetailsNav';
import { getHostVans } from '../../utility/vansApi';
import { requireAuth } from '../../utility/requireAuth';

export const hostVansDetailLoader = async ({ params, request }) => {
    await requireAuth(request);
    return getHostVans(params.id);
};

const HostVansDetail = () => {
    const currentVan = useLoaderData();

    return (
        <section>
            <Link to='../vans' className={classes['back-button']}>
                &larr; <span>Back to all vans</span>
            </Link>
            <div className={classes['host-van-detail-layout-container']}>
                <div className={classes['host-van-detail']}>
                    <img src={currentVan.imageUrl} />
                    <div className={classes['host-van-detail-info-text']}>
                        <i className={classes['van-type']}>{currentVan.type}</i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <VansDetailsNav />
                <Outlet context={{ currentVan }} />
            </div>
        </section>
    );
};

export default HostVansDetail;
