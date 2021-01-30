import React from 'react';
import FeatureServices from '../FeatureServices/FeatureServices';
import Header from '../Header/Header';
import Testimonials from '../Testimonials/Testimonials';
import MakesAppointment from '../MakesAppointmnet/MakesAppointment';
import Services from '../Services/Services';
import Blog from '../Blog/Blog';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';




const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureServices></FeatureServices>
            <MakesAppointment></MakesAppointment>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
          
        </div>
    );
};

export default Home;