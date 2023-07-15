import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Userapointments()
{
    const[u_id,setUserId] = useState(sessionStorage.getItem('user_id'));
    let[result,setResult] = useState([]);
    
    

    useEffect(()=>{
        getData();
    },[])

    const getData = async()=>{
        var res=await axios.post('http://localhost/hospital_api/hospital/send_appointment',{
            user_id : u_id
        });
        // console.log(res['data']);
        // result = res['data']['data'];
        // console.log(res['data']);
        setResult(res['data']['data']);
        // console.log(res['data']['data']);
    }

    // console.log({result});
    // console.log(typeof({result}));

   const sendId = (obj) =>{
        // console.log(obj);
        // console.log(obj['obj']['appointment_id']);
        const app_id = obj['obj']['appointment_id'];

        sessionStorage.setItem('appointment_id',app_id);

   }

    return(
        <>

            {
                <div className="container p-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-warning font-weight-bold" style={{fontStyle:'italic'}}>You Appointments Detail</h1><br/>
                    <table className="table table-striped mb-5">
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Disease</th>
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                        <th>Department</th>
                        <th>Activity</th>
                        <th>See Prescription</th>
                    </tr>

            
                    
                    {result.map((obj, index) => (
                        
                        <>
                        
                        <tr>
                            <td>{obj.appoint_name}</td>
                            <td>{obj.appoint_mobile}</td>
                            <td>{obj.appoint_disease}</td>
                            <td>{obj.appoint_date}</td>
                            <td>{obj.appoint_time}</td>
                            <td>{obj.appoint_dept}</td>
                            <td>{obj.status}</td>
                            <td>
                                <Link to="/see_prescription">
                                    <button className="btn btn-info" onClick={()=>sendId({obj})}><i className="fa fa-eye"></i></button>
                                </Link>
                            </td>
                            </tr>
                        </>
                    
                    ))}
                 
                </table>
                    </div>

                    <div className="col-md-12 text-center">
                    <Link to="/appointment"><button className="btn btn-warning font-weight-bold">Make New Appointment</button></Link>
                    </div>
                </div>
            </div>
            }
            
        </>
    )
}

export default Userapointments;