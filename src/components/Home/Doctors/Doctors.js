import React from 'react';
import Doctor from '../Doctor/Doctor';
import doctor from '../../../images/doctor.png'
const doctorInfo = [
    {
        
        name : 'Wilson Harry',
        
        img : doctor
    },
    {
        
        name : 'Ema Gomez',
       
        img : doctor
    },
    {
        
        name : 'Aliza Farari',
        
        img : doctor
    }
]

const Doctors = () => {
   
    return (
        <section className="doctors">
        <div className="container">
            <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
            <div className="row">
                {
                    doctorInfo.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }              
            </div>
        </div>
    </section>
    );
};

export default Doctors;