import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classes from '../../index.module.css';
const VanDetail = () => {
    const params = useParams();

    const [van, setVan] = useState();

    useEffect(() => {
        const fetchData = async (id) => {
            const response = await fetch(`/api/vans/${id}`);
            const data = await response.json();
            setVan(data.vans);
        };
        fetchData(params.id);
    }, [params.id]);

    return (
        <div className={classes['van-detail-container']}>
            {van ? (
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
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
};

export default VanDetail;
