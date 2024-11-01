import { FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdAssessment } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="sidebar px-4 py-4 py-md-5 me-0 "
      style={{ background: "#4C3575" }}
    >
      <div className="d-flex flex-column h-100">
        <a href="index-2.html" className="mb-0 brand-icon">
          <span className="logo-icon">
            <svg
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-clipboard-check"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
          </span>
          <span className="logo-text">My-Task</span>
        </a>
        {/* <!-- Menu: main ul --> */}

        <ul className="menu-list flex-grow-1 mt-3">
          <li>
            <Link to="/" className="m-link">
              <FaHome className=" fs-5" /> Home
            </Link>
          </li>

          <li className="collapsed">
            <a
              className="m-link "
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-Components"
              href="#"
            >
              <MdAssessment className=" fs-5" /> <span>Dashboard</span>{" "}
              <span className="arrow  ms-auto text-end fs-5">
                <IoIosArrowDown />
              </span>
            </a>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse show" id="dashboard-Components">
              <li>
                <Link to="/AdminDashboard" className="ms-link">
                  {" "}
                  <span>Hr Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/userDashboard" className="ms-link ">
                  {" "}
                  <span>User Dashboard</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* <!-- Menu: menu collepce btn --> */}
        {/* <button
          type="button"
          className="btn btn-link sidebar-mini-btn text-light"
        >
          <span className="ms-2">
            <i className="icofont-bubble-right"></i>
          </span>
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
