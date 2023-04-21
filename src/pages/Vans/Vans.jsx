import classes from '../../index.module.css';
import Van from '../../components/Van';
import { useSearchParams, useLoaderData } from 'react-router-dom';
import { getVans } from '../../utility/vansApi';

export const vansLoader = () => {
    return getVans();
};

const Vans = () => {
    const vans = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();
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
    return (
        <div className={classes['van-list-container']}>
            <h1>Explore our van options</h1>
            <div className={classes['van-list-filter-buttons']}>
                <button
                    onClick={() => handleFilterChange('type', 'simple')}
                    className={`${classes['van-type']} ${classes['simple']} ${
                        typeFilter === 'simple' ? classes.selected : ''
                    }`}
                >
                    Simple
                </button>
                <button
                    onClick={() => handleFilterChange('type', 'luxury')}
                    className={`${classes['van-type']} ${classes['luxury']} ${
                        typeFilter === 'luxury' ? classes.selected : ''
                    }`}
                >
                    Luxury
                </button>
                <button
                    onClick={() => handleFilterChange('type', 'rugged')}
                    className={`${classes['van-type']} ${classes['rugged']} ${
                        typeFilter === 'rugged' ? classes.selected : ''
                    }`}
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
            <div className={classes['van-list']}>
                {vans && typeFilter
                    ? vans
                          .filter((van) => van.type === typeFilter)
                          .map((van) => (
                              <Van
                                  id={van.id}
                                  imageUrl={van.imageUrl}
                                  name={van.name}
                                  price={van.price}
                                  type={van.type}
                                  searchParams={searchParams.toString()}
                                  typeFilter={typeFilter}
                              />
                          ))
                    : vans &&
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
