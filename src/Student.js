import React from "react";
import "./Student.css";
import "bootstrap-icons/font/bootstrap-icons.css";
function Student() {
  return (
    <div className="main">
      <nav>
        <ul>
          <li>
            <a href=" #" class="logo">
              <img
                src="https://t4.ftcdn.net/jpg/02/27/45/09/360_F_227450952_KQCMShHPOPebUXklULsKsROk5AvN6H1H.jpg"
                alt="picture"
              ></img>
              <span className="item">Admin</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-speedometer2"></i>
              <span className="item">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-envelope"></i>
              <span className="item">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-file-text"></i>
              <span className="item">Report</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-people"></i>
              <span className="item">Attendance</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-gear"></i>
              <span className="item">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className="bi bi-box-arrow-right"></i>
              <span className="item">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Student;
