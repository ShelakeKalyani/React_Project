function Head_title(props)
{
    return(
        <>
            <div className="container-fluid">
            <div className="row mb-5">
                    <div className="col-md-12" style={{height:'200px'}}>
                        <img src="images/slider2.jpg" className="w-100 h-100"/>
                        <div className="carousel-caption">
                            <h1 className="display-2 font-weight-bold">{props.title}</h1>
                            <h4>Home <span>O</span> {props.title}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Head_title;