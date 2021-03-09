import React, { Component } from "react";
import "../App.css";
import "../checkInput.css";

class RegisterSlip extends Component {
  render() {
    return (
      <div className="bank-slip-container">
        <table>
          <tbody className="deposit-form center-align">
            <tr>
              <td className="table-border" colSpan="11">
                RECORD ALL CHARGES OR CREDITS THAT AFFECT YOUR ACCOUNT
              </td>
            </tr>
            <tr>
              <td
                className="table-border register-medium-col"
                rowSpan="2"
              >
                NUMBER
              </td>
              <td className="table-border" rowSpan="2">
                DATE
              </td>
              <td className="table-border" rowSpan="2">
                TRANSACTION DESCRIPTION
              </td>
              <td className="table-border" rowSpan="2" colSpan="2">
                PAYMENT/DEBIT (-)
              </td>
              <td className="table-border" rowSpan="2">
                <span className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
                </span>
              </td>
              <td className="table-border" rowSpan="2">
                FEE (IF ANY)
              </td>
              <td className="table-border" colSpan="2" rowSpan="2">
                DEPOSIT/CREDIT (+)
              </td>
              <td className="table-border" colSpan="2">
                BALANCE
              </td>
            </tr>
            <tr>
              <td className="table-border" colSpan="2">
                25.00
              </td>
            </tr>
            <tr>
              <td className="table-border register-medium-col">007</td>
              <td className="table-border register-medium-col">3/14</td>
              <td className="table-border">Macy's</td>
              <td className="table-border register-medium-col">3</td>
              <td className="table-border narrow-column">75</td>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border narrow-column"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border narrow-column"
                  type="text"
                />
              </td>
            </tr>
            <tr className="grey-background">
              <td className="table-border">
                <input
                  className="no-border grey-background register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background narrow-column"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background narrow-column"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background narrow-column"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border register-medium-col">3/14</td>
              <td className="table-border">
                <input className="no-border" type="text" />
              </td>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border narrow-column"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border narrow-column"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border narrow-column"
                  type="text"
                />
              </td>
            </tr>
            <tr className="grey-background">
              <td className="table-border">
                <input
                  className="no-border grey-background register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background narrow-column"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background narrow-column"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border grey-background narrow-column"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input className="no-border" type="text" />
              </td>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border narrow-column"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border narrow-column"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border register-medium-col"
                  type="text"
                />
              </td>
              <td className="table-border">
                <input
                  className="no-border narrow-column"
                  type="text"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export { RegisterSlip };
