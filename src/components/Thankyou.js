import React from 'react'
import logo from './assets/logo2.jpeg'

function Thankyou() {
  return (
    <>
        <div className="align-items-center d-flex justify-content-center bgim" style={{ height: "100vh" }}>
            <div className='card' style={{ backgroundColor: "#b7bcff91" }}>
            <div className="card-body text-center p-4">
                <img className="mb-4" src={logo} style={{height:"150px"}} alt='logo'/>
                <h5 className="card-title">Your form has been submitted successfully</h5>
                <a href="/" className="btn btn-primary btn-sm m-3">Go to Home Page</a><br />
            </div>
            </div>
        </div>
    </>
  )
}

export default Thankyou