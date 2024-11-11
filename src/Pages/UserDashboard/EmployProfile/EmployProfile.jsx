import { FaCalendar, FaEnvelope, FaPhone } from "react-icons/fa";
import image from "../../../assets/images/lg/avatar3.jpg";
import { FaBookBookmark } from "react-icons/fa6";
const EmployProfile = () => {
  return (
    <div className="card teacher-card  mb-3">
    <div className="card-body  d-flex teacher-fulldeatil">
        <div className="profile-teacher pe-xl-4 pe-md-2 pe-sm-4 pe-0 text-center w220 mx-sm-0 mx-auto">
            <a href="#">
                <img src={image} alt="" className="avatar xl rounded-circle img-thumbnail shadow-sm"/>
            </a>
            <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                <h6 className="mb-0 fw-bold d-block fs-6">Web Developer</h6>
                <span className="text-muted small">Employee Id : 00001</span>
            </div>
        </div>
        <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
            <h6  className="mb-0 mt-2  fw-bold d-block fs-6">Luke Short</h6>
            <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">Web Designer</span>
            <p className="mt-2 small">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn&lsquo;t distract from the layout. A practice not without controversy</p>
            <div className="row g-2 pt-2">
                <div className="col-xl-5">
                    <div className="d-flex align-items-center">
                        <FaPhone></FaPhone>
                        <span className="ms-2 small">202-555-0174 </span>
                    </div>
                </div>
                <div className="col-xl-5">
                    <div className="d-flex align-items-center">
                        <FaEnvelope></FaEnvelope>
                        <span className="ms-2 small">LukeShortn@gmail.com</span>
                    </div>
                </div>
                <div className="col-xl-5">
                    <div className="d-flex align-items-center">
                       <FaCalendar></FaCalendar>
                        <span className="ms-2 small">19/03/1980</span>
                    </div>
                </div>
                <div className="col-xl-5">
                    <div className="d-flex align-items-center">
                        <FaBookBookmark></FaBookBookmark>
                        <span className="ms-2 small">2734  West Fork Street,EASTON 02334.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default EmployProfile;
