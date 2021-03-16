import React, { useState } from 'react';
import Sidebar from '../DashboardPage/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handelBlur = (e) => {
        const newUserInfo = { ...info }
        newUserInfo[e.target.name] = e.target.value
        setInfo(newUserInfo)
    }

    const fileChangeHandeller = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }
    const submitHandeler = (e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
        formData.append('phone', info.phone)
        formData.append('Qualification', info.Qualification)
        
        fetch('https://immense-mountain-96969.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    e.target.reset();
                    alert("Doctor added Sucessfully")
                }
            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault()
    }
    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", minHeight: "100vh" }}>
                <h5 className="mb-4" style={{color:'#0fcfec'}}>Add A Doctor</h5>
                <form onSubmit={submitHandeler} >
                   
                    <div className="form-group">
                        <label ><h6>Name</h6></label>
                        <input onBlur={handelBlur} type="text" name="name" className="form-control" id="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label ><h6>Email address</h6></label>
                        <input onBlur={handelBlur} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label ><h6>Phone Number</h6></label>
                        <input onBlur={handelBlur} type="text" name="phone"  className="form-control"   placeholder="Phone number" />
                    </div>
                    <div className="form-group">
                        <label ><h6>Qualification</h6></label>
                        <input onBlur={handelBlur} type="text" name="Qualification" className="form-control"  placeholder="Enter qualification" />
                    </div>
                    <div className="form-group">
                        <label ><h6>Upload image</h6></label>
                        <input type="file" onChange={fileChangeHandeller} style={{ borderBottom: 'none' }} className="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;