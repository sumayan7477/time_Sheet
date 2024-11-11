import { FaEdit } from "react-icons/fa";

const EmploysBankInfo = () => {
    return (
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header py-3 d-flex justify-content-between">
                      <h6 className="mb-0 fw-bold ">Bank information</h6>
                      <button
                        type="button"
                        className="btn p-0"
                        data-bs-toggle="modal"
                        data-bs-target="#edit2"
                      >
                        <FaEdit></FaEdit>
                      </button>
                    </div>
                    <div className="card-body">
                      <ul className="list-unstyled mb-0">
                        <li className="row flex-wrap mb-3">
                          <div className="col-6">
                            <span className="fw-bold">Bank Name</span>
                          </div>
                          <div className="col-6">
                            <span className="text-muted">Kotak</span>
                          </div>
                        </li>
                        <li className="row flex-wrap mb-3">
                          <div className="col-6">
                            <span className="fw-bold">Account No.</span>
                          </div>
                          <div className="col-6">
                            <span className="text-muted">5436874596325486</span>
                          </div>
                        </li>
                        <li className="row flex-wrap mb-3">
                          <div className="col-6">
                            <span className="fw-bold">IFSC Code</span>
                          </div>
                          <div className="col-6">
                            <span className="text-muted">Kotak000021</span>
                          </div>
                        </li>
                        <li className="row flex-wrap mb-3">
                          <div className="col-6">
                            <span className="fw-bold">Pan No</span>
                          </div>
                          <div className="col-6">
                            <span className="text-muted">ACQPF6584L</span>
                          </div>
                        </li>
                        <li className="row flex-wrap">
                          <div className="col-6">
                            <span className="fw-bold">UPI Id</span>
                          </div>
                          <div className="col-6">
                            <span className="text-muted">454812kotak@upi</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
    );
};

export default EmploysBankInfo;