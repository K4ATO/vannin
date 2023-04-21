import classes from '../../index.module.css';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import VansDetailsNav from './VansDetailsNav';
const HostVansDetail = () => {
    const params = useParams();
    const [currentVan, setCurrentVan] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/host/vans/${params.id}`);
            const data = await response.json();
            setCurrentVan(data.vans);
        };
        fetchData();
    }, []);
    if (!currentVan) {
        return <h1>Loading...</h1>;
    }

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
