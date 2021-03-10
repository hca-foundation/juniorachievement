import React, { Component } from "react";
import "../App.css";
import "../checkInput.css";
// import classNames from "classnames";

const slipRowCount = 5;

class RegisterSlip extends Component {
  render() {
    var tableRows = [...Array(slipRowCount).keys()].map((index) => {
      return (
        <RegisterSlipRow
          row={index}
          key={`registerRow_${index}`}
          greyBackground={index % 2}
          handleChange={this.props.handleChange}
          rowData={this.props.data}
        />
      );
    });
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
            {tableRows}
          </tbody>
        </table>
      </div>
    );
  }
}

function RegisterSlipRow(props) {
  var row = props.row;
  var rowData = props.rowData.rowEntries;
  var prepopulatedRows = props.rowData.prepopulatedRows;
  return (
    <tr className={`${props.greyBackground ? "grey-background" : ""}`}>
      <td className="table-border">
        {prepopulatedRows[`entryNumber_${row}`] || (
          <input
            className={`center-align no-border register-medium-col ${
              props.greyBackground ? "grey-background" : ""
            }`}
            type="text"
            id={`entryNumber_${row}`}
            name={`entryNumber_${row}`}
            defaultValue={rowData[`entryNumber_${row}`]}
            onChange={props.handleChange}
          />
        )}
      </td>
      <td className="table-border">
        {prepopulatedRows[`date_${row}`] || (
          <input
            className={`center-align no-border register-medium-col ${
              props.greyBackground ? "grey-background" : ""
            }`}
            type="text"
            id={`date_${row}`}
            name={`date_${row}`}
            defaultValue={rowData[`date_${row}`]}
            onChange={props.handleChange}
          />
        )}
      </td>
      <td className="table-border">
        {prepopulatedRows[`transactionDesc_${row}`] || (
          <input
            className={`center-align no-border ${
              props.greyBackground ? "grey-background" : ""
            }`}
            type="text"
            id={`transactionDesc_${row}`}
            name={`transactionDesc_${row}`}
            defaultValue={rowData[`transactionDesc_${row}`]}
            onChange={props.handleChange}
          />
        )}
      </td>
      <td className="table-border">
        {prepopulatedRows[`paymentDollarAmount_${row}`] || (
          <input
            className={`center-align no-border register-large-medium-col ${
              props.greyBackground ? "grey-background" : ""
            }`}
            type="text"
            id={`paymentDollarAmount_${row}`}
            name={`paymentDollarAmount_${row}`}
            defaultValue={rowData[`paymentDollarAmount_${row}`]}
            onChange={props.handleChange}
          />
        )}
      </td>
      <td className="table-border">
        {prepopulatedRows[`paymentCentAmount_${row}`] || (
          <input
            className={`center-align no-border narrow-column ${
              props.greyBackground ? "grey-background" : ""
            }`}
            type="text"
            id={`paymentCentAmount_${row}`}
            name={`paymentCentAmount_${row}`}
            defaultValue={rowData[`paymentCentAmount_${row}`]}
            onChange={props.handleChange}
          />
        )}
      </td>
      <td className="table-border">
        {prepopulatedRows[`checkMark_${row}`] || (
          <input
            className={`center-align no-border register-medium-col ${
              props.greyBackground ? "grey-background" : ""
            }`}
            type="text"
            id={`checkMark_${row}`}
            name={`checkMark_${row}`}
            defaultValue={rowData[`checkMark_${row}`]}
            onChange={props.handleChange}
          />
        )}
      </td>
      <td className="table-border">
        {prepopulatedRows[`fee_${row}`] || (
          <input
            className={`center-align no-border register-medium-col ${
              props.greyBackground ? "grey-background" : ""
            }`}
            type="text"
            id={`fee_${row}`}
            name={`fee_${row}`}
            defaultValue={rowData[`fee_${row}`]}
            onChange={props.handleChange}
          />
        )}
      </td>
      <td className="table-border">
        {prepopulatedRows[`depositDollarAmount_${row}`] || (
          <input
            className={`center-align no-border register-large-medium-col ${
              props.greyBackground ? "grey-background" : ""
            }`}
            type="text"
            id={`depositDollarAmount_${row}`}
            name={`depositDollarAmount_${row}`}
            defaultValue={rowData[`depositDollarAmount_${row}`]}
            onChange={props.handleChange}
          />
        )}
      </td>
      <td className="table-border">
        {prepopulatedRows[`depositCentAmount_${row}`] || (
          <input
            className={`center-align no-border narrow-column ${
              props.greyBackground ? "grey-background" : ""
            }`}
            type="text"
            id={`depositCentAmount_${row}`}
            name={`depositCentAmount_${row}`}
            defaultValue={rowData[`depositCentAmount_${row}`]}
            onChange={props.handleChange}
          />
        )}
      </td>
      <td className="table-border">
        {prepopulatedRows[`balanceDollarAmount_${row}`] || (
          <input
            className={`center-align no-border register-medium-col ${
              props.greyBackground ? "grey-background" : ""
            }`}
            type="text"
            id={`balanceDollarAmount_${row}`}
            name={`balanceDollarAmount_${row}`}
            defaultValue={rowData[`balanceDollarAmount_${row}`]}
            onChange={props.handleChange}
          />
        )}
      </td>
      <td className="table-border">
        {prepopulatedRows[`balanceCentAmount_${row}`] || (
          <input
            className={`center-align no-border narrow-column ${
              props.greyBackground ? "grey-background" : ""
            }`}
            type="text"
            id={`balanceCentAmount_${row}`}
            name={`balanceCentAmount_${row}`}
            defaultValue={rowData[`balanceCentAmount_${row}`]}
            onChange={props.handleChange}
          />
        )}
      </td>
    </tr>
  );
}
export { RegisterSlip };
