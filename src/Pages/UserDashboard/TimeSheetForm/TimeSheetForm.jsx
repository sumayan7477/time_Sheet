
const TimeSheetForm = () => {
    return (
        <div className="body d-flex py-3">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="border-0 mb-4">
                        <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                            <h3 className="fw-bold mb-0">Forms</h3>
                        </div>
                    </div>
                </div> 

                <div className="row align-item-center">
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                <h6 className="mb-0 fw-bold ">Update Todays Work</h6> 
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row g-3 align-items-center">
                                        
                                        <div className="col-md-6">
                                            <label htmlFor="admitdate" className="form-label">Date</label>
                                            <input type="date" className="form-control" id="admitdate" required/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="admittime" className="form-label">In Time</label>
                                            <input type="time" className="form-control" id="admittime" required/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="admittime" className="form-label">Out Time</label>
                                            <input type="time" className="form-control" id="admittime" required/>
                                        </div>
                                       
                                        
                                        <div className="col-md-6">
                                            <label  className="form-label">Prefarance</label>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios11" value="option1" checked/>
                                                        <label className="form-check-label" htmlFor="exampleRadios11">
                                                         Full day
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios22" value="option2"/>
                                                        <label className="form-check-label" htmlFor="exampleRadios22">
                                                           Half day
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="addnote" className="form-label">Description of Daily Activities</label>
                                            <textarea  className="form-control" id="addnote" rows="3"></textarea> 
                                        </div>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TimeSheetForm;