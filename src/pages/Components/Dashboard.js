import React from 'react';



export default function Dashboard() {
  return (
    <div className='row'>
        <div className='col-md-10 offset-md-1 col-sm-12 my-2'>
            {/*<h1>Image Uploader</h1>*/}
            <div className="card">
                <img className="card-img-top"  alt="" src="images/imageUploader.png"  />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/image-upload" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
        {/*<div className='col-md-2 offset-md-1 col-sm-12 my-2'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div className='col-md-2 col-sm-12 my-2'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>   
        <div className='col-md-2 col-sm-12 my-2'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>   
        <div className='col-md-2 col-sm-12 my-2'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>   
        <div className='col-md-2 col-sm-12 my-2'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>   */}
        <div className='col-md-10 offset-md-1 col-sm-12 my-5'>
            <h1>Event & Schedule Calendar</h1>
            <div className="card">
                <img className="card-img-top"  alt="" src="images/Calendar.png"  />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/calendar" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
        
        <div className='col-md-10 offset-md-1 col-sm-12 my-5'>
            <h1>Text Util App</h1>
            <div className="card">
                <img className="card-img-top"  alt="" src="images/TextUtils.png"  />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/image-upload" className="btn btn-primary">text-utils</a>
                </div>
            </div>
        </div>
        
    </div>
  )
}
