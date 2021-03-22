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
      aboutData: {
        name: "",
        birthDate: "",
        grade: "",
        teacher: "",
        participation: "",
        school: "",
        schoolDistrict: "",
      },
      schoolData: {},
      multipleChoiceData: {
        q01_answer: "",
        q02_answer: "",
        q03_answer: "",
        q04_answer: "",
        q05_answer: "",
        q06_answer: "",
        q07_answer: "",
        q08_answer: "",
        q09_answer: "",
        q10_answer: "",
      },
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
          rowEntries: {
            q11_answer: "",
            q12_answer: "",
            q13_answer: "",
          },
        },
        checkSlip: {
          q14_answer: "",
          q15_answer: "",
          q16_answer: "",
        },
        registerEntries: {
          prepopulatedRows: {
            entryNumber_0: "007",
            date_0: "3/14",
            transactionDesc_0: "Macy's",
            paymentDollarAmount_0: "3",
            paymentCentAmount_0: "75",
            date_2: "3/14",
          },
          rowEntries: {
            q17_answer: "",
            q18_answer: "",
            q19_answer: "",
            q20_answer: "",
            q21_answer: "",
            q22_answer: "",
          },
        },
      },
      personalFinanceData: {
        aboutMe: {
          q23_answer: "",
          q24_answer: "",
          q25_answer: "",
        },
        aboutMyFuture: {
          q26_answer: "",
          q27_answer: "",
          q28_answer: "",
          q29_answer: "",
          q30_answer: "",
          q31_answer: "",
          q32_answer: "",
        },
        aboutMyFacilitators: {
          q33_answer: "",
          q34_answer: "",
          q35_answer: "",
        },
      },
    };
  }

  handlePersonalFinanceSectionChange = (section, event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      var personalFinanceData = JSON.parse(
        JSON.stringify(prevState.personalFinanceData)
      );
      personalFinanceData[section][name] = value;
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
    var aboutSectionData = { ...this.state.aboutData };

    // if other grade is included, submit other value as grade in form
    if (aboutSectionData.otherGrade) {
      aboutSectionData.grade = aboutSectionData.otherGrade;
    }

    this.props.preTest
      ? (aboutSectionData["pretest"] = true)
      : (aboutSectionData["pretest"] = false);

    // remove school district & otherGrade(if exists) from response and add pretest property
    var aboutSectionAnswerObj = {
      last_name: aboutSectionData.name,
      birth_date: aboutSectionData.birthDate,
      class_grade: aboutSectionData.grade,
      teacher: aboutSectionData.teacher,
      school: aboutSectionData.school,
      previous_participation: aboutSectionData.participation,
      pretest: aboutSectionData.pretest,
    };

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
      q18_answer: registerFormData.entryNumber_2,
      q19_answer: registerFormData.transactionDesc_2,
      q20_answer: `${registerFormData.paymentDollarAmount_2}.${registerFormData.paymentCentAmount_2}`,
      q21_answer: `${registerFormData.balanceDollarAmount_2}.${registerFormData.balanceCentAmount_2}`,
      q22_answer: "",
    };

    // construct personal finance data
    var personalFinanceData = this.state.personalFinanceData;
    var personalFinanceAnswerObj = {
      q23_answer: personalFinanceData.aboutMe.q23_answer,
      q24_answer: personalFinanceData.aboutMe.q24_answer,
      q25_answer: personalFinanceData.aboutMe.q25_answer,
      q26_answer: personalFinanceData.aboutMyFuture.q26_answer,
      q27_answer: personalFinanceData.aboutMyFuture.q27_answer,
      q28_answer: personalFinanceData.aboutMyFuture.q28_answer,
      q29_answer: personalFinanceData.aboutMyFuture.q29_answer,
      q30_answer: personalFinanceData.aboutMyFuture.q30_answer,
      q31_answer: personalFinanceData.aboutMyFuture.q31_answer,
      q32_answer: personalFinanceData.aboutMyFuture.q32_answer,
      q33_answer: personalFinanceData.aboutMyFacilitators.q33_answer,
      q34_answer: personalFinanceData.aboutMyFacilitators.q34_answer,
      q35_answer: personalFinanceData.aboutMyFacilitators.q35_answer,
    };

    // construct completed form from different objects
    var completedForm = {
      ...depositFormAnswerObj,
      ...registerFormAnswerObj,
      ...aboutSectionAnswerObj,
      ...this.state.multipleChoiceData,
      ...this.state.freeResponseData.checkSlip,
      ...personalFinanceAnswerObj,
    };

    DataManager.post("assessments/", completedForm).then(() => {
      this.props.history.push("/completionpage");
    });
  };

  validatePage = (pageObj) => {
    // this section's questions aren't required
    if (pageObj === "fill-in-the-blank-page") {
      return true;
    }

    for (const question in pageObj) {
      if (pageObj[question] === "") {
        alert("Please respond to all questions.");
        return false;
      }
    }
    return true;
  };

  _next = (e) => {
    const pages = [
      this.state.aboutData,
      this.state.multipleChoiceData,
      "fill-in-the-blank",
      this.state.personalFinanceData.aboutMe,
      this.state.personalFinanceData.aboutMyFuture,
      this.state.personalFinanceData.aboutMyFacilitators,
    ];

    let currentStep = this.state.currentStep;

    const incrementStepAndUpdateState = () => {
      currentStep++;
      this.setState({ currentStep: currentStep });
      e.preventDefault();
    };

    if (this.validatePage(pages[currentStep - 1])) {
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
              <AboutMe
                handleChange={(e) =>
                  this.handlePersonalFinanceSectionChange("aboutMe", e)
                }
                data={this.state.personalFinanceData.aboutMe}
              />
            )}
            {currentStep === 5 && (
              <AboutMyFuture
                handleChange={(e) =>
                  this.handlePersonalFinanceSectionChange(
                    "aboutMyFuture",
                    e
                  )
                }
                data={this.state.personalFinanceData.aboutMyFuture}
              />
            )}

            {this.props.postTest && currentStep === 6 && (
              <AboutMyFacilitators
                handleChange={(e) =>
                  this.handlePersonalFinanceSectionChange(
                    "aboutMyFacilitators",
                    e
                  )
                }
                data={
                  this.state.personalFinanceData.aboutMyFacilitators
                }
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
