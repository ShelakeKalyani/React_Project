// import React from "react";
// import axios from "axios";

// class Register extends React.Component
// {
//     constructor()
//     {
//         super();
//         this.state = {
//             uname : '',
//             umobile : '',
//             uemail : '',
//             uaddress : '',
//             upassword : '',
//             log_uemail : '',
//             log_upassword : ''
//         }
//     }

//     changeName = (event)=>{
//         this.setState({
//             uname : event.target.value
//         })
//     }

//     changeMobile = (event)=>{
//         this.setState({
//             umobile : event.target.value
//         })
//     }

//     changeEmail = (event)=>{
//         this.setState({
//             uemail : event.target.value
//         })
//     }

//     changeAddress = (event)=>{
//         this.setState({
//             uaddress : event.target.value
//         })
//     }
    
//     changePassword = (event)=>{
//         this.setState({
//             upassword : event.target.value
//         })
//     }

//     changeLogEmail = (event)=>{
//         this.setState({
//             log_uemail : event.target.value
//         })
//     }

//     changeLogPassword = (event)=>{
//         this.setState({
//             log_upassword : event.target.value
//         })
//     }

//     formSubmit = async(event)=>{
//         event.preventDefault();
//         var res=await axios.post('http://localhost/hospital_api/hospital/register',this.state);
//         console.log(res);
//         alert("Thank You..! Your account created succesfully..");
//         this.setState({
//             uname : '',
//             umobile : '',
//             uemail : '',
//             uaddress : '',
//             upassword : ''
//         })
//     }

//     loginFormSubmit = async(event)=>{
//         event.preventDefault();
//         var res=await axios.post('http://localhost/hospital_api/hospital/register',this.state);
//         console.log(res);
//     }

//     render(){
//     return(
//         <>
//             <div className="container mb-5 mt-5">
//                 <div className="row mb-5">
//                     <div className="col-md-6 text-right">
//                         <button class="btn btn-danger" data-toggle="modal" data-target="#mo">Register Now</button>

//                         <div class="modal fade" id="mo">
//                             <div class="modal-dialog">
//                                 <div class="modal-content">
//                                     <div class="modal-header btn-danger">
//                                         <h1>Register Form</h1>
//                                     </div>
//                                     <div class="modal-body">

//                                     <form className="p-5" data-aos="flip-right" method="post" onSubmit={this.formSubmit}>
                                           
//                                             <div className="row">
//                                                 <label className="mt-2 ml-0"><b>Enter Name : </b></label>
//                                                 <input className=" w-100" type="text" name="uname" placeholder="Enter Name" value={this.state.uname} onChange={this.changeName}/>

                                            
//                                             <label className="mt-2 ml-0"><b>Enter Mobile :</b> </label>
//                                                 <input className=" w-100" type="number" value={this.state.umobile} name="umobile" placeholder="Enter Mobile" onChange={this.changeMobile}/>
                                           

                                            
//                                             <label className="mt-2 ml-0"><b>Enter Email : </b> </label>
//                                                 <input className=" w-100" type="email" value={this.state.uemail} name="uemail" placeholder="Enter Email" onChange={this.changeEmail}/>
                                            

                                            
//                                             <label className="mt-2 ml-0"><b>Enter Address : </b> </label>
//                                                 <input className=" w-100" type="text" value={this.state.uaddress} name="uaddress" placeholder="Enter Address" onChange={this.changeAddress}/>

//                                             <label className="mt-2 ml-0"><b>Enter Password : </b> </label>
//                                                 <input className=" w-100" type="password" value={this.state.upassword} name="upassword" placeholder="Enter Address" onChange={this.changePassword}/>
                                           

//                                             <div className="text-center">
//                                                 <button className="btn btn-primary mt-4 w-25">Submit</button>
//                                             </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                     <div class="modal-footer">
//                                         <button class="btn btn-info" data-dismiss="modal">Close</button>
//                                     </div>	
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-6 text-left">
//                         <button class="btn btn-primary" data-toggle="modal" data-target="#mo1">Login</button>

//                         <div class="modal fade" id="mo1">
//                             <div class="modal-dialog">
//                                 <div class="modal-content">
//                                     <div class="modal-header btn-info">
//                                         <h1>Login Form</h1>
//                                     </div>
//                                     <div class="modal-body">

//                                     <form className="p-5" data-aos="flip-right" method="post" onSubmit={this.loginFormSubmit}>
                                           
//                                             <div className="row">
                                               
//                                             <label className="mt-2 ml-0"><b>Enter Email : </b> </label>
//                                                 <input className=" w-100" type="email" value={this.state.log_uemail} name="log_uemail" placeholder="Enter Email" onChange={this.changeLogEmail}/>
                                            
//                                             <label className="mt-2 ml-0"><b>Enter Password : </b> </label>
//                                                 <input className=" w-100" type="password" value={this.state.log_upassword} name="log_upassword" placeholder="Enter Address" onChange={this.changeLogPassword}/>
                                           

//                                             <div className="text-center">
//                                                 <button className="btn btn-primary mt-4 w-25">Submit</button>
//                                             </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                     <div class="modal-footer">
//                                         <button class="btn btn-info" data-dismiss="modal">Close</button>
//                                     </div>	
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
//     }
// }

// export default Register;






















import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register()
{

    const [uname,setUname] = useState();
    const [umobile,setUmobile] = useState();
    const [uemail,setUemail] = useState();
    const [uaddress,setUaddress] = useState();
    const [upassword,setUpassword] = useState();
    const [log_umobile,setLogUmobile] = useState();
    const [log_upassword,setLogUpassword] = useState();

    const redi = useNavigate();
    

    const changeName = (event)=>{
        setUname(event.target.value);
    }

    const changeMobile = (event)=>{
        setUmobile(event.target.value);
    }

    const changeEmail = (event)=>{
        setUemail(event.target.value);
    }

    const changeAddress = (event)=>{
        setUaddress(event.target.value);
    }
    
    const changePassword = (event)=>{
        setUpassword(event.target.value);
    }

    const changeLogMobile = (event)=>{
        setLogUmobile(event.target.value);
    }

    const changeLogPassword = (event)=>{
        setLogUpassword(event.target.value);
    }



    const formSubmit = async(event)=>{
        event.preventDefault();
        var res=await axios.post('http://localhost/hospital_api/hospital/register',{
            uname : uname,
            umobile : umobile,
            uemail : uemail,
            uaddress : uaddress,
            upassword : upassword
        });
        console.log(res);
        alert("Thank You..Your account created succesfully");
        redi('/');
    }

    const formSubmit2 = async(event)=>{
        event.preventDefault();
        // console.log(log_umobile);
        // console.log(log_upassword);
        var res=await axios.post('http://localhost/hospital_api/hospital/login',{
            log_umobile : log_umobile,
            log_upassword : log_upassword
        });
        // console.log(res['data'].status);
        // console.log(res['data'].user_id);

        if(res['data'].status=='success')
        {   
            const id = res['data'].user_id;

            sessionStorage.setItem('user_id',id);
            // const storedUserId = sessionStorage.getItem('user_id');
            // console.log('Stored User ID:', storedUserId);
            redi('/appointment');
        }
        else
        {
            alert("Invalid Detail");
        }
    }
    

    // loginFormSubmit = async(event)=>{
    //     event.preventDefault();
    //     var res=await axios.post('http://localhost/hospital_api/hospital/register',this.state);
    //     console.log(res);
    // }

    return(
        <>
            <div className="container mb-5 mt-5">
                <div className="row mb-5">
                    <div className="col-md-6">
                        <h3>Don't have an account : 
                        <button className="btn btn-danger ml-3" data-toggle="modal" data-target="#mo">Register Now</button>
                        </h3>
                        <div class="modal fade" id="mo">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header btn-danger">
                                        <h1>Register Form</h1>
                                    </div>
                                    <div class="modal-body">

                                    <form className="p-5" data-aos="flip-right" method="post" onSubmit={formSubmit}>
                                           
                                            <div className="row">
                                                <label className="mt-2"><b>Enter Name : </b></label>
                                                <input className=" w-100" type="text" name="uname" placeholder="Enter Name" value={uname} onChange={changeName}/>

                                            
                                            <label className="mt-2"><b>Enter Mobile :</b> </label>
                                                <input className=" w-100" type="number" value={umobile} name="umobile" placeholder="Enter Mobile" onChange={changeMobile}/>
                                           

                                            
                                            <label className="mt-2"><b>Enter Email : </b> </label>
                                                <input className=" w-100" type="email" value={uemail} name="uemail" placeholder="Enter Email" onChange={changeEmail}/>
                                            

                                            
                                            <label className="mt-2"><b>Enter Address : </b> </label>
                                                <input className=" w-100" type="text" value={uaddress} name="uaddress" placeholder="Enter Address" onChange={changeAddress}/>

                                            <label className="mt-2"><b>Enter Password : </b> </label>
                                                <input className=" w-100" type="password" value={upassword} name="upassword" placeholder="Enter Address" onChange={changePassword}/>
                                           

                                            <div className="text-center">
                                                <button className="btn btn-primary mt-4 w-25">Submit</button>
                                            </div>
                                            </div>
                                    </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button className="btn btn-info" data-dismiss="modal">Close</button>
                                    </div>	
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-md-6">
                    <h3>Already have an account :
                        <button className="btn btn-primary ml-3" data-toggle="modal" data-target="#mo1">Login</button>
                        </h3>
                        <div class="modal fade" id="mo1">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header btn-info">
                                        <h1>Login Form</h1>
                                    </div>
                                    <div class="modal-body">
                                    <form className="p-5" data-aos="flip-right" method="post" onSubmit={formSubmit2}>
                                           
                                           <div className="row">
                                           <label className="mt-2"><b>Enter Mobile :</b> </label>
                                               <input className=" w-100" type="number" value={log_umobile} name="log_umobile" placeholder="Enter Mobile" onChange={changeLogMobile}/>
                                          

                                           <label className="mt-2"><b>Enter Password : </b> </label>
                                               <input className=" w-100" type="password" value={log_upassword} name="log_upassword" placeholder="Enter Address" onChange={changeLogPassword}/>
                                          

                                           <div className="text-center">
                                               <button className="btn btn-primary mt-4 w-25">Submit</button>
                                           </div>
                                           </div>
                                   </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-info" data-dismiss="modal">Close</button>
                                    </div>	
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register;