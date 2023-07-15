import React from "react";
import Head_title from './Head_title.jsx';

var lab_img = [
    {
        img : "images/lab1.jpg"
    },
    {
        img : "images/lab2.jpg"
    },
    {
        img : "images/lab3.jpg"
    },
    {
        img : "images/lab4.jpg"
    },
    {
        img : "images/lab5.jpg"
    },
    {
        img : "images/lab6.jpg"
    }
]

var premise_img = [
    {
        img : "images/premise1.jpg"
    },
    {
        img : "images/premise2.jpg"
    },
    {
        img : "images/premise3.jpg"
    },
    {
        img : "images/premise4.jpg"
    },
    {
        img : "images/premise5.jpg"
    },
    {
        img : "images/premise6.jpg"
    },
    {
        img : "images/premise7.jpg"
    },
    {
        img : "images/premise8.jpg"
    }
]

var desk_img = [
    {
        img : "images/desk1.jpg"
    },
    {
        img : "images/desk2.jpg"
    },
    {
        img : "images/desk3.jpg"
    },
    {
        img : "images/desk4.jpg"
    }
]

var ward_img = [
    {
        img : "images/ward1.jpg"
    },
    {
        img : "images/ward2.jpg"
    },
    {
        img : "images/ward3.jpg"
    },
    {
        img : "images/ward4.jpg"
    },
    {
        img : "images/ward5.jpg"
    },
    {
        img : "images/ward6.jpg"
    },
    {
        img : "images/ward7.jpg"
    },
    {
        img : "images/ward8.jpg"
    }
]

class Gallary extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            lab:true,premises:false,desk:false,wards:false
        }
    }

    Lab(){
        this.setState({
            lab:!this.state.lab,premises:false,desk:false,wards:false
        })
    }

    Premises(){
        this.setState({
            lab:false,premises:!this.state.premises,desk:false,wards:false
        })
    }

    Desk(){
        this.setState({
            lab:false,premises:false,desk:!this.state.desk,wards:false
        })
    }

    Wards(){
        this.setState({
            lab:false,Premises:false,desk:false,wards:!this.state.wards
        })
    }

    render()
    {
        return(
            <>

        

            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-3 gallery_btn">
                        <button className="btn btn-warning ml-5" onClick={()=>this.Lab()}>LABORATORY</button>
                    </div>
                    <div className="col-md-3 gallery_btn">
                        <button className="btn btn-warning ml-5" onClick={()=>this.Premises()}>CORRIDORS & PREMISES</button>
                    </div>
                    <div className="col-md-3 gallery_btn">
                        <button className="btn btn-warning ml-5" onClick={()=>this.Desk()}>REGISTRATION & HELP DESK</button>
                    </div>
                    <div className="col-md-3 gallery_btn">
                        <button className="btn btn-warning ml-5" onClick={()=>this.Wards()}>WARDS</button>
                    </div>
                </div>

                <div className="row">
                    
                    {
                        this.state.lab ?
                        lab_img.map((val)=>{
                            return(
                                <>
                                <div className="col-md-4 mt-4">
                                    <img src={val.img} className="w-100 h-100" data-aos="flip-left"/>  
                                </div>
                                </>
                            )
                        }) : null
                    }

                    {
                        this.state.premises ?
                        premise_img.map((val)=>{
                            return(
                                <>
                                <div className="col-md-4 mt-4">
                                    <img src={val.img} className="w-100 h-100" data-aos="flip-left"/>  
                                </div>
                                </>
                            )
                        }) : null
                    }

                    {
                        this.state.desk ?
                        desk_img.map((val)=>{
                            return(
                                <>
                                <div className="col-md-4 mt-4">
                                    <img src={val.img} className="w-100 h-100" data-aos="flip-left"/>  
                                </div>
                                </>
                            )
                        }) : null
                    }

                    {
                        this.state.wards ?
                        ward_img.map((val)=>{
                            return(
                                <>
                                <div className="col-md-4 mt-4">
                                    <img src={val.img} className="w-100 h-100" data-aos="flip-left"/>  
                                </div>
                                </>
                            )
                        }) : null
                    }

                    </div>
                    
                </div>
            </>
        )
    }
    
}

export default Gallary;



