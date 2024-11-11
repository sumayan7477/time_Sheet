import EmployPersonnelinfo from "./EmployPersonnelinfo/EmployPersonnelinfo";
import EmployProfile from "./EmployProfile/EmployProfile";
import { Link } from "react-router-dom";
import EmploysBankInfo from "./EmploysBankInfo/EmploysBankInfo";

const UserDashboard = () => {
  return (
    <>
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row clearfix">
            <div className="col-md-12">
              <div className="card border-0 mb-4 no-bg">
                <div className="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
                  <h3 className=" fw-bold flex-fill mb-0">Employee Profile</h3>
                  <Link to='/timeSheetForm' className="small text-truncate light-danger-bg py-1 px-2 me-2 rounded-1 d-inline-block fw-bold small">
                    
                    TimeSheet Form
                  </Link>
                  <Link to='/timesheet' className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                    View TimeSheet
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <EmployProfile></EmployProfile>

              <div className="row g-3">
                <EmployPersonnelinfo></EmployPersonnelinfo>
                <EmploysBankInfo></EmploysBankInfo>
              </div>
            </div>
            
          </div>
        </div>
      </div>

     

      {/* <!-- Edit Employee Personal Info--> */}
      <div className="modal fade" id="edit1" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="edit1Label">
                {" "}
                Personal Informations
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="deadline-form">
                <form>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput877"
                        className="form-label"
                      >
                        Nationality
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput877"
                        value="Indian"
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput977"
                        className="form-label"
                      >
                        Religion
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput977"
                        value="Hindu"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput9777"
                        className="form-label"
                      >
                        Marital Status
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput9777"
                        value="Married"
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput2770"
                        className="form-label"
                      >
                        Passport No
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput2770"
                        value="5468953210"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-6">
                      <label
                        htmlFor="exampleFormControlInput4777"
                        className="form-label"
                      >
                        Emergency Contact
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput4777"
                        value="7468953210"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Done
              </button>
              <button type="button" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Edit Bank Personal Info--> */}
      <div className="modal fade" id="edit2" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="edit2Label">
                {" "}
                Bank information
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="deadline-form">
                <form>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput8775"
                        className="form-label"
                      >
                        Bank Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput8775"
                        value="Kotak"
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput977"
                        className="form-label"
                      >
                        Account No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput9775"
                        value="5436874596325486"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput97775"
                        className="form-label"
                      >
                        IFSC Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput97775"
                        value="Kotak000021"
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput27705"
                        className="form-label"
                      >
                        Pan No
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput27705"
                        value="ACQPF6584L"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-6">
                      <label
                        htmlFor="exampleFormControlInput47775"
                        className="form-label"
                      >
                        UPI Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput47775"
                        value="454812kotak@upi"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Done
              </button>
              <button type="button" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
