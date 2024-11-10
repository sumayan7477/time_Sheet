import { FaEdit } from "react-icons/fa";

const EmployPersonnelinfo = () => {
    return (
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
        <div className="card">
          <div className="card-header py-3 d-flex justify-content-between">
            <h6 className="mb-0 fw-bold ">Personal Informations</h6>
            <button
              type="button"
              className="btn p-0"
              data-bs-toggle="modal"
              data-bs-target="#edit1"
            >
              <FaEdit></FaEdit>
            </button>
          </div>
          <div className="card-body">
            <ul className="list-unstyled mb-0">
              <li className="row flex-wrap mb-3">
                <div className="col-6">
                  <span className="fw-bold">Nationality</span>
                </div>
                <div className="col-6">
                  <span className="text-muted">Indian</span>
                </div>
              </li>
              <li className="row flex-wrap mb-3">
                <div className="col-6">
                  <span className="fw-bold">Religion</span>
                </div>
                <div className="col-6">
                  <span className="text-muted">Hindu</span>
                </div>
              </li>
              <li className="row flex-wrap mb-3">
                <div className="col-6">
                  <span className="fw-bold">Marital Status</span>
                </div>
                <div className="col-6">
                  <span className="text-muted">Married</span>
                </div>
              </li>
              <li className="row flex-wrap mb-3">
                <div className="col-6">
                  <span className="fw-bold">Passport No.</span>
                </div>
                <div className="col-6">
                  <span className="text-muted">5468953210</span>
                </div>
              </li>
              <li className="row flex-wrap">
                <div className="col-6">
                  <span className="fw-bold">Emergency Contact</span>
                </div>
                <div className="col-6">
                  <span className="text-muted">7468953210</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default EmployPersonnelinfo;