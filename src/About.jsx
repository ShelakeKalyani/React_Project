// import Head_title from './Head_title.jsx';

import { Link } from "react-router-dom";

function About()
{
    return(
        <>
            <div className="container-fluid mb-5">
                <div className="row p-5">
                    <div className="col-md-7 p-4 mb-5">
                        <h4 className="font-weight-bold" style={{color:'#06A3DA'}} data-aos="zoom-in">ABOUT US</h4>
                        <h1 className="display-4 font-weight-bold" data-aos="zoom-in">The World's Best Health Clinic That You Can Trust</h1>
                        <h3 className="font-weight-bold text-secondary" data-aos="zoom-in" style={{fontStyle:'italic'}}>Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo justo magna dolore</h3>
                        <p className="text-secondary" data-aos="zoom-in">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>

                        <div className="row">
                            <div className="col-md-6">
                                <img src='images/check.png' style={{height:'20px',width:'20px'}}  data-aos="zoom-out"/> <b  data-aos="zoom-out">Award Winning</b>
                            </div>
                            <div className="col-md-6">
                                <img src='images/check.png' style={{height:'20px',width:'20px'}}  data-aos="zoom-out"/> <b  data-aos="zoom-out">24/7 Opened</b>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <img src='images/check.png' style={{height:'20px',width:'20px'}}  data-aos="zoom-out"/> <b  data-aos="zoom-out">Professional Staff</b>
                            </div>
                            <div className="col-md-6">
                                <img src='images/check.png' style={{height:'20px',width:'20px'}}  data-aos="zoom-out"/> <b  data-aos="zoom-out">Fair Prices</b>
                            </div>
                        </div>

                        <Link to="/register"><button className="btn btn-primary mt-5 p-2 btn-lg appointment_btn" data-aos="zoom-out">Make Appointment</button></Link>
                    </div>

                    <div className="col-md-5 mb-5">
                        <img src="images/about.jpg" className="w-100 h-75" data-aos="flip-left"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;