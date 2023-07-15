import axios from 'axios';
import Head_title from './Head_title.jsx';
import React from 'react';

class Contact extends React.Component
{
    constructor(){
        super();
        this.state = {
            name : '',
            email : '',
            subject : '',
            msg : '',
        }
    }

    changeName = (event)=>{
        this.setState({
            name : event.target.value
        })
    }

    changeEmail = (event)=>{
        this.setState({
            email : event.target.value
        })
    }

    changeSubject = (event)=>{
        this.setState({
            subject : event.target.value
        })
    }

    changeMsg = (event)=>{
        this.setState({
            msg : event.target.value
        })
    }

    formSubmit = async(event)=>{
        event.preventDefault();
        await axios.post('http://localhost:3000/contacts',this.state);
        alert("Form submitted succesfully..");
        this.setState({
            name : '',
            email : '',
            subject : '',
            msg : ''
        })
    }


    render(){
    return(
        <>

            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-4 pb-5">
                        <div className="contact_box1" data-aos="fade-up" data-aos-duration="500">
                            <h4>CONTACT US</h4>
                            <h1 className="font-weight-bold">Feel Free To Contact Us</h1>
                            
                            <div className="row mt-2">
                                <div className="col-md-2 mt-2">
                                   <i class="fa fa-location-dot" style={{fontSize:'40px',color:'#06A3DA'}}></i>
                                </div>
                                <div className="col-md-10">
                                    <b style={{fontSize:'20px',marginLeft:'13px'}}> Our Office</b>
                                    <p className="ml-2">123 Street, New York, USA</p>
                                </div>

                                
                                <div className='col-md-2'>
                                    <i class="fa fa-envelope" style={{fontSize:'40px',color:'#06A3DA',marginTop:'0px'}}></i>
                                </div>
                                <div className="col-md-10">
                                 <b style={{fontSize:'20px',marginLeft:'13px'}}> Email Us</b>
                                 <p className="ml-2">info@example.com</p>
                                 </div>


                                <div className='col-md-2'>
                                   <i class="fa fa-phone" style={{fontSize:'40px',color:'#06A3DA',marginTop:'0px'}}></i>
                                </div>
                                <div className="col-md-10">
                                    <b style={{fontSize:'20px',marginLeft:'13px'}}> Call Us</b>
                                    <p className="ml-2">+012 345 6789</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact_box2" data-aos="fade-up" data-aos-duration="500">
                            <form onSubmit={this.formSubmit}>
                                <input type='text' placeholder="Your Name" name='name' className='form-control' value={this.state.name} onChange={this.changeName}/>
                                <input type='email' placeholder="Your Email" name='email' className='form-control' value={this.state.email} onChange={this.changeEmail}/>
                                <input type='text' placeholder="Subject" className='form-control' value={this.state.subject} onChange={this.changeSubject}/>
                                <textarea placeholder="Message" style={{height:'130px'}} value={this.state.msg} onChange={this.changeMsg}></textarea>

                                <button className="btn btn-primary mt-4 btn-lg w-100">Send Message</button>
                            </form>
                        </div>
                        
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="500">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120623.27269675887!2d74.63925833894984!3d19.13057464522078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb05d825c59b7%3A0x565d46ad314b5075!2sPatil%20Hospital-%20Multispeciality%20Hospital%2C%20Ahmednagar!5e0!3m2!1sen!2sin!4v1687860566808!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-100"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
    }
}

export default Contact;