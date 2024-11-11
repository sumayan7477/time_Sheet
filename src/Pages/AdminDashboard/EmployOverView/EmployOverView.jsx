import { Link } from "react-router-dom";
import TopPerformance from "../TopPerformance/TopPerformance";
import EmployAvaiablity from "../EmployAvaiablity/EmployAvaiablity";
import Application from "../Application/Application";
import Example from "../PaiChart/PiChart";

const EmployOverView = () => {
  return (
    <div>
      <div className="body d-flex py-3">
        <div className="container-xxl">
          <div className="row clearfix g-3">
            <div className="col-xl-8 col-lg-12 col-md-12 flex-column">
              <div className="row g-3">
                <EmployAvaiablity></EmployAvaiablity>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                      <h6 className="mb-0 fw-bold ">Total Employees</h6>
                      <h4 className="mb-0 fw-bold ">423</h4>
                    </div>
                    <div className="card-body">
                        <Example></Example>
                      <div className="mt-3" id="apex-MainCategories"></div>
                      <Link to="/allEmploys" className="btn outline">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Application></Application>

            <TopPerformance></TopPerformance>
          </div>
          {/* <!-- Row End --> */}
        </div>
      </div>
    </div>
  );
};

export default EmployOverView;
