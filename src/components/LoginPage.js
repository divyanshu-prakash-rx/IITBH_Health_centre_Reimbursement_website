import React from "react";
import HealthSnake from "./assets/Healthsnake.png";
import logo from "./assets/logo2.jpeg";
function LoginPage() {
  return (
    <>
      <div className="text-center" style={{ padding: "3% 0 4% 0" }}>
        <img src={(logo)} alt="logo" style={{ height: "110px" }} />
        <h2 style={{ fontWeight: "bold", fontFamily: "Montserrat-light", marginTop: "10px" }}>Welcome to Reimbursement site</h2>
      </div>
      <div className="container align-items-center d-flex justify-content-center">
        <div className="card mb-5" style={{ width: "50rem" }}> <div className="row">
          <div className="col-md-6">
          </div>
          <div className="col-md-6 text-center mb-3">
            <h4 style={{ fontFamily: "serif", textDecoration: "underline" }}><strong>Login</strong> to continue</h4>
          </div>
          <div className="col-md-6">
            <img className="card-img-top" src={HealthSnake} alt="logincentre" />
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3"><i className="fa-solid fa-user"></i>
                <label htmlFor="exampleInputEmail1" className="form-label px-2"> <strong>LDAP ID</strong></label>

                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
              </div>
              <div className="mb-3">
                <i className="fa-solid fa-lock"></i>
                <label htmlFor="exampleInputPassword1" className="form-label px-2"> <strong>Password</strong></label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="text-center" >
                <img src="https://appointment.iitbhilai.ac.in/captcha.php?rand=323714312" alt="captcha" className="my-1 col-md-5" style={{ border: "1px solid black" }} />
                <input type="Captcha" className="form-control my-2" placeholder="Enter Validation code" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
              </div>
              <div className="text-center"> <button type="login" className="btn btn-primary">Login</button></div>

            </form>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
