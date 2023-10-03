import React from "react";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const navi = useNavigate();
  const h = () => {
    navi("/table");
  };
  return (
    <div className="container-fluid w-75 ">
      <div className="bg-light p-5 row p-5 text-primary">
        <center>
          <h1>STUDENT PROFILE</h1>
        </center>
        <hr></hr>
        <div className="d-flex justify-content-center">
          <div className="bg-light row p-5">
            <div className="w-20px h-20px">
              <img
                src="https://th.bing.com/th/id/OIP._6kSqsTmX5o4yeSjGnw48AHaLH?w=133&h=200&c=7&r=0&o=5&pid=1.7 "
                alt="picture"
                className="img-fluid rounded-circle"
              ></img>
            </div>
            <div className="col-6 col-md-12">
              <h4>N Ram</h4>
              <i class="bi bi-envelope-at-fill"></i>
              <p>test@gmail.com</p>
              <i class="bi bi-telephone"></i>
              <p>9876543210</p>
              <button className="attendance btn btn-primary" onClick={h}>
                Attendance List
              </button>
            </div>
          </div>
        </div>
        <div>
          <section>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Personal Info
              </button>
              <button
                class="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Parent Info
              </button>
              <button
                class="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Statutory & Address Info
              </button>
            </div>
          </section>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Batch</th>
                        <td>2023</td>
                      </tr>
                      <tr>
                        <th scope="col">Course</th>
                        <td>B.E CS</td>
                      </tr>
                      <tr>
                        <th scope="col">Roll No</th>
                        <td>21cs001</td>
                      </tr>
                      <tr>
                        <th scope="col">Gender</th>
                        <td>Male</td>
                      </tr>
                      <tr>
                        <th scope="col">Blood group</th> <td>O +ve</td>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade show active"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div
                class="tab-pane fade show active"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Father Name</th>
                        <td>A Subramani</td>
                      </tr>
                      <tr>
                        <th scope="col">Mother Name</th>
                        <td>S Kanmani</td>
                      </tr>
                      <tr>
                        <th scope="col">Father Occupation</th>
                        <td>Teacher</td>
                      </tr>
                      <tr>
                        <th scope="col">Mother Occupation</th>
                        <td>HouseMaker</td>
                      </tr>
                      <tr>
                        <th scope="col">Annual Income</th> <td>2.9L</td>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div
                class="tab-pane fade show active"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Nationality</th>
                        <td>Indian</td>
                      </tr>
                      <tr>
                        <th scope="col">Religion</th>
                        <td>Hindu</td>
                      </tr>
                      <tr>
                        <th scope="col">Community</th>
                        <td>Bc</td>
                      </tr>
                      <tr>
                        <th scope="col">Mother Tongue</th>
                        <td>Tamil</td>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
