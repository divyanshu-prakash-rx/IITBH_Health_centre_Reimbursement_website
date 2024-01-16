import React from 'react'

function Form1() {
    return (
        <>    <div className='' style={{ backgroundColor: "#d9d5ed", border: "10px solid #5bbad5" }}>
            <div className='container '>

                <h4 className="info py-4" >MEDICAL CLAIM FORM (INDOOR TREATMENT) </h4>

                <h5 className='text-center'>
                    Application for claiming reimbursement of medical expenses incurred in connection with medical
                    attendance/treatment for members of employees of the IIT Bhilai and their families.
                </h5>
                <p className="fw-bold">
                    I. Status Information of the Claimant
                </p>

                <form>
                    <div className=" container row ms-3">
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
                            <label className="mb-1" htmlFor="designation">*Designation:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="designation" name="designation" />

                            <label className="mb-1" htmlFor="department">*Department:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="department" name="department" />

                            <label className="mb-1" htmlFor="entitlement">*Entitlement of ward:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="entitlement" name="entitlement" />
                        </div>

                        <div className="col col-xs-12 m-3">

                            <label className="mb-1" htmlFor="employeeCode">*Employee Code:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="employeeCode" name="employeeCode" />

                            <label className="mb-1" htmlFor="telNo">*Tel. No.:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="telNo" name="telNo" placeholder='00000 00000' />

                            <label className="mb-1" htmlFor="emailId">*Email ID:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="emailId" name="emailId" placeholder='name@example.com' />

                            <label className="mb-1" htmlFor="payBand">*Pay in Pay Band & Grade Pay (Rs.):</label>
                            <input className='form-control mb-2 inpbox' type="text" id="payBand" name="payBand" />
                        </div>
                    </div>
                </form>
                <p className="fw-bold">
                    II. Information regarding the patient
                </p>
                <form>
                    <div className="row mb-3 ms-3">
                        <div className="col m-3">
                            <label className="mb-1" htmlFor="patientName">*Patient's Name:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="patientName" name="patientName" />

                            <label className="mb-1" htmlFor="natureOfIllness">*Nature of illness & its period:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="natureOfIllness" name="natureOfIllness" />

                            <label className="mb-1" htmlFor="referredHospital">*Referred Hospital Name:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="referredHospital" name="referredHospital" />
                        </div>
                        <div className="col m-3">
                            <label className="mb-1" htmlFor="relationship">*Relationship:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="relationship" name="relationship" />

                            <label className="mb-1" htmlFor="referringAMADate">*Name of Referring AMA/Date:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="referringAMADate" name="referringAMADate" />
                        </div>
                    </div>
                </form>
                <h4>Details of Treatment</h4>
                <div className='table-responsive-sm row'>
                    <div className=' col'>
                        <table className="table table-custom ">
                            <thead>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Particulars</th>
                                    <th scope="col">Claim Submitted (Rs)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Accommodation/ Bed Charges </td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Registration Fee</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Consultation/ Doctor</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Surgeon Charges</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Nursing Charges</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Operation Theater Charges</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>X-ray</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Hospital Charges</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Physiotherapy Charges</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Blood Charges</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                            </tbody>
                        </table></div>
                    <div className='col'>
                        <table className="table table-custom ">
                            <thead>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Particulars</th>
                                    <th scope="col">Claim Submitted (Rs)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>11</td>
                                    <td>Test & Procedure</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Angioplasty Charges</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Medicine Charges</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>Medicine Purchased from market</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>Imaging Service Charges
                                    </td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>Diagnostic Charges</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>ECG</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>Consumable Charges</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>Any other Charges paid to Hospital</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>Miscellaneous Charges</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className=" row d-flex-end">
                    <span className="col col-xs-12">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text bg-dark bg-gradient text-white" id="inputGroup-sizing-sm" >Total Claim submitted (Rs):</span>
                            <input type="text" className="form-control" />
                        </div>
                    </span>
                    <span className="col col-xs-12">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text bg-dark bg-gradient text-white" id="inputGroup-sizing-sm">Total no of Enclosures:</span> 
                            <input type="text" className="form-control" />
                        </div>
                    </span>
                </div>
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
                            <label className="mb-2" htmlFor="file">If dependent copy of dependent booklet</label>
                            <input className='form-control mb-2 inpbox' type="file" id="file" name="file" accept=".jpg, .jpeg, .png" required />

                            <label className="mb-2" htmlFor="file">*Copy of Prescription</label>
                            <input className='form-control mb-2 inpbox' type="file" id="file" name="file" accept=".jpg, .jpeg, .png" required />
                        </div>
                    </div>
                </form>
                <br />
                <div className=' bg-gradient p-3 mt-4' style={{ borderRadius: "20px", backgroundColor: "#aee9fa", border: "1px solid black" }}>
                    <span>Note:</span>
                    <ol>
                        <li>
                            If the treatment was received by a member of the employee at his residence, give particulars of such treatment
                            and attach certificate from the Authorized Medical Attendant, as required by rules.
                        </li>
                        <li>
                            If treatment was received at a Hospital other than a Government/Recognized Hospital, necessary details and
                            the certificate of the Authorized Medical Attendant to the effect that the requisite medical treatment was not
                            available in any nearest Government Hospital should be furnished.

                        </li>
                    </ol>
                </div>
                <h4 className="mt-5 my-3">Declaration :</h4>
                <div class="ms-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        <p> 
                            I hereby declare that the statement made in this application are true to the best of my knowledge and belief/and that
                            the person for whom medical expenses were incurred is wholly dependent upon me and is not an earning member of
                            the family. </p>
                    </label>
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
                    </div >
                </div >
            </>
            );
}

            export default Form1