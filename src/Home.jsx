import React, { useEffect, useState } from "react";
import About from './About.jsx';
import Services from './Services.jsx';
import Gallary from "./Gallary.jsx";
import Blog from './Blog.jsx';
import Contact from "./Contact.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Home()
{

    const [doctor_service,setDoctorService] = useState('');
    let[result,setResult] = useState([]);
    let[ans,setAns] = useState([]);

    const changeService = (event)=>{
    setDoctorService(event.target.value);
    // console.log(this.state.doctor_service);
  }
  
  const formSubmit = async(event)=>{
    event.preventDefault();
    const res = await axios.post("http://localhost/hospital_api/hospital/search_doctor",{
      doctor_service : doctor_service
    });

    
    // console.log(ans.length);
    // console.log(res['data']['data']);
    setAns(res['data']['data']);
    alert("Doctors list will be shown in below..");
    
  }

  useEffect(()=>{
    getSliderData();
  },[])

  const  getSliderData = async()=>{
    var res = await axios.get('http://localhost/hospital_api/hospital/send_slider');
    setResult(res['data']['data']);
  }

    return(
        <>


<div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img className="w-100" src="images/slider1.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: '900px'}}>
                            <h5 className="text-white text-uppercase mb-3 zoom-in-effect">Keep Your Teeth Healthy</h5>
                            <h1 className="display-4 text-white mb-md-4 zoom-in-effect font-weight-bold">Take The Best Quality Health Treatment</h1>
                            
                            <Link to="/register" className="btn btn-primary py-md-3 px-md-5 me-3 caro_btn font-weight-bold">Appointment</Link>
                            <Link to="/contact" className="btn btn-warning py-md-3 px-md-5 caro_btn2 font-weight-bold">Contact Us</Link>
                        </div>
                    </div>
                </div>

                
                  {/* ********Dynamic deleted part****** */}
                {/* <div className="carousel-item">
                    <img className="w-100" src="images/slider2.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: '900px;'}}>
                            <h5 className="text-white text-uppercase mb-3 zoom-in-effect">Keep Your Teeth Healthy</h5>
                            <h1 className="display-4 text-white mb-md-4 zoom-in-effect font-weight-bold">Take The Best Quality Health Treatment</h1>
                            <a href="appointment.html" className="btn btn-primary py-md-3 px-md-5 me-3 caro_btn font-weight-bold">Appointment</a>
                            <a href="" className="btn btn-warning py-md-3 px-md-5 caro_btn2 font-weight-bold ">Contact Us</a>
                        </div>
                    </div>
                </div> */}      

                
                   {result.map((obj, index) => (
                        
                    <>
                        <div className="carousel-item obj==0 ? 'active' : ''">
                        {/* <img className="w-100" src={`C:/xampp/htdocs/hospital_api/uploads/${obj.slider_img}`} alt="Image"/> */}
                          <img className="w-100" src="images/slider2.jpg" alt="Image"/>
                          <div className="carousel-caption d-flex align-items-center justify-content-center">
                              <div className="p-3" style={{maxWidth: '900px;'}}>
                                  <h5 className="text-white text-uppercase mb-3 zoom-in-effect">{obj.slider_subtitle}</h5>
                                  <h1 className="display-4 text-white mb-md-4 zoom-in-effect font-weight-bold">{obj.slider_title}</h1>
                                  <a href="appointment.html" className="btn btn-primary py-md-3 px-md-5 me-3 caro_btn font-weight-bold">Appointment</a>
                                  <a href="" className="btn btn-warning py-md-3 px-md-5 caro_btn2 font-weight-bold ">Contact Us</a>
                              </div>
                          </div>
                      </div>
                    </>
                
                ))}
                


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>


        <section className="container pb-5">
          <div className="row pb-5" style={{marginTop:'-10px',position:'relative', zIndex:'20'}}>
          <div className="col-md-4">
            <div className="card bg-primary text-white justify-content-center zoom-in-effect"   data-aos="flip-right">
            <div className="card-body pt-5 justify-content-center" style={{lineHeight:'40px'}}>
              <h3 className="card-title">Opening Hours</h3>

                  <ul style={{listStyle:'none'}}>
                    <li>Mon - Fri <span className="open_time pr-4">8:00am - 9:00pm</span></li>
                    <li>Saturday <span className="open_time pr-4">8:00am - 7:00pm</span></li>
                    <li>Sunday <span className="open_time pr-4">8:00am - 5:00pm</span></li>
                  </ul>

                  <div class="d-grid">
                    <Link to="/register"><button className="btn btn-light btn-lg w-100">Appointment</button></Link>
                  </div>          
            </div>
          </div>
          </div>


          <div className="col-md-4">
            <div className="card bg-dark text-white justify-content-center zoom-in-effect" data-aos="flip-right">
            <div className="card-body pt-5 justify-content-center" style={{lineHeight:'40px'}}>
              <h3 className="card-title">Search A Doctor</h3><p></p>

                  <form onSubmit={formSubmit} method="post">
                    <input type='date' className="w-100 mt-1"/>
                    <select className="mt-4 w-100" name="doctor_service" value={doctor_service} onChange={changeService}>
                       <option>select</option>
                       <option>Cardiology</option>
                       <option>Neurology</option>
                       <option>Oncology</option>
                       <option>Neonatology</option>
                       <option>Other</option>
                    </select>

                    <button className="btn btn-light btn-lg mt-4 w-100">Search Doctor</button>

                  </form>

                  {/* <div class="d-grid">
                    <button className="btn btn-light btn-lg mt-4">Search Doctor</button>
                  </div>           */}
            </div>
          </div>
          </div>


          <div className="col-md-4">
            <div className="card text-white justify-content-center zoom-in-effect" data-aos="flip-right" style={{backgroundColor:'#F57E57'}}>
            <div className="card-body pt-4 justify-content-center p-4" style={{lineHeight:'25px'}}>
              <h2 className="card-title">Make Appointment</h2><p></p>

                  <p>Ipsum erat ipsum dolor clita rebum no rebum dolores labore, ipsum magna at eos et eos amet Ipsum erat ipsum dolor clita magna at eos et eos amet.</p>

                  <h2>+012 345 6789</h2>
          
            </div>
          </div>
          </div>
          </div>
        </section>

        {
          ans.length===0 ? null :
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center text-warning font-weight-bold mb-4" style={{fontStyle:'italic'}}>{doctor_service} doctor list</h2>
              <table className="table table-striped mb-5">
                    <tr>
                        <th>Doctor Name</th>
                        <th>Doctor Service</th>
                        <th>Doctor Time</th>
                        <th>Doctor Education</th>
                    </tr>
                  
            {
              
              ans.map((key,value)=>{
                return(
                  <>
                    <tr>
                      <td>{key.doctor_name}</td>
                      <td>{key.doctor_service}</td>
                      <td>{key.doctor_time}</td>
                      <td>{key.doctor_education}</td>
                    </tr>
                    
                  </>
                )
              })
            }
            </table>
              </div>
            </div>
          </div>
        }

        <About></About>
        <Services></Services>
        <Gallary></Gallary>
        <Blog></Blog>
        <Contact></Contact>

        

        
        </>
    )
}

export default Home;