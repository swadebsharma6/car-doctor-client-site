import PropTypes from 'prop-types';

const ServiceCard = ({service}) => {

    const {title, img, price} = service;

    return (
        <div className="card w-full bg-base-100 shadow-xl m-4">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <p className='text-xl text-orange-400'> Price: ${price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object,
    
}