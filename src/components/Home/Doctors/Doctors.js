import React , { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import doctor from '../../../images/doctor.png'

// const doctorInfo = [
//     {
        
//         name : 'Wilson Harry',
        
//         img : doctor
//     },
//     {
        
//         name : 'Ema Gomez',
       
//         img : doctor
//     },
//     {
        
//         name : 'Aliza Farari',
        
//         img : doctor
//     }
// ]

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data =>{
            setDoctors(data)
            // if(data){
            //     alert('Add doctor')
            // }
        }
       
      )

    }, [])
   
    return (
        <section className="doctors">
        <div className="container">
            <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
            <div className="row">
                {
                    // doctorInfo.map(doctor => <Doctor doctor={doctor}></Doctor>)
                    doctors.map(doctor =><Doctor key={doctor._id} doctor={doctor} />)
                }              
            </div>
        </div>
    </section>
    );
};

export default Doctors;