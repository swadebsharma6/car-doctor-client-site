import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const {_id, title, img, price} = service;

    return (
        <div className="card w-full bg-base-100 shadow-xl m-4">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <p className='text-xl text-orange-400'> Price: ${price}</p>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}> 
            <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object,
    
}