import heroImg from "../../../assets/images/task-view.svg";
import Login from "../../Login/Login";
const Hero = () => {
  return (
    <div className="row g-3 mb-3 row-deck">
    <div className="col-md-12 col-lg-8 col-xl-7 col-xxl-7">
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2 ">
              <div className="text-center p-4">
                <img src={heroImg} alt="..." className="img-fluid" />
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-6 order-md-1 px-4">
              <h3 className="fw-bold ">Dylan Hunter</h3>
              <p className="line-height-custom">
                Welcome back Dylan Hunter.Integer molestie, arcu non
                porta sollicitudin, arcu felis aliquam urna, placerat
                maximus lorem urna commodo sem. Pellentesque venenatis
                leo quam, sed mattis sapien lobortis ut.placerat maximus
                lorem urna commodo sem
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    <Login></Login>
  </div>
  );
};

export default Hero;
