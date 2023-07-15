import axios from "axios";
import { useEffect, useState } from "react";

function Prescription()
{
    const[u_id,setUserId] = useState(sessionStorage.getItem('user_id'));
    const[app_id,setAppId] = useState(sessionStorage.getItem('appointment_id'));
    let[result,setResult] = useState([]);
    let[appdata,setaAppData] = useState([]);
    // console.log(app_id);

    useEffect(()=>{
        getPrescription();
},[])

    const getPrescription = async()=>{
        const res = await axios.post('http://localhost/hospital_api/hospital/display_prescription',{
            appointment_id : app_id
        });
        // console.log(res['data']['data']);
        setResult(res['data']['data']);


        const resData = await axios.post('http://localhost/hospital_api/hospital/send_appointment_detail',{
            appointment_id : app_id
        });
        console.log(resData['data']);
        // console.log(resData['data']['data'][0]['appoint_dept']);
        setaAppData(resData['data']['data']);
        // console.log(appdata['appoint_name']);
        // setAppName(appdata['appoint_name']);
        // console.log(appdata);
    }
    // console.log(appdata);
    return(
        <>
            {
                appdata.length===0 ? null :
                <div className="main_div">
                    <div className="text-center">
                        <h2>NewLife Healthcare & Research Pvt. Ltd.</h2>
                        <p>Viraj Estate, Yashwant Colony, Near Tarkpur, DSP Chowk, Ahmednagr-414002</p>
                        <p>Contact No. - 0241 2670786</p>
                        <hr/>
                    </div>
                    <div className="half">
                        <b>Name : </b>{appdata[0]['appoint_name']}<br/>
                        <b>Address : </b>{appdata[0]['appoint_address']}
                    </div>

                    <div className="half">
                        <b>Age : </b>{appdata[0]['appoint_age']} Yr<br/>
                        <b>Contact No. : </b>{appdata[0]['appoint_mobile']}
                    </div>
                    <hr/>

                    <div className="half2">
                        <b>Visit No. : </b>{appdata[0]['appointment_id']}<br/>
                        <b>Disease : </b>{appdata[0]['appoint_disease']} 
                    </div>

                    <div className="half2">
                        <b>Department : </b>{appdata[0]['appoint_dept']} <br/>
                        <b>Dr. Name : </b>{appdata[0]['doctor_name']} 
                    </div>

                    <div className="half2" style={{marginLeft:'140px'}}>
                        <b>Date : </b>{appdata[0]['appoint_date']} <br/>
                        <b>Time : </b>{appdata[0]['appoint_time']} 
                    </div>

                        {/* <h1 className="text-center text-warning font-weight-bold" style={{fontStyle:'italic'}}>You Appointments Detail</h1><br/> */}
                    <div className="text-center">
                    <table className="table">
                    <tr>
                        <th>Tab Name</th>
                        <th>Tab Quantity</th>
                    </tr>

            
                    
                    {result.map((obj, index) => (
                        
                        <>
                        
                        <tr>
                            <td>{obj.tab_name}</td>
                            <td>{obj.tab_qty}</td>
                            </tr>
                        </>
                    
                    ))}
                 
                </table>
                    </div>
               

                <h3 className="text-center">.....Thank You.....</h3>
                </div>
            }
        </>
    )
}

export default Prescription;