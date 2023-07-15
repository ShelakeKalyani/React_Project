import Head_title from './Head_title.jsx';

var blog_info = [
    {
        img : 'images/blog1.jpg',
        title : 'Dangerous Blood Sugar Levels : Understanding, Symptoms, and Management',
        date : 'June 26, 2023',
        writer : 'Dr.Aigars Silkaln',
        info : 'Blood sugar levels play a crucial role in maintaining this balance, and when they veer into dangerous territory, serious health complications can arise.'
    },
    {
        img : 'images/blog2.jpg',
        title : 'How Common Are Silent Heart Attacks?',
        date : 'May 20, 2023',
        writer : 'Dr.Julia Starlark',
        info : 'A silent heart attack is just as serious and life-threatening as the traditional kind, but it can come with no obvious symptoms making it challenging to diagnose.That’s why, it’s important for everyone.'
    },
    {
        img : 'images/blog3.jpg',
        title : 'Difference Between Type 1 and Type 2 Diabetes',
        date : 'June 17, 2023',
        writer : 'Dr.Swati Deshmukh',
        info : 'There are two main types of diabetes: type 1 and type 2.Each type has different causes, signs, and ways to manage it.In this article, we’ll talk about what causes each type.'
    },
]

function Blog()
{
    return(
        <>
            

            <div className="container pb-5">
                <div className="row">
                
                    {
                        blog_info.map((val)=>{
                            return(
                                <>
                                <div className="col-md-4 pb-5">
                        <div className="card" data-aos="zoom-in">
                        <div className="card-header p-0">
                            <img src={val.img} className="w-100" style={{height:'230px'}}/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{val.title}</h5>
                            <i className="fa-regular fa-clock"></i> <b>{val.date}</b>
                            <i className="fa-regular fa-user ml-4"></i> <b>{val.writer}</b><br/><br/>
                            <p>{val.info}</p>

                            <button className="btn btn-warning">Read More</button>
                        </div>
                    </div>
                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Blog;