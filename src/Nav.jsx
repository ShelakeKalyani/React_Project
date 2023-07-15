import React from 'react';
import {Link, NavLink, parsePath} from 'react-router-dom';


function Nav(){
    // const storedUserId = sessionStorage.getItem('user_id');
    const isSessionIdSet = sessionStorage.getItem('user_id') !== null;
    console.log("Hii");

    
    return(
        <>
        
<header>
<div className='container-fluid'>
<div className='row' style={{backgroundColor:'#EEF9FF'}}>
        <div className='col-md-7 pt-2 text-secondary  d-none d-md-inline'>
            <p><i className='fa fa-clock-o'></i> Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed</p>
        </div>

        <div className='col-md-3 pt-2 text-white info d-none d-md-inline' style={{backgroundColor:'#06A3DA'}}>
            <p className='pl-4'><i className='fa fa-envelope'></i> info@example.com</p>
        </div>

        <div className='col-md-2 pt-2 text-white text-left d-none d-md-inline' style={{backgroundColor:'#06A3DA'}}>
            <p className='pl-4'><i className='fa fa-phone'></i> +12 345 6789</p>
        </div>
        
    </div>
</div>

<div className='container-fluid'>
    <div className='row navPos'>

        <div className='col-md-12'>
        <nav className="navbar navbar-expand-lg navbar-light">
            
             <h1 className='font-weight-bold text-dark'><img src="images/logo.jpg" style={{height:'100px',width:'100px'}}/>NewLife<span className='text-primary'>.</span></h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className='col-md-1'> </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto" style={{fontSize:'20px'}}>
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/gallary">Gallary</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                

                {
                    isSessionIdSet ? 
                    <li className="nav-item">
                        <Link className="nav-link" to="/your_appointments">Your Appointments</Link>
                    </li>
                    : <li></li>
                }

                {
                    isSessionIdSet ? 
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                    : <li></li>
                }

                {
                    isSessionIdSet ? 
                        <li></li>
                    : <li className="nav-item">
                    <Link className="btn btn-warning nav-link text-dark font-weight bold" to="/register">Get Appointment</Link>
                </li>
                }
                    
                </ul>
            </div>
         </nav>
        </div>
    </div>
</div>
</header>
        </>
    )
    
}

export default Nav;