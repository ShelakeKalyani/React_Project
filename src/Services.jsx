import Head_title from './Head_title.jsx';

function Services()
{
    return(
        <>
            <div className="container mt-3 pb-5">
            <div className="row pb-5">
                    <div className="col-md-5 mt-5">
                        <img src="https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80" className="w-100 h-100" data-aos="flip-left"/>
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-6 mt-3">
                        <h4 className="font-weight-bold" style={{color:'#06A3DA'}} data-aos="flip-left">OUR SERVICES</h4>
                        <h1 className="display-5 font-weight-bold" data-aos="flip-left">We Offer The Best Quality Servicest</h1>
                       <div className="row">
                            <div className="col-md-6 mt-3">
                                <div className="card" data-aos="zoom-in">
                                    <div className="card-body text-center p-0" style={{backgroundColor:'#EEF9FF'}}>
                                        <img src="images/eye_service.png" className="w-100" style={{height:'200px'}}/>
                                        <h4 className="mt-2 p-2">Eye CheckUp</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-3">
                                <div className="card" data-aos="zoom-in">
                                    <div className="card-body text-center p-0" style={{backgroundColor:'#EEF9FF'}}>
                                        <img src="https://brainspinemd.com/wp-content/uploads/2022/09/How-Long-Does-Brain-Surgery-Take.jpg" className="w-100" style={{height:'200px'}}/>
                                        <h4 className="mt-2 p-2">Head Surgery</h4>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>

                <div className="row">
                            <div className="col-md-3 mt-3">
                                <div className="card" data-aos="zoom-in">
                                    <div className="card-body text-center p-0" style={{backgroundColor:'#EEF9FF'}}>
                                        <img src="https://nearmetrade.com/local/public/vendor/Dentist%20patna6.jpg" className="w-100" style={{height:'200px'}}/>
                                        <h4 className="mt-2 p-2">Dental Surgery</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="card" data-aos="zoom-in">
                                    <div className="card-body text-center p-0" style={{backgroundColor:'#EEF9FF'}}>
                                        <img src="https://medical.rossu.edu/sites/g/files/krcnkv261/files/styles/atge_3_2_crop_md/public/2022-04/Pathology.jpg?h=7f9656af&itok=E3Pgs3uF" className="w-100" style={{height:'200px'}}/>
                                        <h4 className="mt-2 p-2">Pathology</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-5 pt-3">
                                <div className="appointment_box" data-aos="zoom-in">
                                    <h2>Make Appointment</h2>
                                    <p>Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                                    <h1>+012 345 6789</h1>
                                </div>
                            </div>
                       </div>
                </div>
        </>
    )
}

export default Services;