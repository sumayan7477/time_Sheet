import { BsChatText } from "react-icons/bs";
import { FaClock, FaDumpster, FaEdit, FaPaintBrush, FaPaperclip, FaPlus } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";

const Projects = () => {
    return (
        <div className="body d-flex py-lg-3 py-md-2">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="border-0 mb-4">
                        <div className="card-header p-0 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                            <h3 className="fw-bold py-3 mb-0">Projects</h3>
                            <div className="d-flex py-2 project-tab flex-wrap w-sm-100">
                                <button type="button" className="btn btn-dark w-sm-100 light-success-bg" data-bs-toggle="modal" data-bs-target="#createproject"><i className=" me-2 fs-6 "><FaPlus></FaPlus></i>Create Project</button>
                                <ul className="nav nav-tabs tab-body-header rounded ms-3 prtab-set w-sm-100" role="tablist">
                                    <li className="nav-item light-info-bg"><a className="nav-link active" data-bs-toggle="tab" href="#All-list" role="tab">All</a></li>
                                    <li className="nav-item light-info-bg"><a className="nav-link" data-bs-toggle="tab" href="#Started-list" role="tab">Started</a></li>
                                    <li className="nav-item light-info-bg"><a className="nav-link" data-bs-toggle="tab" href="#Approval-list" role="tab">Approval</a></li>
                                    <li className="nav-item light-info-bg"><a className="nav-link" data-bs-toggle="tab" href="#Completed-list" role="tab">Completed</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12 flex-column">
                        <div className="tab-content mt-4">
                            <div className="tab-pane fade show active" id="All-list">
                                <div className="row g-3 gy-5 py-3 row-deck">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between mt-5">
                                                    <div className="lesson_name">
                                                        <div className="project-block light-info-bg">
                                                            <FaPaintBrush></FaPaintBrush>
                                                        </div>
                                                        <span className="small text-muted project_name fw-bold"> Social Geek Made </span>
                                                        <h6 className="mb-0 fw-bold  fs-6  mb-2">UI/UX Design</h6>
                                                    </div>
                                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                        <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editproject"><FaEdit className="icofont-edit text-success"></FaEdit></button>
                                                        <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#deleteproject"><FaDumpster className="icofont-ui-delete text-danger"></FaDumpster></button>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-list avatar-list-stacked pt-2">
                                                        <img className="avatar rounded-circle sm" src="assets/images/xs/avatar1.jpg" alt=""/>
                                                        <img className="avatar rounded-circle sm" src="assets/images/xs/avatar3.jpg" alt=""/>
                                                        <img className="avatar rounded-circle sm" src="assets/images/xs/avatar4.jpg" alt=""/>
                                                        <img className="avatar rounded-circle sm" src="assets/images/xs/avatar2.jpg" alt=""/>
                                                        <img className="avatar rounded-circle sm" src="assets/images/xs/avatar8.jpg" alt=""/>
                                                        <span className="avatar rounded-circle text-center pointer sm" data-bs-toggle="modal" data-bs-target="#addUser"><i className=" text-danger"><FaPlus></FaPlus></i></span>
                                                    </div>
                                                </div>
                                                <div className="row g-2 pt-4">
                                                    <div className="col-6">
                                                        <div className="d-flex align-items-center">
                                                            <FaPaperclip></FaPaperclip>
                                                            <span className="ms-2">5 Attach</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="d-flex align-items-center">
                                                        <GiSandsOfTime />
                                                            <span className="ms-2">4 Month</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="d-flex align-items-center">
                                                            <GrGroup></GrGroup>
                                                            <span className="ms-2">5 Members</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="d-flex align-items-center">
                                                            <BsChatText></BsChatText>
                                                            <span className="ms-2">10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="dividers-block"></div>
                                                <div className="d-flex align-items-center justify-content-between mb-2">
                                                    <h4 className="small fw-bold mb-0">Progress</h4>
                                                    <span className="small light-danger-bg  p-1 rounded"><FaClock></FaClock> 35 Days Left</span>
                                                </div>
                                                <div className="progress" style={{height: "8px;"}}>
                                                    <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '25%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{width: "25%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;