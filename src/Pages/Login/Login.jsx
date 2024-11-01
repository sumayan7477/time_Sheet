
const Login = () => {
    return (
        <div className="col-md-12 col-lg-4 col-xl-5 col-xxl-5">
              <div className="alert alert-primary p-3 mb-0 w-100">
                <h6 className="fw-bold mb-1">Create Account</h6>
                <p className="small mb-4">
                  Create a Project credentials now and never miss
                </p>
                <div className="my-3 ">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Username"
                  />
                </div>
                <div className="my-3 ">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Employ ID"
                  />
                </div>
                <div className="my-3 ">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Position"
                  />
                </div>
                <div className="my-3 ">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Grade"
                  />
                </div>
                <div className="my-3 ">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                  />
                </div>
                <div className="my-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter Password"
                  />
                </div>
                
                <button className="btn btn-primary mt-2">Create Account</button>
              </div>
            </div>
    );
};

export default Login;