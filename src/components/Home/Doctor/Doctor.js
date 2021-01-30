import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({ doctor }) => {

    return (
        <div className="col-md-4 text-center">
            {
                 
                    <img style={{ height: '200px' }} className="img-fluid mb-3" src={doctor.img} alt="" />}
            <h4>{doctor.name}</h4>
            <p>  +880-188-934789</p>
        </div>
    );
};

export default Doctor;