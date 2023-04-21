import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classes from '../../index.module.css';
const HostVans = () => {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/host/vans');
            const data = await response.json();
            setVans(data.vans);
        };
        fetchData();
    }, []);

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
                {vans.length > 0 ? (
                    <section>{hostVansEls}</section>
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </section>
    );
};

export default HostVans;
