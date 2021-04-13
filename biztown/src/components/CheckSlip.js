import React, { Component } from "react";

import "../App.css";
import "../checkInput.css";

class CheckSlip extends Component {
  /*
        TODO:
        * add styles to classes
    */
  render() {
    return (
      <div
        className="deposit-form flex-container deposit-form-parent"
        style={{ overflowX: "scroll" }}
      >
        <div
          className="deposit-form flex-container"
          style={{
            height: "280px",
            width: "700px",
            border: "1px solid black",
            flex: "0 0 auto",
            flexDirection: "column",
            padding: "15px",
          }}
        >
          <div style={{ marginLeft: "auto" }}>007</div>
          <div
            className="flex-container"
            style={{ textAlign: "left", marginTop: "15px" }}
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
          <div style={{ textAlign: "right", marginTop: "15px" }}>
            <span
              className="table-border-bottom"
              style={{
                textAlign: "center",
                padding: "15px 15px 0 15px",
                marginRight: "15px",
              }}
            >
              March 14,
            </span>
            <span>20</span>
            <span
              className="table-border-bottom"
              style={{ textAlign: "center", padding: "5px 5px 0 5px" }}
            >
              21
            </span>
          </div>
          <div className="flex-container" style={{ marginTop: "15px" }}>
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
                  paddingTop: "5px",
                }}
                id="q14_answer"
                name="q14_answer"
                type="text"
                defaultValue={this.props.data.q14_answer}
                onChange={this.props.handleChange}
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
              style={{ padding: "2px 30px 0 30px", marginLeft: "10px" }}
            >
              3.75
            </span>
          </div>
          <div
            className="flex-container"
            style={{ textAlign: "right", marginTop: "15px" }}
          >
            <div>
              <input
                style={{
                  border: "solid black",
                  borderWidth: "0 0 1px 0",
                  marginRight: "20px",
                  width: "600px",
                  paddingTop: "5px",
                }}
                id="q15_answer"
                name="q15_answer"
                type="text"
                defaultValue={this.props.data.q15_answer}
                onChange={this.props.handleChange}
              />
            </div>
            <span>Dollars</span>
          </div>
          <div>
            <h2
              style={{
                marginTop: "10px",
                fontFamily: "Arial, Times, serif",
                fontSize: "1.75em",
                fontWeight: "lighter",
                marginLeft: "20px",
              }}
            >
              JA BizTown<sup>&#x00AE;</sup> Bank
            </h2>
          </div>
          <div className="flex-container">
            <div>Memo</div>
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
                  marginLeft: "30px",
                  paddingTop: "5px",
                }}
                id="q16_answer"
                name="q16_answer"
                type="text"
                defaultValue={this.props.data.q16_answer}
                onChange={this.props.handleChange}
              />
            </div>
          </div>
          <div
            style={{
              textAlign: "right",
              marginTop: "15px",
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
          </div>
        </div>
      </div>
    );
  }
}

export { CheckSlip };
