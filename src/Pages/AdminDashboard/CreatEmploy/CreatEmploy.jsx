
const CreatEmploy = () => {
    return (
        <div className="modal fade" id="createemp" tabIndex="-1"  aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title  fw-bold" id="createprojectlLabel"> Add Employee</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput877" className="form-label">Employee Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput877" placeholder="Explain what the Project Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput977" className="form-label">Employee Position</label>
                            <input type="text" className="form-control" id="exampleFormControlInput977" placeholder="Explain  the Position"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFileMultipleoneone" className="form-label">Employee Profile</label>
                            <input className="form-control" type="file" id="formFileMultipleoneone" />
                        </div>
                        <div className="deadline-form">
                            <form>
                                <div className="row g-3 mb-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="exampleFormControlInput1778" className="form-label">Employee ID</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1778" placeholder="User Name"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="exampleFormControlInput2778" className="form-label">Joining Date</label>
                                        <input type="date" className="form-control" id="exampleFormControlInput2778"/>
                                    </div>
                                </div>
                                <div className="row g-3 mb-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="exampleFormControlInput1778" className="form-label">Passport NO</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1778" placeholder="User Name"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="exampleFormControlInput2778" className="form-label"> Date Of Birth</label>
                                        <input type="date" className="form-control" id="exampleFormControlInput2778"/>
                                    </div>
                                </div>
                                <div className="row g-3 mb-3">
                                <div className="col">
                                    <label htmlFor="exampleFormControlInput177" className="form-label">User Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput177" placeholder="User Name"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleFormControlInput277" className="form-label">Gread</label>
                                    <input type="Number" className="form-control" id="exampleFormControlInput277" placeholder="Password"/>
                                </div>
                                </div>
                                <div className="row g-3 mb-3">
                                <div className="col">
                                    <label htmlFor="exampleFormControlInput177" className="form-label">Bank Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput177" placeholder="User Name"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleFormControlInput277" className="form-label">Bank Account Number</label>
                                    <input type="Number" className="form-control" id="exampleFormControlInput277" placeholder="Password"/>
                                </div>
                                </div> 
                                <div className="row g-3 mb-3">
                                <div className="col">
                                    <label htmlFor="exampleFormControlInput177" className="form-label">Nationality</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput177" placeholder="User Name"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleFormControlInput277" className="form-label">Religion</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput277" placeholder="Password"/>
                                </div>
                                </div> 
                                <div className="row g-3 mb-3">
                                <div className="col">
                                    <label htmlFor="exampleFormControlInput177" className="form-label">Marital Status</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput177" placeholder="User Name"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleFormControlInput277" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput277" placeholder="Password"/>
                                </div>
                                </div> 
                                <div className="row g-3 mb-3">
                                    <div className="col">
                                        <label htmlFor="exampleFormControlInput477" className="form-label">Email ID</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput477" placeholder="User Name"/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="exampleFormControlInput777" className="form-label">Phone</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput777" placeholder="User Name"/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="exampleFormControlInput777" className="form-label">Emergency Contect Phone</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput777" placeholder="User Name"/>
                                    </div>
                                </div>
                                <div className="row g-3 mb-3">
                                    <div className="col">
                                        <label  className="form-label">Department</label>
                                        <select className="form-select" aria-label="Default select Project Category">
                                            <option selected>Web Development</option>
                                            <option value="1">It Management</option>
                                            <option value="2">Marketing</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label  className="form-label">Designation</label>
                                        <select className="form-select" aria-label="Default select Project Category">
                                            <option selected>UI/UX Design</option>
                                            <option value="1">Website Design</option>
                                            <option value="2">App Development</option>
                                            <option value="3">Quality Assurance</option>
                                            <option value="4">Development</option>
                                            <option value="5">Backend Development</option>
                                            <option value="6">Software Testing</option>
                                            <option value="7">Website Design</option>
                                            <option value="8">Marketing</option>
                                            <option value="9">SEO</option>
                                            <option value="10">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row g-3 mb-3">
                                <div className="col">
                                    <label htmlFor="exampleFormControlInput177" className="form-label">Qualification</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput177" placeholder="User Name"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleFormControlInput277" className="form-label">Job Level</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput277" placeholder="Password"/>
                                </div>
                                </div> 
                                <div className="row g-3 mb-3">
                                <div className="col">
                                    <label htmlFor="exampleFormControlInput177" className="form-label">Salary Range</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput177" placeholder="User Name"/>
                                </div>
                                
                                </div> 
                            </form>
                        </div>
                        <div className="mb-3">          
                            <label htmlFor="exampleFormControlTextarea78" className="form-label">Description </label>
                            <textarea className="form-control" id="exampleFormControlTextarea78" rows="3" placeholder="Add any extra details about the request"></textarea>
                        </div> 
                        <div className="table-responsive">
                            <table className="table table-striped custom-table">
                                <thead>
                                    <tr>
                                        <th>Project Permission</th>
                                        <th className="text-center">Read</th>
                                        <th className="text-center">Write</th>
                                        <th className="text-center">Create</th>
                                        <th className="text-center">Delete</th>
                                        <th className="text-center">Import</th>
                                        <th className="text-center">Export</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fw-bold">Projects</td>
                                        <td className="text-center">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" checked/>
                                        </td>
                                        <td className="text-center">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" checked/>
                                        </td>
                                        <td className="text-center">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" checked/>
                                        </td>
                                        <td className="text-center">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" checked/>
                                        </td>
                                        <td className="text-center">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" checked/>
                                        </td>
                                        <td className="text-center">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault6" checked/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td  className="fw-bold">Tasks</td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault7" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault8" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault9" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault10" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault11" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault12" checked/>
                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <td  className="fw-bold">Chat</td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault13" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault14" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault15" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault16" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault17" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault18" checked/>
                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <td  className="fw-bold">Estimates</td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault19" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault20" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault21" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault22" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault23" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault24" checked/>
                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <td  className="fw-bold">Invoices</td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault25" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault26"/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault27" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault28"/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault29" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault30" checked/>
                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <td  className="fw-bold">Timing Sheets</td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault31" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault32" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault33" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault34" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault35" checked/>
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault36" checked/>
                        
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Done</button>
                        <button type="button" className="btn btn-primary">Create</button>
                    </div> 
                </div>  
            </div>
        </div>
    );
};

export default CreatEmploy;