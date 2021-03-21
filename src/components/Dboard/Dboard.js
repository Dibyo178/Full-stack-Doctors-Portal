import React,{ useState, useEffect, useContext } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import AllAppTable from '../AllAppTable/AllAppTable';
import CounterCard from '../CounterCard/CounterCard';
import { Link } from 'react-router-dom';
import './Dboard.css';
import Button from '@material-ui/core/Button'
import { UserContext } from '../../App';


const DashBoard = () => {
    
    const [allAppointments, setAllAppointments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetch('https://immense-mountain-96969.herokuapp.com/allAppointments')
        .then(res => res.json())
        .then(data => {
            setIsLoading(false)
            setAllAppointments(data)
        })
    },[])

    const getTotalApp = () => {
        const data = {
            count: allAppointments.length,
            text: 'Total Appointments',
            backgroundColor: '#5cb85c'
        }
        return data
    }
  

    const getTodayApp = () => {
       
        const newArray = allAppointments.filter(app => {
            
            return app.date === new Date().toDateString();

            
    })
    console.log(newArray)
     

        const data = {
            count: newArray.length,
            text: "Today's Appointments",
            // backgroundColor: '#0275d8'
            backgroundColor:  '#17A589'
          
        }
        
        return data
        
    }

    const getPendingToday = () => {
        
        const newArray = allAppointments.filter(app => {
            return app.status === 'Not Visited'
        })
        const data = {
            count: newArray.length,
            text: "Pending Appointments",
            backgroundColor: '#d9534f'
        }
        return data
    }

    // const getPatient = () => {
    //     const patientArray = [];
    //     allAppointments.forEach(app => {
    //         if(patientArray.indexOf(app.email) === -1){
    //             patientArray.push(app.email)
    //         }
    //     })
    //     const data = {
    //         count: patientArray.length,
    //         text: "Patient Appointments",
    //         backgroundColor: '#17A589'
    //     }
    //     return data
    // }

    return (
        
        <div className='container'>
            <div className='d-flex'>
                
            <h4 className="text-info mt-3 mb-1">Dashboard</h4>
            <Link to='/dashboard/appointment' className='back ml-5'><Button variant="contained" color="primary">Back</Button></Link>
          
          </div>
            <div className="row ">
            
                <div className="col-md-3 d-flex justify-content-center">
                    <CounterCard data={getPendingToday()}></CounterCard>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <CounterCard data={getTodayApp()}></CounterCard>
                </div> 
                <div className="col-md-3 ml-5 d-flex justify-content-center">
                    <CounterCard data={getTotalApp()}></CounterCard>
                </div>
                {/* <div className="col-md-3 patient d-flex justify-content-center">
                    <CounterCard data={getPatient()}></CounterCard>
                </div> */}
            </div>
            
            {
                isLoading ? <CircularProgress className='mt-3' disableShrink>
                </CircularProgress>:<AllAppTable allAppointments={allAppointments}>
                </AllAppTable>
            }
           
        </div>
        
    );
};

export default DashBoard;