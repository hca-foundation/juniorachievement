import "../formInput.css";
import React, { Component, Fragment, Redirect } from "react";
import { AboutSection } from "./AboutSection.js";
import { MultipleChoiceSection } from "./MultipleChoiceSection.js";
import { DepositFormSection } from "./DepositFormSection.js";
import DataManager from "../modules/DataManager";
import AboutMe from "./AboutMe";
import AboutMyFuture from "./AboutMyFuture";
import AboutMyFacilitators from "./AboutMyFacilitators";
import headerLogo from "../images/bizTownLogo.png";

class FormInputLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      aboutData: {},
      multipleChoiceData: {},
      password: "",
      pageTitle: [
        "Tell Us About You",
        "Questions About The Program Content",
        "Fill in the appropriate blanks to complete the checkbook components",
      ],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleAboutSectionChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      var aboutData = JSON.parse(JSON.stringify(prevState.aboutData));
      aboutData[name] = value;
      return { aboutData };
    });
  };

  handleMultipleSectionChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      var multipleChoiceData = JSON.parse(
        JSON.stringify(prevState.multipleChoiceData)
      );
      multipleChoiceData[name] = value;
      return { multipleChoiceData };
    });
  };

  handleBehaviouralAboutMeChange = (event) => {
    console.log("handleBehaviouralAboutMeChange", event);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var completedForm = {
      ...this.state.aboutData,
      ...this.state.multipleChoiceData,
    };
    DataManager.post("pretest", completedForm).then(() => {
      <Redirect to="/completionPage" />;
    });
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 5 ? 6 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary navigation-btn"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 6) {
      return (
        <button
          className="btn btn-primary float-right navigation-btn"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  submitButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 6) {
      return (
        <button className="btn btn-success btn-block float-right navigation-btn">
          Submit
        </button>
      );
    }
    return null;
  }

  render() {
    var currentStep = this.state.currentStep;
    return (
      <div
        className="form-input"
        style={{
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Fragment>
          <img src={headerLogo} alt="Girl in a jacket" width="100%" />
          <h2
            style={{
              textAlign: "center",
              background: "#d59844",
              padding: "20px",
              marginTop: "0",
            }}
          >
            JA BizTown Post Program Survey
          </h2>

          <form
            className="form-body"
            onSubmit={this.handleSubmit}
            style={{ paddingTop: "10px" }}
          >
            {currentStep === 1 && (
              <AboutSection
                handleChange={this.handleAboutSectionChange}
                data={this.state.aboutData}
              />
            )}
            {currentStep === 2 && (
              <MultipleChoiceSection
                handleChange={this.handleMultipleSectionChange}
                data={this.state.multipleChoiceData}
              />
            )}
            {currentStep === 3 && (
              <DepositFormSection
                handleChange={this.handleChange}
                password={this.state.password}
              />
            )}
            {currentStep === 4 && (
              <AboutMe
                handleChange={this.handleBehaviouralAboutMeChange}
              />
            )}
            {currentStep === 5 && <AboutMyFuture />}
            {currentStep === 6 && <AboutMyFacilitators />}
            <div className="page-nav-buttons">
              {this.previousButton()}
              {this.nextButton()}
              {this.submitButton()}
            </div>
          </form>
        </Fragment>
      </div>
    );
  }
}

export { FormInputLayout };
