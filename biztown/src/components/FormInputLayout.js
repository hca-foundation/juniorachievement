import "../formInput.css";
import React, { Component, Fragment } from "react";
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

  // handleSectionChange = (event, section) => {
  //   const { name, value } = event.target;
  //   this.setState((prevState) => {
  //     var section = JSON.parse(JSON.stringify(prevState.section));
  //     sectionData[name] = value;
  //     return { sectionData };
  //   });
  // };

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

    console.log("completedForm", completedForm);

    var submitPath = this.props.postTest
      ? "postassessment/"
      : "preassessment/";
    DataManager.post(submitPath, completedForm).then(() => {
      this.props.history.push("/completionpage");
    });
  };

  validatePage = (requiredQuestions) => {
    for (let question of requiredQuestions) {
      const element = document.getElementById(`${question}`);

      if (document.getElementById(`${question}`).type === "radio") {
        const section = this.state.aboutData;

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
    // this.handleSubmit(e)

    const aboutDataKeys = [
      "name",
      "birthDate",
      "grade",
      "teacher",
      "participation",
      "school",
      "schoolDistrict",
    ];
    const multipleChoiceDataKeys = [
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
    ];

    const aboutMeKeys = ["q23_answer", "q24_answer", "q25_answer"];

    const aboutMyFutureKeys = [
      "q26_answer",
      "q27_answer",
      "q28_answer",
      "q29_answer",
      "q30_answer",
      "q31_answer",
      "q32_answer",
    ];

    const aboutMyFacilitatorsKeys = [
      "q33_answer",
      "q34_answer",
      "q35_answer",
    ];

    let currentStep = this.state.currentStep;

    if (currentStep === 1 && this.validatePage(aboutDataKeys)) {
      currentStep++;
      this.setState({ currentStep: currentStep });
      e.preventDefault();

      // const section = this.state.aboutData;

      // if (
      //   section.name &&
      //   section.birthDate &&
      //   section.grade &&
      //   section.teacher &&
      //   section.participation
      // ) {
      //   currentStep++;
      //   this.setState({ currentStep: currentStep });
      //   e.preventDefault();
      // }
    }

    // if (currentStep === 2) {
    //   const section = this.state.multipleChoiceData;

    //   if (
    //     section.q01_answer &&
    //     section.q02_answer &&
    //     section.q03_answer &&
    //     section.q04_answer &&
    //     section.q05_answer &&
    //     section.q06_answer &&
    //     section.q07_answer &&
    //     section.q08_answer &&
    //     section.q09_answer &&
    //     section.q10_answer
    //   ) {
    //     currentStep++;
    //     this.setState({ currentStep: currentStep });
    //     e.preventDefault();
    //   }
    // }

    // if (currentStep === 3) {
    //   currentStep++;
    //   this.setState({ currentStep: currentStep });
    //   e.preventDefault();
    // }

    // if (currentStep === 4) {
    //   const section = this.state.personalFinanceData;

    //   if (
    //     section.q23_answer &&
    //     section.q24_answer &&
    //     section.q25_answer
    //   ) {
    //     currentStep++;
    //     this.setState({ currentStep: currentStep });
    //     e.preventDefault();
    //   }
    // }

    // if (currentStep === 5 && this.props.postTest) {
    //   const section = this.state.personalFinanceData;

    //   if (
    //     section.q26_answer &&
    //     section.q27_answer &&
    //     section.q28_answer &&
    //     section.q29_answer &&
    //     section.q30_answer &&
    //     section.q31_answer &&
    //     section.q32_answer
    //   ) {
    //     currentStep++;
    //     this.setState({ currentStep: currentStep });
    //     e.preventDefault();
    //   }
    // }

    // currentStep = currentStep >= 5 ? 6 : currentStep + 1;
    // this.setState({
    //   currentStep: currentStep,
    // });
    // e.preventDefault();
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
            {currentStep === 4 && (
              <AboutMe
                handleChange={this.handlePersonalFinanceSectionChange}
                data={this.state.personalFinanceData}
              />
            )}
            {currentStep === 5 && (
              <AboutMyFuture
                handleChange={this.handlePersonalFinanceSectionChange}
                data={this.state.personalFinanceData}
              />
            )}

            {this.props.postTest && currentStep === 6 && (
              <AboutMyFacilitators
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
