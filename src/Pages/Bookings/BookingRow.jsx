import PropTypes from 'prop-types';

const BookingRow = ({booking, handleDelete, handleBookingConfirm}) => {
    const {_id, img, service, price, date, status} = booking;


    // const handleDelete = id =>{
    //     const proceed = confirm('Are you sure you want to delete?');

    //     if(proceed){
    //         fetch(`http://localhost:5000/bookings/${id}`, {
    //            method: 'DELETE'
    //         })
    //         .then(res => res.json())
    //         .then(data =>{
    //             console.log(data);
    //             if(data.deletedCount > 0){
    //                 alert('Deleted Successfully')
    //             }
    //         })
    //     }
    // }

    return (
        <tr>
        <th>
        <button onClick={() =>handleDelete(_id)} className="btn btn-sm btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
        </th>
        <td>
            <div className="avatar">
              <div className="rounded-xl w-24 h-24">
               {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
        </td>
        <td>
          {service}
        </td>
        <td>{date}</td>
        <td>${price}</td>
        <th>
         { 
            status === 'confirm' ? <span className='font-bold text-primary'>Confirmed</span> :
            <button onClick={() =>handleBookingConfirm(_id)} className="btn btn-secondary btn-xs">Please Confirm</button>
        }
        </th>
      </tr>
    );
};

export default BookingRow;

BookingRow.propTypes = {
    booking: PropTypes.object,
    handleDelete: PropTypes.func,
    handleBookingConfirm: PropTypes.func
    
}