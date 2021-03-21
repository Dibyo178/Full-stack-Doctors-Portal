import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css'
import emailjs from 'emailjs-com';
import axios from "axios"

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        // emailjs.sendForm('service_s6eqqu5','template_sslhtjt', e.target,'user_NcfsUcqvjLQwhqVVRFPQn')
        emailjs.sendForm('service_h1srvkh','template_fvujve2', e.target,'user_P02SixVUKGNZa9h95Df4n')
       
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white  mb-5">
                    <h5 className="text-primary">Contact</h5>
                    <h1>Always  connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                
                    <form  onSubmit={sendEmail} >
                       <div className="form-group">
                           <input name='name'  type="text"  className="form-control" placeholder="Name *"/>
                          
                       </div>
                       <div className="form-group">
                           <input name='email' type="text"  className="form-control" placeholder="Email Address *"/>
                          
                       </div>
                       <div className="form-group">
                           <input name='subject' type="text"   className="form-control" placeholder="Subject *"/>
                          
                       </div>
                       <div className="form-group">
                           <textarea  name="message" type="text"   className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                         
                       </div>
                       <div className="form-group text-center">
                           {/* <button type="button" className="btn btn-primary"> Submit </button> */}
                           <input type='submit' className='btn btn-info' value='send message'></input>
                       </div>
                   </form>
                
                    {/* <form className="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form> */}
                </div>
            </div>
        </section>
    );
};

export default Contact;
