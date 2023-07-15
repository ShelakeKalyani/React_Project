import React from "react"
import { Link } from "react-router-dom"

function Footer()
{
    return(
        <>
            <div className="container mb-4" style={{zIndex:'1',marginTop:'0px'}} data-aos="zoom-in">
                <div className="row">
                <div className="col-md-12 p-5 text-center" style={{backgroundColor:'#06A3DA',lineHeight:'45px'}}>
                    <input type="text" placeholder="Your Email" className="w-50"/>
                    <button style={{backgroundColor:'#081A35',color:'white'}} className="font-weight-bold pl-4 pr-4">Sign Up</button>
                </div>
                </div>
            </div>
            
            <div className="container-fluid" style={{marginTop:'-60px'}}>
            <div className="row text-white p-4 pt-5" data-aos="fade-up" style={{backgroundColor:'#091E3E'}}>
                    <div className="col-md-3 pt-4">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link to="/" className="foot1">Home</Link></li>
                            <li><Link to="/about" className="foot1">About</Link></li>
                            <li><Link to="/services" className="foot1">Services</Link></li>
                            <li><Link to="/gallary" className="foot1">Gallary</Link></li>
                            <li><Link to="/blog" className="foot1">Blog</Link></li>
                            <li><Link to="/contact" className="foot1">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-3 pt-4">
                        <h2>Popular Links</h2>
                        <ul>
                            <li><Link to="/" className="foot1">Home</Link></li>
                            <li><Link to="/about" className="foot1">About</Link></li>
                            <li><Link to="/services" className="foot1">Services</Link></li>
                            <li><Link to="/gallary" className="foot1">Gallary</Link></li>
                            <li><Link to="/blog" className="foot1">Blog</Link></li>
                            <li><Link to="/contact" className="foot1">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-3 pt-4">
                        <h2>Get In Touch</h2>
                        <ul style={{listStyleType:'none',lineHeight:'40px'}}>
                            <li><i className="fa fa-map-marker"></i> 123 Street, New York, USA</li>
                            <li><i className="fa fa-envelope"></i> info@example.com</li>
                            <li><i className="fa fa-phone"></i> +012 345 67890</li>
                        </ul>
                    </div>

                    <div className="col-md-3 pt-4">
                        <h2>Follow Us</h2>
                            <div className="icons float-left ml-2">
                                <i className="fa fa-twitter"></i>
                            </div>
                            <div className="icons float-left ml-2">
                                <i className="fa fa-facebook"></i>
                            </div>
                            <div className="icons float-left ml-2">
                                <i className="fa fa-linkedin"></i>
                            </div>
                            <div className="icons float-left ml-2">
                                <i className="fa fa-instagram"></i>
                            </div>
                    </div>


                </div>

                <div className="row">
                    <div className="col-md-12 bg-dark text-white text-center">
                        <p>© Shelake Kalyani. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;