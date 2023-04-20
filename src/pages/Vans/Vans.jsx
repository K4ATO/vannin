import { useEffect, useState } from 'react';
import classes from '../../index.module.css';
import Van from '../../components/Van';
const Vans = () => {
    const [vans, setVans] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/vans');
            const data = await response.json();
            setVans(data.vans);
        };
        fetchData();
    }, []);

    return (
        <div className={classes['van-list-container']}>
            <h1>Explore our van options</h1>
            <div className={classes['van-list']}>
                {vans &&
                    vans.map((van) => (
                        <Van
                            id={van.id}
                            imageUrl={van.imageUrl}
                            name={van.name}
                            price={van.price}
                            type={van.type}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Vans;
