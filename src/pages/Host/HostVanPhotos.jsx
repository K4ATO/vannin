import classes from '../../index.module.css';
import { useOutletContext } from 'react-router-dom';
const HostVanPhotos = () => {
    const { currentVan } = useOutletContext();
    return (
        <img
            src={currentVan.imageUrl}
            className={classes['host-van-detail-image']}
        />
    );
};
export default HostVanPhotos;
