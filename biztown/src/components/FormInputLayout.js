import "../formInput.css";
import React, { Component, Fragment } from "react";
import { AboutSection } from "./AboutSection.js";
import { MultipleChoiceSection } from "./MultipleChoiceSection.js";
import { FreeResponseSection } from "./FreeResponseSection.js";
import DataManager from "../modules/DataManager";
import LikertAboutMe from "./LikertAboutMe";
import LikertAboutMyFuture from "./LikertAboutMyFuture";
import LikertAboutMyFacilitators from "./LikertAboutMyFacilitators";
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
            rowSubtitle_5: "SUBTOTAL",
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

  handlePersonalFinanceSectionChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      var personalFinanceData = JSON.parse(
        JSON.stringify(prevState.personalFinanceData)
      );
      personalFinanceData[name] = value;
      return { personalFinanceData };
    });
  };

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
      ...this.state.personalFinanceData,
    };

    var submitPath = this.props.postTest
      ? "postassessment/"
      : "preassessment/";
    DataManager.post(submitPath, completedForm).then(() => {
      this.props.history.push("/completionpage");
    });
  };

  validatePage = (pageObj) => {
    for (let question of pageObj.keys) {
      const element = document.getElementById(`${question}`);

      if (document.getElementById(`${question}`).type === "radio") {
        const section = this.state[`${pageObj.title}`];

        if (!(element.name in section)) {
          alert(`Please choose an option for ${question}.`);
          return false;
        }
      }

      if (document.getElementById(`${question}`).value === "") {
        const editedString =
          question[0].toUpperCase() + question.substring(1);

        alert(`${editedString} must be filled out.`);
        return false;
      }
    }

    return true;
  };

  _next = (e) => {
    const aboutDataObj = {
      title: "aboutData",
      keys: [
        "name",
        "birthDate",
        "grade",
        "teacher",
        "participation",
        "school",
        "schoolDistrict",
      ],
    };

    const multipleChoiceDataObj = {
      title: "multipleChoiceData",
      keys: [
        "q01_answer",
        "q02_answer",
        "q03_answer",
        "q04_answer",
        "q05_answer",
        "q06_answer",
        "q07_answer",
        "q08_answer",
        "q09_answer",
        "q10_answer",
      ],
    };

    const likertAboutMeObj = {
      title: "personalFinanceData",
      keys: ["q23_answer", "q24_answer", "q25_answer"],
    };

    const likertAboutMyFutureObj = {
      title: "personalFinanceData",
      keys: [
        "q26_answer",
        "q27_answer",
        "q28_answer",
        "q29_answer",
        "q30_answer",
        "q31_answer",
        "q32_answer",
      ],
    };

    let currentStep = this.state.currentStep;

    const incrementStepAndUpdateState = () => {
      currentStep++;
      this.setState({ currentStep: currentStep });
      e.preventDefault();
    };

    if (currentStep === 1 && this.validatePage(aboutDataObj)) {
      incrementStepAndUpdateState();
      return;
    }

    if (currentStep === 2 && this.validatePage(multipleChoiceDataObj)) {
      incrementStepAndUpdateState();
      return;
    }

    if (currentStep === 3) {
      incrementStepAndUpdateState();
      return;
    }

    if (currentStep === 4 && this.validatePage(likertAboutMeObj)) {
      incrementStepAndUpdateState();
      return;
    }

    if (
      currentStep === 5 &&
      this.props.postTest &&
      this.validatePage(likertAboutMyFutureObj)
    ) {
      incrementStepAndUpdateState();
      return;
    }
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
      return null;
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

    if (
      (currentStep === 5 && this.props.preTest) ||
      currentStep === 6
    ) {
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
            {currentStep === 4 && (
              <LikertAboutMe
                handleChange={this.handlePersonalFinanceSectionChange}
                data={this.state.personalFinanceData}
              />
            )}
            {currentStep === 5 && (
              <LikertAboutMyFuture
                handleChange={this.handlePersonalFinanceSectionChange}
                data={this.state.personalFinanceData}
              />
            )}

            {this.props.postTest && currentStep === 6 && (
              <LikertAboutMyFacilitators
                handleChange={this.handlePersonalFinanceSectionChange}
                data={this.state.personalFinanceData}
              />
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
