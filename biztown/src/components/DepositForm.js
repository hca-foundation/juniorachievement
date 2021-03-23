import React, { Component } from "react";
import bizTownBank from "../images/bizTownLogo.png";

import "../App.css";
import "../checkInput.css";

class DepositForm extends Component {
  render() {
    return (
      <div
        className="deposit-form flex-container deposit-form-parent"
        style={{ overflowX: "scroll" }}
      >
        <div
          className="deposit-form flex-container"
          style={{
            height: "240px",
            width: "700px",
            border: "1px solid black",
            flex: "0 0 auto",
            flexDirection: "column",
            padding: "15px",
          }}
        >
          <div className="flex-container">
            <div>
              <div
                className="center-align"
                style={{ marginBottom: "30px" }}
              >
                <b>DEPOSIT TICKET</b>
              </div>
              <div className="flex-container">
                <span>
                  <b>Name</b>
                </span>
                <span
                  className="flex-item-grow table-border-bottom"
                  style={{
                    textAlign: "center",
                    marginRight: "15px",
                    marginLeft: "10px",
                    width: "275px",
                  }}
                >
                  Mark Hill
                </span>
              </div>
              <img
                src={bizTownBank}
                alt="BizTown Bank Logo"
                style={{ width: "300px", marginTop: "15px" }}
              />
              <div
                className="flex-container"
                style={{ marginTop: "30px" }}
              >
                <b>Date</b>
                <span
                  className="flex-item-grow table-border-bottom center-align"
                  style={{ marginLeft: "10px", marginRight: "15px" }}
                >
                  March 14
                </span>
                <b>20</b>
                <span
                  className="flex-item-grow table-border-bottom center-align"
                  style={{ marginRight: "15px" }}
                >
                  21
                </span>
              </div>
              <div className="deposit-form-small-text center-align">
                Deposits may not be available for immediate withdrawal.
              </div>
              <div
                className="table-border-bottom center-align"
                style={{
                  fontFamily: "cursive",
                  marginTop: "15px",
                  marginRight: "15px",
                }}
              >
                Mark Hill
              </div>
              <div
                className="deposit-form-small-text center-align"
                style={{ padding: "0 20px" }}
              >
                <i>Signature required for cash received</i>
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              <DepositFillableTable
                handleChange={this.props.handleChange}
                rowData={this.props.data}
              />
              <div
                className="flex-container"
                style={{ marginLeft: "10px", marginTop: "15px" }}
              >
                <span>Acct. #</span>
                <span
                  className="flex-item-grow table-border-bottom"
                  style={{ textAlign: "center", marginLeft: "10px" }}
                >
                  132
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function DepositFillableTable(props) {
  var rowData = props.rowData.rowEntries;
  var prepopulatedRows = props.rowData.prepopulatedRows;
  var repeatedRows = [...Array(6).keys()].map((index) => {
    var row = index + 2;
    return (
      <tr key={`depositRow_${row}`}>
        <td className="table-border center-align" colSpan="2">
          {prepopulatedRows[`rowSubtitle_${row}`] || (
            <input
              className="no-border center-align"
              style={{ width: "200px" }}
              type="text"
              id={`rowSubtitle_${row}`}
              name={`rowSubtitle_${row}`}
              defaultValue={rowData[`rowSubtitle_${row}`]}
              onChange={props.handleChange}
            />
          )}
        </td>
        <td className="table-border dollar-amount">
          {prepopulatedRows[`dollarAmount_${row}`] || (
            <input
              className="no-border dollar-amount"
              type="text"
              id={`dollarAmount_${row}`}
              name={`dollarAmount_${row}`}
              defaultValue={rowData[`dollarAmount_${row}`]}
              onChange={props.handleChange}
            />
          )}
        </td>
        <td className="table-border" style={{ textAlign: "left" }}>
          .
          {prepopulatedRows[`centAmount_${row}`] || (
            <input
              className="no-border narrow-column"
              type="text"
              id={`centAmount_${row}`}
              name={`centAmount_${row}`}
              defaultValue={rowData[`centAmount_${row}`]}
              onChange={props.handleChange}
            />
          )}
        </td>
      </tr>
    );
  });
  return (
    <table style={{ width: "360px" }}>
      <tbody className="deposit-form center-align">
        <tr>
          <td
            className="table-border"
            rowSpan="2"
            style={{ width: "100px" }}
          >
            CASH
          </td>
          <td className="table-border">CURRENCY</td>
          <td className="table-border dollar-amount">
            <input
              className="no-border dollar-amount"
              type="text"
              id="dollarAmount_0"
              name="dollarAmount_0"
              defaultValue={rowData.dollarAmount_0}
              onChange={props.handleChange}
            />
          </td>
          <td className="table-border" style={{ textAlign: "left" }}>
            .
            <input
              className="no-border narrow-column"
              type="text"
              id="centAmount_0"
              name="centAmount_0"
              defaultValue={rowData.centAmount_0}
              onChange={props.handleChange}
            />
          </td>
        </tr>
        <tr>
          <td className="table-border">COIN</td>
          <td className="table-border">
            <input
              className="no-border dollar-amount"
              type="text"
              id="dollarAmount_1"
              name="dollarAmount_1"
              defaultValue={rowData.dollarAmount_1}
              onChange={props.handleChange}
            />
          </td>
          <td className="table-border" style={{ textAlign: "left" }}>
            .
            <input
              className="no-border narrow-column"
              type="text"
              id="centAmount_1"
              name="centAmount_1"
              defaultValue={rowData.centAmount_1}
              onChange={props.handleChange}
            />
          </td>
        </tr>
        {repeatedRows}
      </tbody>
    </table>
  );
}

export { DepositForm };
