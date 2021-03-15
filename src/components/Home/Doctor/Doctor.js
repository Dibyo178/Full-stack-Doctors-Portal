import React from 'react';
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({ doctor }) => {

    return (
        <div className="col-md-4 text-center">
            {
                 
                    // <img style={{ height: '200px' }} className="img-fluid mb-3" src={`http://localhost:5000/${doctor.img}`} alt="" />
                    doctor.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${doctor.image.img}`}/>
                    :
                    <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${doctor.img}`} alt=""/>
        }
            <h4 style={{color:'brown'}}>{doctor.name}</h4>
           <strong> <p> {doctor.Qualification}</p></strong>
            <p> {doctor.email}</p>
            <p> {doctor.phone}</p>
            <Link to='/appointment'><button className="btn btn-primary" >GET APPOINTMENT</button></Link>

        </div>
    );
};

export default Doctor;