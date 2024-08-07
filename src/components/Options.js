import React from 'react'
import bg from './assets/iitbh.jpeg'
import logo from './assets/logo.png'

function Options() {
    return (
        <>
            <div className="align-items-center d-flex justify-content-center bgim" style={{ height: "100vh", backgroundImage: `URL('${bg}')`}}>
                <div className='card m-3' style={{backgroundColor:"#b7bcff91"}}>
                    <div className="card-body text-center p-4">

                         <img className="mb-4 optlogo"src={logo} alt='logo'/>
                        <h5 className="card-title">Choose which claim bill you want to file</h5>
                        <a href="/student" className="btn btn-primary m-3" style={{ width: "300px" }}>Student</a><br />
                        <a href="/formopd" className="btn btn-primary m-3" style={{ width: "300px" }}>Employee OPD</a><br />
                        <a href="/formipd" className="btn btn-primary m-3" style={{ width: "300px" }}>Employee IPD</a>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Options 