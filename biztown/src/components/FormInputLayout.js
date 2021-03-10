import "../formInput.css";
import React, { Component, Fragment, Redirect } from "react";
import { AboutSection } from "./AboutSection.js";
import { MultipleChoiceSection } from "./MultipleChoiceSection.js";
import { FreeResponseSection } from "./FreeResponseSection.js";
import DataManager from "../modules/DataManager";
import AboutMe from "./AboutMe";
import AboutMyFuture from "./AboutMyFuture";
import AboutMyFacilitators from "./AboutMyFacilitators";
import headerLogo from "./../JAInspiringHeader.png";

class FormInputLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      aboutData: {},
      schoolData: {},
      multipleChoiceData: {},
      freeResponseData: {
        depositForm: {
          prepopulatedRows: {
            rowSubtitle_2: "LIST CHECKS SINGLY",
            dollarAmount_2: "62",
            centAmount_2: "00",
            rowSubtitle_5: "SUBTITLE",
            rowSubtitle_6: "LESS CASH RECEIVED",
            rowSubtitle_7: "NET DEPOSIT",
          },
          rowEntries: {},
        },
        checkSlip: {},
        registerEntries: {
          prepopulatedRows: {
            entryNumber_0: "007",
            date_0: "3/14",
            transactionDesc_0: "Macy's",
            paymentDollarAmount_0: "3",
            paymentCentAmount_0: "75",
            date_2: "3/14",
          },
          rowEntries: {},
        },
      },
      personalFinanceData: {},
    };
  }

  handleAboutSectionChange = (event) => {
    const { name, value } = event.target;
    if (name === "schoolDistrict") {
      this.setInitialSchoolInfo(value);
    } else {
      this.setState((prevState) => {
        var aboutData = JSON.parse(JSON.stringify(prevState.aboutData));
        aboutData[name] = value;
        return { aboutData };
      });
    }
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

  handleFreeResponseSectionChange = (bankFormType, event) => {
    const { name, value } = event.target;
    if (bankFormType === "checkSlip") {
      this.setState((prevState) => {
        var freeResponseData = JSON.parse(
          JSON.stringify(prevState.freeResponseData)
        );
        freeResponseData[bankFormType][name] = value;
        return { freeResponseData };
      });
    } else {
      this.setState((prevState) => {
        var freeResponseData = JSON.parse(
          JSON.stringify(prevState.freeResponseData)
        );
        freeResponseData[bankFormType]["rowEntries"][name] = value;
        return { freeResponseData };
      });
    }
  };

  setSchoolData = (schoolData) => {
    this.setState({ schoolData });
    // initialise to first school district
    this.setInitialSchoolInfo(Object.keys(schoolData)[0]);
  };

  setInitialSchoolInfo = (schoolDistrict) => {
    var schoolData = this.state.schoolData;
    var aboutData = JSON.parse(JSON.stringify(this.state.aboutData));
    var school = schoolData[schoolDistrict][0].id;
    aboutData = { ...aboutData, schoolDistrict, school };
    this.setState({ aboutData });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // about section
    var aboutSectionAnswerObj = { ...this.state.aboutData };
    // if other grade is included, submit other value as grade in form
    if (aboutSectionAnswerObj.otherGrade) {
      aboutSectionAnswerObj.grade = aboutSectionAnswerObj.otherGrade;
      aboutSectionAnswerObj.otherGrade = null;
    }
    // remove school district from response
    aboutSectionAnswerObj.schoolDistrict = null;

    // format free response data
    var depositFormData = this.state.freeResponseData.depositForm
      .rowEntries;
    var depositFormAnswerObj = {
      q11_answer: `${depositFormData.dollarAmount_5}.${depositFormData.centAmount_5}`,
      q12_answer: `${depositFormData.dollarAmount_6}.${depositFormData.centAmount_6}`,
      q13_answer: `${depositFormData.dollarAmount_7}.${depositFormData.centAmount_7}`,
    };
    var registerFormData = this.state.freeResponseData.registerEntries
      .rowEntries;
    var registerFormAnswerObj = {
      q17_answer: `${registerFormData.balanceDollarAmount_0}.${registerFormData.balanceCentAmount_0}`,
      q18_answer: `${registerFormData.balanceDollarAmount_1}.${registerFormData.balanceCentAmount_1}`,
      q19_answer: registerFormData.transactionDesc_2,
      q20_answer: `${registerFormData.paymentDollarAmount_2}.${registerFormData.paymentCentAmount_2}`,
      q21_answer: `${registerFormData.balanceDollarAmount_2}.${registerFormData.balanceCentAmount_2}`,
      q22_answer: `${registerFormData.balanceDollarAmount_3}.${registerFormData.balanceCentAmount_3}`,
    };

    // construct completed form from different objects
    var completedForm = {
      ...depositFormAnswerObj,
      ...registerFormAnswerObj,
      ...aboutSectionAnswerObj,
      ...this.state.multipleChoiceData,
      ...this.state.freeResponseData.checkSlip,
    };
    console.log("completedForm", completedForm);

    var submitPath = this.props.posttest
      ? "postassessment/"
      : "preassessment/";
    DataManager.post(submitPath, completedForm).then(() => {
      <Redirect to="/completionPage" />;
    });
  };

  _next = (e) => {
    // this.handleSubmit(e)
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 5 ? 6 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
    e.preventDefault();
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
    if (currentStep === 5 && this.props.preTest) {
      return (
        <button className="btn btn-success btn-block float-right navigation-btn">
          Submit
        </button>
      );
    } else if (currentStep < 6) {
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
            JA BizTown {this.props.postTest ? "Post" : "Pre"}-Program
            Survey
          </h2>

          <form
            className="form-body"
            onSubmit={this.handleSubmit}
            style={{ paddingTop: "10px" }}
          >
            {currentStep === 1 && (
              <AboutSection
                handleChange={this.handleAboutSectionChange}
                setSchoolData={this.setSchoolData}
                data={this.state.aboutData}
                schoolData={this.state.schoolData}
              />
            )}
            {currentStep === 2 && (
              <MultipleChoiceSection
                preTest={this.props.preTest}
                handleChange={this.handleMultipleSectionChange}
                data={this.state.multipleChoiceData}
              />
            )}
            {currentStep === 3 && (
              <FreeResponseSection
                handleChange={this.handleFreeResponseSectionChange}
                data={this.state.freeResponseData}
              />
            )}
            {currentStep === 4 && <AboutMe />}
            {currentStep === 5 && <AboutMyFuture />}
            {this.props.postTest && currentStep === 6 && (
              <AboutMyFacilitators />
            )}
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
