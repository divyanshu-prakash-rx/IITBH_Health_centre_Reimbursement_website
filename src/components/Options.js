import React from 'react'
import bg from './assets/iitbh.jpeg'
import logo from './assets/logo.png'

function Options() {
    return (
        <>
            <div className="align-items-center d-flex justify-content-center bgim" style={{ height: "100vh", backgroundImage: `URL('${bg}')` }}>
                <div className='card' style={{backgroundColor:"#b7bcff91"}}>
                    <div className="card-body text-center p-4">
                        <img className="mb-4"src={logo}/>
                        <h5 className="card-title">Choose which claim bill you want to file</h5>
                        <a href="/" className="btn btn-primary m-3" style={{ width: "300px" }}>Student</a><br />
                        <a href="/FormOPD" className="btn btn-primary m-3" style={{ width: "300px" }}>Staff OPD</a><br />
                        <a href="/FormIPD" className="btn btn-primary m-3" style={{ width: "300px" }}>Staff IPD</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Options 