import React from "react";
import { useNavigate } from "react-router-dom";
function Table() {
  const navi = useNavigate();
  const back = () => {
    navi("/");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <button className="back-to-profile btn btn-primary" onClick={back}>
        Back To Profile
      </button>
      <div
        className="attendance"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div
          className="table-responsive"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ textAlign: "center", color: "Highlight" }}>
              My attendance summary
            </h1>
            <table class="table table-bordered  table-warning">
              <thead>
                <tr>
                  <th>No</th>
                  <th>sem period</th>
                  <th>sem</th>
                  <th>year</th>
                  <th>from date</th>
                  <th>to date</th>
                  <th>days</th>
                  <th>present</th>
                  <th>absent</th>
                  <th>percent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>odd sem 2021-2022</td>
                  <td>1</td>
                  <td>1</td>
                  <td>01/06/2021</td>
                  <td>30/06/2022</td>
                  <td>91</td>
                  <td>85.00</td>
                  <td>8.00</td>
                  <td>93.41</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>even sem 2021-2022</td>
                  <td>2</td>
                  <td>1</td>
                  <td>01/06/2021</td>
                  <td>16/09/2022</td>
                  <td>84</td>
                  <td>81.00</td>
                  <td>3.00</td>
                  <td>96.41</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>odd sem 2022-2023</td>
                  <td>3</td>
                  <td>2</td>
                  <td>11/07/2022</td>
                  <td>31/03/2023</td>
                  <td>77</td>
                  <td>70.50</td>
                  <td>6.00</td>
                  <td>91.41</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>even sem 2022-2023</td>
                  <td>4</td>
                  <td>2</td>
                  <td>01/12/2022</td>
                  <td>31/05/2023</td>
                  <td>77</td>
                  <td>71.00</td>
                  <td>6.00</td>
                  <td>92.41</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="list2">
        <h1 style={{ color: "Highlight" }}>Attendance Details For Sem 1</h1>
        <div className="table-responsive">
          <table class="list table table-bordered table-warning table-hover table-primary">
            <thead>
              <tr>
                <th>No</th>
                <th>Date</th>
                <th>Week Day</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>27/10/2021</td>
                <td>Wednesday</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>N</td>
              </tr>
              <tr>
                <td>2</td>
                <td>28/10/2021</td>
                <td>Thursday</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>N</td>
              </tr>
              <tr className="table-danger">
                <td>3</td>
                <td>29/10/2021</td>
                <td>Friday</td>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>N</td>
              </tr>
              <tr>
                <td>4</td>
                <td>01/11/2021</td>
                <td>Monday</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>N</td>
              </tr>
              <tr>
                <td>5</td>
                <td>02/11/2021</td>
                <td>Tuesday</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>N</td>
              </tr>
              <tr>
                <td>6</td>
                <td>03/11/2021</td>
                <td>Wednesday</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>N</td>
              </tr>
              <tr className="table-danger">
                <td>7</td>
                <td>04/11/2021</td>
                <td>Thursday</td>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>N</td>
              </tr>
              <tr>
                <td>8</td>
                <td>05/11/2021</td>
                <td>Friday</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>N</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Table;
