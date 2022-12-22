import React from 'react'

export default function Dashboard() {
  return (
    <div className='row'>
        <div className='col-md-4 col-sm-12 my-2'>
            <div className="card bg-info">
                <img className="card-img-top"  alt="" src="https://c7.alamy.com/zooms/9/bed36045e1ec4b76ad686a5e234a4bc1/2bfh9fh.jpg"  />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Show</a>
                </div>
            </div>
        </div>
        <div className='col-md-4 col-sm-12 my-2'>
            <div className="card bg-primary">
                <img className="card-img-top"  alt="" src="https://c7.alamy.com/zooms/9/bed36045e1ec4b76ad686a5e234a4bc1/2bfh9fh.jpg"  />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Show</a>
                </div>
            </div>
        </div>
        <div className='col-md-4 col-sm-12 my-2'>
            <div className="card bg-warning">
                <img className="card-img-top"  alt="" src="https://c7.alamy.com/zooms/9/bed36045e1ec4b76ad686a5e234a4bc1/2bfh9fh.jpg"  />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Show</a>
                </div>
            </div>
        </div>   
    </div>
  )
}
