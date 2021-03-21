// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import { useForm } from "react-hook-form";
// import { useHistory, useLocation } from 'react-router-dom';
// import date from 'date-and-time'
// import './AppointmentFrom.css';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'


// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)'
//     }
// };

// Modal.setAppElement('#root')

// const now = new Date();
// const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn,visitingHour, time, startTime, date }) => {
//     // const [value, onChange] = useState('10:00');
//     const [value, setValue] = useState()
//     const { register, handleSubmit, errors } = useForm();
//     // const history = useHistory();
//     //     const onSubmit = data =>{
//     //     data.service=appointmentOn;
//     //     data.date=date;
//     //     data.created= new Date();


//     //     fetch('http://localhost:5000/addAppointment',{
//     //       method:'POST',
//     //       headers:{'content-type':'application/json'},
//     //       body:JSON.stringify(data)
//     //     }) 
//     //     .then(res => res.json())
//     //         .then(success => {
//     //             if(success){
//     //                 alert('Appointment created successfully.');
//     //                 closeModal();

//     //                 // history.push('/dashboard/appointment')
//     //             }
//     //         })


//     // }

//     const onSubmit = data => {
//         data.status = 'Not Visited';
//         data.service = appointmentOn;
//         data.date = date.toDateString();
//         // data.visitingHour=visitingHour;
//         data.created = new Date()

//         fetch('http://localhost:5000/addAppointment', {
//             method: 'POST',
//             headers: { 'content-type': 'application/json' },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(success => {
//                 if (success) {
//                     alert(`
//                    Appointment Created Successfully.
//                 `)
//                     closeModal();
//                     // history.push('/dashboard/appointment')
//                 }
//             })

//     }

//     return (
//         <div>
//             <Modal
//                 isOpen={modalIsOpen}
//                 onRequestClose={closeModal}
//                 style={customStyles}
//                 contentLabel="Example Modal"
//             >
//                 <h2 className="text-center text-brand appointmentOn">{appointmentOn}</h2>
//                 <p className="text-secondary text-center dateOn"><small>ON {date.toDateString()}</small></p>
//                 <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
//                     <div className="form-group">
//                         <h6>Name <span style={{color:'red'}}>*</span></h6>
//                         <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
//                         {errors.name && <span className="text-danger">This field is required</span>}

//                     </div>
//                     <div className="form-group">
//                     <h6>Phone Number<span style={{color:'red'}}>*</span></h6>
//                     <PhoneInput
//       placeholder="Enter phone number"
//       value={value}
//       onChange={setValue}/>
//                         {errors.phone && <span className="text-danger">This field is required</span>}
//                     </div>
//                     <div className="form-group row ">
//                         <div className="col-md-4">
//                         <h6>Email <span style={{color:'red'}}>*</span></h6>
//                         <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
//                         {errors.email && <span className="text-danger">This field is required</span>}
//                         </div>
//                         <div className='col-md-4'>
//                         <h6>Doctors<span style={{color:'red'}}>*</span></h6>
//                           <select  className="form-control" ref={register({ required: true })} placeholder="Doctor"  >
//                                 <option  value="Not set">Select Doctor</option>
//                                 <option value="Male">Sourov Purkayastha</option>
//                                 <option value="Female">Dr Md Burhan Uddin Robbani</option>
//                                 <option value="Not set">Deeya</option>
//                                 <option value="Not set">kd</option>
//                                 <option value="Not set">Aliza</option>
//                             </select>
//                             {errors.doctor && <span className="text-danger">This field is required</span>}
//                         </div>
//                         <div className="col-md-4">
//                         {/* <input name="date"  placeholder="dd/MM/yyyy" ref={register({ required: true, pattern: /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96))/i })} />
                        
//                         {errors.date && <span className="error">Valid dd/MM/yyyy Format is required</span>} */}


// {/* 
//                         <input name="date"  type='text' defaultValue={date.toDateString()} className="form-control" placeholder="date" ref={register({ required: true})} />
                        
//                         {errors.date && <span className="error">Valid dd/MM/yyyy Format is required</span>} */}
//                           <h6>Date</h6>
//                         <span style={{color:'red'}}>{date.toDateString()}</span>
//                         </div>
//                         {/* <div className='col-md-4'>
//                             <span>{visitingHour}</span>
//                         </div> */}
//                     </div>
//                     <div className="form-group row">
//                         <div className="col-4">
//                            <h6>Gender<span style={{color:'red'}}>*</span></h6>
//                             <select className="form-control" name="gender" ref={register({ required: true })} >
//                                 <option disabled={true} value="Not set">Select Gender</option>
//                                 <option value="Male">Male</option>
//                                 <option value="Female">Female</option>
//                                 <option value="Not set">Other</option>
//                             </select>
//                             {errors.gender && <span className="text-danger">This field is required</span>}

//                         </div>
//                         <div className="col-4">
//                         <h6>Age<span style={{color:'red'}}>*</span></h6>
//                             <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
//                             {errors.age && <span className="text-danger">This field is required</span>}
//                         </div>
//                         <div className="col-4">
//                           <h6>Weight<span style={{color:'red'}}>*</span></h6>
//                             <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
//                             {errors.weight && <span className="text-danger">This field is required</span>}
//                         </div>
                        
                        
                       
//                     </div>
//                     <br />
//                     <div className="form-group text-right">
//                         <button type="submit" className="btn btn-brand" style={{ backgroundColor: '#1CD9B6 ', color: 'black' }}>Send</button>
//                     </div>
//                 </form>
//             </Modal>
//         </div>
//     );
// };

// export default AppointmentForm;

import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router-dom';
import date from 'date-and-time'
import './AppointmentFrom.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const now = new Date();
const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn,visitingHour, time, startTime, date }) => {
    // const [value, onChange] = useState('10:00');
    const [value, setValue] = useState()
    const { register, handleSubmit, errors } = useForm();
    // const history = useHistory();
    //     const onSubmit = data =>{
    //     data.service=appointmentOn;
    //     data.date=date;
    //     data.created= new Date();


    //     fetch('http://localhost:5000/addAppointment',{
    //       method:'POST',
    //       headers:{'content-type':'application/json'},
    //       body:JSON.stringify(data)
    //     }) 
    //     .then(res => res.json())
    //         .then(success => {
    //             if(success){
    //                 alert('Appointment created successfully.');
    //                 closeModal();

    //                 // history.push('/dashboard/appointment')
    //             }
    //         })


    // }
   console.log(value)
   const handleChange=e=>{
       console.log(e.target.value)
   }
    const onSubmit = data => {
        data.status = 'Not Visited';
        data.service = appointmentOn;
        data.date = date.toDateString();
        // data.visitingHour=visitingHour;
        data.created = new Date()
        data.phone=value
      
        fetch('https://immense-mountain-96969.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert(`
                   Appointment Created Successfully.
                `)
                    closeModal();
                    
                }
            })
        console.log(data)

    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand appointmentOn">{appointmentOn}</h2>
                <p className="text-secondary text-center dateOn"><small>ON {date.toDateString()}</small></p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="form-group">
                        <h6>Name <span style={{color:'red'}}>*</span></h6>
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                    <h6>Phone Number<span style={{color:'red'}}>*</span></h6>
                    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>

                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row ">
                        <div className="col-md-4">
                        <h6>Email <span style={{color:'red'}}>*</span></h6>
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-md-4">
                           <h6>Doctor<span style={{color:'red'}}>*</span></h6>
                            <select className="form-control" name="doctor" ref={register({ required: true })} >
                                <option  value="Not set">Select Doctor</option>
                                <option value="Sourov Purkayastha">Sourov Purkayastha</option>
                                <option value="Dr Md Burhan Uddin Robbani">Dr Md Burhan Uddin Robbani</option>
                                <option value="Deeya">Deeya</option>
                                <option value="sourov">kd</option>
                                <option value="Aliza">Aliza</option>
                                {/* <option value="sourov">Dr Md Burhan Uddin Robbani</option> */}
                                {/* <option value="Not set">Other</option> */}
                            </select>
                            {errors.doctor && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-md-4">
                        {/* <input name="date"  placeholder="dd/MM/yyyy" ref={register({ required: true, pattern: /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96))/i })} />
                        
                        {errors.date && <span className="error">Valid dd/MM/yyyy Format is required</span>} */}


{/* 
                        <input name="date"  type='text' defaultValue={date.toDateString()} className="form-control" placeholder="date" ref={register({ required: true})} />
                        
                        {errors.date && <span className="error">Valid dd/MM/yyyy Format is required</span>} */}
                          <h6>Date</h6>
                        <span style={{color:'red'}}>{date.toDateString()}</span>
                        </div>
                        {/* <div className='col-md-4'>
                            <span>{visitingHour}</span>
                        </div> */}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">
                           <h6>Gender<span style={{color:'red'}}>*</span></h6>
                            <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                        <h6>Age<span style={{color:'red'}}>*</span></h6>
                            <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                          <h6>Weight<span style={{color:'red'}}>*</span></h6>
                            <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                        
                        
                       
                    </div>
                    <br />
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand" style={{ backgroundColor: '#1CD9B6 ', color: 'black' }}>Send</button>

                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;

