import classes from '../../index.module.css';
import { useState, Suspense } from 'react';
import {
    Link,
    useSearchParams,
    useLoaderData,
    defer,
    Await,
} from 'react-router-dom';
import { getVans } from '../../utility/vansApi';

export const vansLoader = () => {
    return defer({ vans: getVans() });
};

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dataPromise = useLoaderData();

    const typeFilter = searchParams.get('type');

    const handleFilterChange = (key, value) => {
        setSearchParams((prevParams) => {
            if (value === null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        });
    };
    const renderVanElements = (vans) => {
        const displayedVans = typeFilter
            ? vans.filter((van) => van.type === typeFilter)
            : vans;

        const vanElements = displayedVans.map((van) => (
            <div key={van.id} className={classes['van-tile']}>
                <Link
                    to={van.id}
                    state={{
                        search: `?${searchParams.toString()}`,
                        type: typeFilter,
                    }}
                >
                    <img src={van.imageUrl} />
                    <div className={classes['van-info']}>
                        <h3>{van.name}</h3>
                        <p>
                            ${van.price}
                            <span>/day</span>
                        </p>
                    </div>
                    <i
                        className={`${classes['van-type']} ${
                            classes[van.type]
                        } selected`}
                    >
                        {van.type}
                    </i>
                </Link>
            </div>
        ));
        return (
            <>
                <div className={classes['van-list-filter-buttons']}>
                    <button
                        onClick={() => handleFilterChange('type', 'simple')}
                        className={`${classes['van-type']} ${
                            classes['simple']
                        } ${typeFilter === 'simple' ? classes.selected : ''}`}
                    >
                        Simple
                    </button>
                    <button
                        onClick={() => handleFilterChange('type', 'luxury')}
                        className={`${classes['van-type']} ${
                            classes['luxury']
                        } ${typeFilter === 'luxury' ? classes.selected : ''}`}
                    >
                        Luxury
                    </button>
                    <button
                        onClick={() => handleFilterChange('type', 'rugged')}
                        className={`${classes['van-type']} ${
                            classes['rugged']
                        } ${typeFilter === 'rugged' ? classes.selected : ''}`}
                    >
                        Rugged
                    </button>

                    {typeFilter ? (
                        <button
                            onClick={() => handleFilterChange('type', null)}
                            className={`${classes['van-type']} ${classes['clear-filters']}`}
                        >
                            Clear filter
                        </button>
                    ) : null}
                </div>
                <div className={classes['van-list']}>{vanElements}</div>
            </>
        );
    };

    return (
        <div className={classes['van-list-container']}>
            <h1>Explore our van options</h1>
            <Suspense fallback={<h2>Loading vans...</h2>}>
                <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
            </Suspense>
        </div>
    );
};

export default Vans;
