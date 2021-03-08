import React, { Component } from "react";
import bizTownBank from "../images/bizTownLogo.png";

import "../App.css";
import "../checkInput.css";

class CheckSlip extends Component {
  render() {
    return (
      <div className="bank-slip-container">
        <table>
          <tbody className="deposit-form center-align">
            <tr>
              <td
                className="table-border-left table-border-top table-border-right"
                style={{ textAlign: "right", padding: "15px 15px 0 0" }}
              >
                007
              </td>
            </tr>
            <tr>
              <td className="table-border-left table-border-right">
                <div
                  className="flex-container"
                  style={{
                    textAlign: "left",
                    padding: "15px 15px 0 15px",
                  }}
                >
                  <span style={{ marginRight: "15px" }}>
                    <b>Name</b>
                  </span>
                  <span
                    className="table-border-bottom"
                    style={{
                      width: "250px",
                      display: "block",
                      padding: "0 10px",
                    }}
                  >
                    James Dunn
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td
                className="table-border-left table-border-right"
                style={{ textAlign: "right", padding: "15px" }}
              >
                <span
                  className="table-border-bottom"
                  style={{
                    textAlign: "center",
                    padding: "15px 15px 0 15px",
                    marginRight: "15px",
                  }}
                >
                  April 20,
                </span>
                <span>20</span>
                <span
                  className="table-border-bottom"
                  style={{
                    textAlign: "center",
                    padding: "5px 5px 0 5px",
                  }}
                >
                  21
                </span>
              </td>
            </tr>
            <tr>
              <td className="table-border-left table-border-right">
                <div className="flex-container">
                  <div
                    className="flex-container"
                    style={{ width: "80px", fontSize: "10px" }}
                  >
                    PAY TO THE ORDER OF
                  </div>
                  <div>
                    <input
                      style={{
                        border: "solid black",
                        borderWidth: "0 0 1px 0",
                        width: "450px",
                        marginTop: "10px",
                      }}
                      type="text"
                    />
                  </div>
                  <span
                    className="flex-item-grow"
                    style={{ marginLeft: "50px", marginTop: "8px" }}
                  >
                    $
                  </span>
                  <span
                    className="table-border"
                    style={{
                      padding: "2px 30px 0 30px",
                      marginLeft: "10px",
                      marginRight: "15px",
                    }}
                  >
                    3.75
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="table-border-left table-border-right">
                <div
                  className="flex-container"
                  style={{
                    textAlign: "right",
                    padding: "15px 15px 0 0",
                  }}
                >
                  <div>
                    <input
                      style={{
                        border: "solid black",
                        borderWidth: "0 0 1px 0",
                        marginLeft: "15px",
                        marginRight: "20px",
                        width: "600px",
                      }}
                      type="text"
                    />
                  </div>
                  <span>Dollars</span>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{ textAlign: "left" }}
                className="table-border-left table-border-right"
              >
                <img
                  src={bizTownBank}
                  alt="BizTown Bank Logo"
                  style={{
                    width: "300px",
                    marginBottom: "10px",
                    marginTop: "5px",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td className="table-border-left table-border-right">
                <div className="flex-container">
                  <div style={{ marginLeft: "15px" }}>Memo</div>
                  <div
                    className="table-border-bottom flex-item-grow"
                    style={{ margin: "0 15px", padding: "0 80px" }}
                  >
                    gift
                  </div>
                  <div>
                    <input
                      style={{
                        border: "solid black",
                        borderWidth: "0 0 1px 0",
                        width: "300px",
                        marginRight: "15px",
                        marginLeft: "30px",
                      }}
                      type="text"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td
                className="table-border-left table-border-right table-border-bottom"
                style={{
                  textAlign: "right",
                  padding: "15px 15px 0 0",
                  paddingBottom: "15px",
                }}
              >
                <span
                  style={{
                    textAlign: "center",
                    padding: "15px 15px 0 15px",
                    marginRight: "15px",
                  }}
                >
                  <b>Acct. #</b>
                </span>
                <span
                  className="table-border-bottom"
                  style={{ textAlign: "center", padding: "0 90px" }}
                >
                  149
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export { CheckSlip };
