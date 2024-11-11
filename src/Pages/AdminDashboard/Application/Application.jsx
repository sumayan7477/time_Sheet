import { FaChartBar, FaChartLine, FaHandHolding, FaPaperPlane, FaUser } from "react-icons/fa";
import interview from '../../../assets/images/interview.svg';

const Application = () => {
    return (
        <div className="col-xl-4 col-lg-12 col-md-12">
                        <div className="row g-3 row-deck">
                            <div className="col-md-6 col-lg-6 col-xl-12">
                                <div className="card light-danger-bg">
                                    <div className="card-body row">
                                        <div className="col">
                                            <span className="avatar lg bg-white rounded-circle text-center d-flex align-items-center justify-content-center">
                                                <FaPaperPlane></FaPaperPlane>
                                            </span>
                                            <h1 className="mt-3 mb-0 fw-bold text-white">1546</h1>
                                            <span className="text-white">Applications</span>
                                        </div>
                                        <div className="col">
                                            <img className="img-fluid" src={interview} alt="interview"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-12  flex-column">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center flex-fill">
                                            <span className="avatar lg light-success-bg rounded-circle text-center d-flex align-items-center justify-content-center">
                                                <FaUser></FaUser>
                                            </span>
                                            <div className="d-flex flex-column ps-3  flex-fill">
                                                <h6 className="fw-bold mb-0 fs-4">246</h6>
                                                <span className="text-muted">Interviews</span>
                                            </div>
                                            <FaChartBar></FaChartBar>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center flex-fill">
                                            <span className="avatar lg light-success-bg rounded-circle text-center d-flex align-items-center justify-content-center">
                                                <FaHandHolding></FaHandHolding>
                                                </span>
                                            <div className="d-flex flex-column ps-3 flex-fill">
                                                <h6 className="fw-bold mb-0 fs-4">101</h6>
                                                <span className="text-muted">Hired</span>
                                            </div>
                                            <FaChartLine></FaChartLine>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
    );
};

export default Application;