import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Appointment()
{
    const[appoint_name,setName] = useState();
    const[appoint_mobile,setMobile] = useState();
    const[appoint_address,setAddress] = useState();
    const[appoint_age,setAge] = useState();
    const[appoint_disease,setDisease] = useState();
    const[appoint_date,setDate] = useState();
    const[appoint_time,setTime] = useState();
    const[appoint_dept,setDept] = useState();
    const[u_id,setUserId] = useState(sessionStorage.getItem('user_id'));
    const[doctor_name,setDoctName] = useState();


    const[result,setResult] = useState([]);
    const redi = useNavigate();

    useEffect(()=>{
        getDoctors();
    })

    const getDoctors = async()=>{
        let res = await axios.get('http://localhost/hospital_api/hospital/get_doctors');

        setResult(res['data']['data']);
    }

    const changeName = (event)=>{
        setName(event.target.value);
    }

    const changeMobile = (event)=>{
        setMobile(event.target.value);
    }

    const changeAddress = (event)=>{
        setAddress(event.target.value);
    }

    const changeAge = (event)=>{
        setAge(event.target.value);
    }

    const changeDisease = (event)=>{
        setDisease(event.target.value);
    }

    const changeDate = (event)=>{
        setDate(event.target.value);
    }

    const changeTime = (event)=>{
        setTime(event.target.value);
    }

    const changeDept = (event)=>{
        setDept(event.target.value);
    }

    const changeDoct = (event)=>{
        setDoctName(event.target.value);
    }

    

    const formSubmit = async(event)=>{

        event.preventDefault();
       var res = await axios.post('http://localhost/hospital_api/hospital/appointment',{
            appoint_name : appoint_name,
            appoint_mobile : appoint_mobile,
            appoint_address : appoint_address,
            appoint_age : appoint_age,
            appoint_disease : appoint_disease,
            appoint_date : appoint_date,
            appoint_time : appoint_time,
            appoint_dept : appoint_dept,
            status : 'pending',
            user_id : u_id,
            doctor_name : doctor_name,
            prescription_status : 'Not Generated'
        });
        if(res['data'].status=='success')
        {
            alert("Thank You..! Form Submited succesfully..");
        }
        else
        {
            alert("Doctor and Department not matched..Please try again. Search doctors for more information.");
        }
        redi('/appointment');
    }
        return(
            <>
                <section>
          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-md-12" style={{height:'1080px'}}>
              <img src="images/slider2.jpg" className="w-100 h-100"/>
                  <div className="carousel-caption h-100">
                    <form className="p-5" data-aos="flip-right" method="post" onSubmit={formSubmit}>
                        <h1 className="text-center">Make Appointment</h1>
                        <div className="row">
                        <div className="col-md-6">
                            <label>Enter Name : </label><br/>
                            <input className="w-50  " type="text" name="appoint_name" placeholder="Enter Name" value={appoint_name} onChange={changeName}/>
                        </div>
                        <div className="col-md-6">
                        <label className="mr-3 mt-4">Enter Mobile : </label>
    <br/>               <input className="w-50" type="number" value={appoint_mobile} name="appoint_mobile" placeholder="Enter Mobile" onChange={changeMobile}/>
                        </div>

                        <div className="col-md-6">
                        <label className="mr-3 mt-4">Enter Address : </label>
    <br/>                        <input className="w-50" type="text" value={appoint_address} name="appoint_address" placeholder="Enter Address" onChange={changeAddress}/>
                        </div>

                        <div className="col-md-6">
                        <label className="mr-3 mt-4">Enter Age : </label>
    <br/>                        <input className="w-50" type="number" value={appoint_age} name="appoint_age" placeholder="Enter Age" onChange={changeAge}/>
                        </div>

                        <div className="col-md-6">
                        <label className="mr-3 mt-4">Enter Your Disease : </label>
    <br/>                        <input className="w-50" type="text" value={appoint_disease} name="appoint_disease" placeholder="Enter Disease" onChange={changeDisease}/>
                        </div>

                        <div className="col-md-6">
                            <label className="mr-3 mt-4">Appointment Date : </label>
    <br/>                        <input className="w-50" type="date" name="appoint_date" value={appoint_date} onChange={changeDate}/>
                        </div>
                        <div className="col-md-6">
                            <label className="mr-3 mt-4">Appointment Time : </label>
    <br/>                        <input className="w-50" type="text" name="appoint_time" placeholder="Enter Time" value={appoint_time} onChange={changeTime}/>
                        </div>
                        <div className="col-md-6">
                            <label className="mr-3 mt-4">Select Department : </label>
    <br/>                        <select className="w-50" name="appoint_dept" value={appoint_dept} onChange={changeDept}>
                                <option>select</option>
                                <option>Cardiology</option>
                                <option>Neurology</option>
                                <option>Oncology</option>
                                <option>Neonatology</option>
                                <option>Other</option>
                            </select>
                            
                        </div>

                        <div className="col-md-12">
                            <label className="mr-3 mt-4">Select Doctor : </label>
    <br/>                        <select className="w-50" name="doctor_name" value={doctor_name} onChange={changeDoct}>
                                <option>select</option>
                                {
                                    result.map((key,val)=>{
                                        return(
                                            <>
                                                <option>{key.doctor_name}</option>
                                            </>
                                        )
                                    })
                                }
                            </select>
                            
                        </div>

                        <div className="text-center">
                            <button className="btn btn-primary mt-4 w-25">Submit</button>
                        </div>
                        </div>
                    </form>
                  </div>
              </div>
            </div>
          </div>
        </section>
            </>
        )
}

export default Appointment;