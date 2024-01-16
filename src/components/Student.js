import React from 'react'

function student() 
{
  return (
    <>
    
<form>
<div className='' style={{ backgroundColor: "#d9d5ed", border: "10px solid #5bbad5" }}></div>
<form>
                    <div className=" container row ms-3">

                    
                            <h4 className="info py-4" >MEDICAL CLAIM FORM (STUDENT) </h4>

                            <h5 className='text-center'>
                                Application for claiming reimbursement of medical expenses incurred in connection with medical
                                attendance/treatment for students of IIT Bhilai.
                            </h5>



                        <div className="col col-xs-12 m-3">
                            <label className="mb-1" htmlFor="claimantName">*Claimant's Name:</label>
                            <div className='row inpbox'>
                                <div className='col'>
                                    <input className='form-control me-1 mb-2' type="text" id="claimantName" name="claimantName" placeholder='First Name' />
                                </div>
                                <div className='col'>
                                    <input className='form-control mb-2' type="text" id="claimantName" name="claimantName" placeholder='Last Name' />
                                </div>
                            </div>
                            <label className="mb-1" htmlFor="designation">*ID:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="designation" name="designation" />

                            <label className="mb-1" htmlFor="department">*Name of reference AMA:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="department" name="department" />

                            <label className="mb-1" htmlFor="emailId">Name of the ilness or diagnosis:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="emailId" name="emailId" placeholder='name@example.com' />

                            <br></br>
                            <br></br>

                           
                        </div>

                        <div className="col col-xs-12 m-3">

                            <label className="mb-1" htmlFor="employeeCode">*Age:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="employeeCode" name="employeeCode" />

                            <label className="mb-1" htmlFor="telNo">*Course/Program:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="telNo" name="telNo" placeholder='00000 00000' />

                            <label className="mb-1" htmlFor="emailId">*Contact No.:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="emailId" name="emailId" placeholder='name@example.com' />

                            <label className="mb-1" htmlFor="claimantName">Treatment start and end</label>
                            <div className='row inpbox'>
                                <div className='col'>
                                    <input className='form-control me-1 mb-2' type="date" id="claimantName" name="claimantName" placeholder='From' style={{ width: '100px' }}/>
                                </div>
                                <div className='col'>
                                    <input className='form-control mb-2' type="date" id="claimantName" name="claimantName" placeholder='To' style={{ width: '100px' }}/>
                                </div>
                            </div>


                           
                        </div>

                        
                    </div>
                </form>





  

  <h4 className="space mt-5">Details of treatment</h4>


  

  
<div class="container mt-4">
  <div class="row mb-4">
    {/* <!-- Left Section --> */}
    <div class="col-md-6 custom-side-margin-left">
      <div class="row mb-4">
        <div class="col-sm-4">Particulars</div>
        <div class="col-sm-4">Total Claim submitted in Rs.</div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4">Text</div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4">Text</div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4">Text</div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4">Text</div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4">Text</div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4">Text</div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4">Text</div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

    {/* Left section ends */}
    </div>


    {/* <!-- Right Section --> */}
    <div class="col-md-6 custom-side-margin-right">
      <div class="row mb-4">
        <div class="col-sm-4">Name of the medicine or Invoice No.</div>
        <div class="col-sm-4">Total Claim submitted in Rs.</div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        {/* <button type="Submit" class="btn btn-secondary">Add more</button> */}
        <button type="button" class="button_length" onclick="addRecord()">Add more</button>

      </div>
    {/* Right section ends */}
    </div> 

  </div>
</div>

{/* <button type="submit">Upload</button> */}

{/* <h1>Attachments</h1> */}

<h4 className="space mt-5">
                    Attachments(Self Attested)
                </h4>
                <form action="/upload" method="post" enctype="multipart/form-data">
                    <div className="row ms-3 mb-4">
                        <div className="col m-3">
                            <label className="mb-2" htmlFor="file">*IIT Bhiai Health Center Referral</label>
                            <input className='form-control mb-2 inpbox' type="file" id="file" name="file" accept=".jpg, .jpeg, .png" required />

                            <label className="mb-2" htmlFor="file">*Original Bill Receipts</label>
                            <input className='form-control mb-2 inpbox' type="file" id="file" name="file" accept=".jpg, .jpeg, .png" required />
                        </div>

                        <div className="col m-3">
                            <label className="mb-2" htmlFor="file">Copy of ID card</label>
                            <input className='form-control mb-2 inpbox' type="file" id="file" name="file" accept=".jpg, .jpeg, .png" required />

                            <label className="mb-2" htmlFor="file">*Copy of Prescription</label>
                            <input className='form-control mb-2 inpbox' type="file" id="file" name="file" accept=".jpg, .jpeg, .png" required />
                        </div>
                    </div>
                </form>

                
<h4 className="space mt-5">Bank Details</h4>

  
<div class="container mt-4">
  <div class="row mb-4">
    {/* <!-- Left Section --> */}
    <div class="col-md-6 custom-side-margin-left">
      

      <div class="row mb-4">
        <div class="col-sm-4">Name and Account No.</div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4">Bank</div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4">Date</div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      

    {/* Left section ends */}
    </div>


    {/* <!-- Right Section --> */}
    <div class="col-md-6 custom-side-margin-right">
      

      <div class="row mb-4">
        <div class="col-sm-4">IFSC Code</div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        < div class="col-sm-4">Branch</div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

      <div class="row mb-4">
        <div class="col-sm-4">Place</div>
        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Input"/></div>
      </div>

    {/* Right section ends */}
    </div> 

    <div className="row">
                            <div className="col m-3">
                                <label htmlFor="dateInput">Date</label>
                                <input className='form-control inpbox' type="date" id="dateInput" />
                            </div>
                            <div className="col m-3">
                                <label htmlFor="signatureFile">Signature of the Claimant</label>
                                <input className='form-control inpbox' type="file" id="signatureFile" name="signatureFile" accept="image/*" required />

                            </div>
                            <div className='text-center'>
                            <a href="/Thankyou" type="button" class="btn btn-primary btn-lg m-3">Submit</a>
                            </div>
                        </div>

  </div>
</div>










  {/* <button type="submit" class="btn btn-primary">Submit</button> */}
</form>
    </>
  )
}

export default student