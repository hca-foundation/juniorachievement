import React, { Component } from "react";
import bizTownBank from "../images/bizTownLogo.png";

import "../App.css";
import "../checkInput.css";

class DepositForm extends Component {
  render() {
    return (
      <div className="bank-slip-container">
        <table>
          <tbody className="deposit-form center-align">
            <tr>
              <td className="table-border-left table-border-top slip-top"></td>
              <td className="table-border-top">
                <b>DEPOSIT TICKET</b>
              </td>
              <td
                className="table-border-top table-border-right"
                colSpan="5"
              ></td>
            </tr>
            <tr>
              <td className="table-border-left" colSpan="2"></td>
              <td className="table-border" rowSpan="2">
                CASH
              </td>
              <td className="table-border">CURRENCY</td>
              <td className="table-border">
                <input
                  className="no-border dollar-amount"
                  type="text"
                />
              </td>
              <td className="table-border">
                .
                <input
                  className="no-border narrow-column center-align"
                  type="text"
                />
              </td>
              <td className="table-border-right"></td>
            </tr>
            <tr>
              <td
                className="table-border-left"
                style={{ width: "10px" }}
              ></td>
              <td className="flex-container">
                <span>
                  <b>Name</b>
                </span>
                <span
                  className="flex-item-grow table-border-bottom"
                  style={{ textAlign: "center", margin: "0 10px" }}
                >
                  Mark Hill
                </span>
              </td>
              <td className="table-border">COIN</td>
              <td className="table-border">
                <input
                  className="no-border dollar-amount"
                  type="text"
                />
              </td>
              <td className="table-border">
                .
                <input
                  className="no-border narrow-column center-align"
                  type="text"
                />
              </td>
              <td
                className="table-border-right"
                style={{ width: "10px" }}
              ></td>
            </tr>
            <tr>
              <td className="table-border-left"></td>
              <td rowSpan="3">
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
              <td className="table-border" colSpan="2">
                LIST CHECKS SINGLY
              </td>
              <td className="table-border dollar-amount">62</td>
              <td className="table-border center-align">.00</td>
              <td className="table-border-right"></td>
            </tr>
            <tr>
              <td className="table-border-left"></td>
              <td className="table-border" colSpan="2">
                <input className="no-border" type="text" />
              </td>
              <td className="table-border">
                <input
                  className="no-border dollar-amount"
                  type="text"
                />
              </td>
              <td className="table-border">
                .
                <input
                  className="no-border narrow-column center-align"
                  type="text"
                />
              </td>
              <td className="table-border-right"></td>
            </tr>
            <tr>
              <td className="table-border-left" colSpan="2"></td>
              <td className="table-border" colSpan="2">
                <input className="no-border" type="text" />
              </td>
              <td className="table-border">
                <input
                  className="no-border dollar-amount"
                  type="text"
                />
              </td>
              <td className="table-border">
                .
                <input
                  className="no-border narrow-column center-align"
                  type="text"
                />
              </td>
              <td className="table-border-right"></td>
            </tr>
            <tr>
              <td className="table-border-left" colSpan="2"></td>
              <td className="table-border" colSpan="2">
                SUBTOTAL
              </td>
              <td className="table-border">
                <input
                  className="no-border dollar-amount"
                  type="text"
                />
              </td>
              <td className="table-border">
                .
                <input
                  className="no-border narrow-column center-align"
                  type="text"
                />
              </td>
              <td className="table-border-right"></td>
            </tr>
            <tr>
              <td className="table-border-left"></td>
              <td className="flex-container">
                <b>Date</b>
                <span
                  className="flex-item-grow table-border-bottom"
                  style={{ margin: "0 10px" }}
                >
                  March 14
                </span>
                <b>20</b>
                <span
                  className="flex-item-grow table-border-bottom"
                  style={{ marginRight: "10px" }}
                >
                  21
                </span>
              </td>
              <td className="table-border" colSpan="2">
                LESS CASH RECEIVED
              </td>
              <td className="table-border">
                <input
                  className="no-border dollar-amount"
                  type="text"
                />
              </td>
              <td className="table-border">
                .
                <input
                  className="no-border narrow-column center-align"
                  type="text"
                />
              </td>
              <td className="table-border-right"></td>
            </tr>
            <tr>
              <td className="table-border-left"></td>
              <td className="deposit-form-small-text">
                Deposits may not be available for immediate withdrawal.
              </td>
              <td className="table-border-top table-border-bottom table-border-left">
                NET DEPOSIT
              </td>
              <td
                className="table-border-top table-border-bottom table-border-right"
                style={{ textAlign: "right" }}
              >
                $
              </td>
              <td className="table-border">
                <input
                  className="no-border dollar-amount"
                  type="text"
                />
              </td>
              <td className="table-border">
                .
                <input
                  className="no-border narrow-column center-align"
                  type="text"
                />
              </td>
              <td className="table-border-right"></td>
            </tr>
            <tr className="table-border-right">
              <td className="table-border-left"></td>
              <td>
                <span style={{ fontFamily: "cursive" }}>Mark Hill</span>
              </td>
              <td className="flex-container" colSpan="5">
                <span>Acct. #</span>
                <span
                  className="flex-item-grow table-border-bottom"
                  style={{ textAlign: "center", margin: "0 10px" }}
                >
                  132
                </span>
              </td>
            </tr>
            <tr className="table-border-bottom table-border-right">
              <td className="table-border-left"></td>
              <td>
                <span
                  className="table-border-top deposit-form-small-text"
                  style={{ padding: "0 20px" }}
                >
                  <i>Signature required for cash received</i>
                </span>
              </td>
              <td colSpan="6"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export { DepositForm };
