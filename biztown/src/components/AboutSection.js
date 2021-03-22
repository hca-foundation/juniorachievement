import { Component } from "react";
import DataManager from "../modules/DataManager";
import { Input } from "reactstrap";

const participationOptions = [
  "This is my first time",
  "1",
  "2",
  "3",
  "4",
  "5 or more times",
];
const gradeOptions = ["4th", "5th", "6th", "7th", "Other"];

class AboutSection extends Component {
  /*
        TODO:
        * update to use react-dates. date input not supported in safari.
  */
  render() {
    if (!Object.keys(this.props.schoolData).length) {
      DataManager.getAll("schools").then((data) => {
        var schoolMap = {};
        data.results.forEach((school) => {
          if (!schoolMap[school.district]) {
            schoolMap[school.district] = [];
          }
          schoolMap[school.district].push(school);
        });
        this.props.setSchoolData(schoolMap);
      });
    }

    return (
      <div>
        <h3>Tell Us About You</h3>
        <ol>
          <li className="form-group">
            <div className="flex-column-container">
              <label className="form-question">
                What are the first three letters of your last name?
              </label>
              <input
                className="form-control form-control-text-input"
                id="name"
                name="name"
                type="text"
                defaultValue={this.props.data.name}
                maxLength="3"
                onChange={this.props.handleChange}
                required
              />
            </div>
          </li>
          <li className="form-group">
            <div className="flex-column-container">
              <label className="form-question">
                When were you born?
              </label>
              <div>
                <input
                  className="form-control"
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  defaultValue={this.props.data.birthDate}
                  onChange={this.props.handleChange}
                  required
                />
              </div>
            </div>
          </li>
          <li className="form-group">
            <div className="flex-column-container">
              <label className="form-question">
                What grade are you in?
              </label>
              <GradeComponent
                grade={this.props.data.grade}
                handleChange={this.props.handleChange}
              />
            </div>
            {this.props.data.grade === "Other" && (
              <div className="flex-column-container">
                <input
                  className="form-control form-control-text-input"
                  id="otherGrade"
                  name="otherGrade"
                  type="text"
                  defaultValue={this.props.data.otherGrade}
                  onChange={this.props.handleChange}
                />
              </div>
            )}
          </li>
          <li className="form-group">
            <div className="flex-column-container">
              <label className="form-question">
                Where do you go to school?
              </label>
              <div className="flex-container">
                <label className="form-question">
                  School District:
                </label>
                <SchoolDisctictComponent
                  schoolDistrict={this.props.data.schoolDistrict}
                  schoolData={this.props.schoolData}
                  handleChange={this.props.handleChange}
                />
              </div>
              <div className="flex-container">
                <label className="form-question">School Name:</label>
                <SchoolSelectionComponent
                  school={this.props.data.school}
                  schoolOptions={
                    this.props.schoolData[
                      this.props.data.schoolDistrict
                    ]
                  }
                  handleChange={this.props.handleChange}
                />
              </div>
            </div>
          </li>
          <li className="form-group">
            <div className="flex-column-container">
              <label className="form-question">
                What is your teacher's last name?
              </label>
              <input
                className="form-control form-control-text-input"
                id="teacher"
                name="teacher"
                type="text"
                defaultValue={this.props.data.teacher}
                onChange={this.props.handleChange}
                required
              />
            </div>
          </li>
          <li className="form-group">
            <div className="flex-column-container">
              <label>
                NOT including this session, how many times have you
                participated in JA in the past?
              </label>
              <div className="multiple-choice-answer-container">
                <ParticipationComponent
                  participation={this.props.data.participation}
                  handleChange={this.props.handleChange}
                />
              </div>
            </div>
          </li>
        </ol>
      </div>
    );
  }
}

function GradeComponent(props) {
  var gradeInput = gradeOptions.map((gradeOption) => {
    return (
      <div className="flex-container" key={gradeOption}>
        <input
          className="form-control-radio-btn"
          type="radio"
          id="grade"
          name="grade"
          value={gradeOption}
          checked={props.grade === gradeOption}
          onChange={props.handleChange}
          required
        />
        <label
          className="form-control-radio-label"
          htmlFor={gradeOption}
        >
          {gradeOption}
        </label>
      </div>
    );
  });
  return <div> {gradeInput} </div>;
}

function ParticipationComponent(props) {
  var participationInput = participationOptions.map(
    (participationOption) => {
      return (
        <div
          className="multiple-choice-answer"
          key={participationOption}
        >
          <input
            className="form-control-radio-btn"
            type="radio"
            id="participation"
            name="participation"
            value={participationOption}
            checked={props.participation === participationOption}
            onChange={props.handleChange}
            required
          />
          <label
            className="form-control-radio-label"
            htmlFor={participationOption}
          >
            {participationOption}
          </label>
        </div>
      );
    }
  );
  return <div>{participationInput}</div>;
}

function SchoolDisctictComponent(props) {
  var schoolDistricts = Object.keys(props.schoolData);
  var schoolDistrictOptions =
    schoolDistricts &&
    schoolDistricts.map((schoolDistrict) => {
      return (
        <option
          key={schoolDistrict}
          name="schoolDistrictOption"
          value={schoolDistrict}
        >
          {schoolDistrict}
        </option>
      );
    });
  return (
    <Input
      type="select"
      name="schoolDistrict"
      id="schoolDistrict"
      onChange={props.handleChange}
      defaultValue={props.schoolDistrict}
    >
      {schoolDistrictOptions}
    </Input>
  );
}

function SchoolSelectionComponent(props) {
  var schoolOptions =
    props.schoolOptions &&
    props.schoolOptions.map((school) => {
      return (
        <option key={school.id} name="schoolOption" value={school.id}>
          {school.school_name}
        </option>
      );
    });
  return (
    <Input
      type="select"
      name="school"
      id="school"
      onChange={props.handleChange}
      defaultValue={props.schoolDistrict || null}
    >
      {schoolOptions}
    </Input>
  );
}

export { AboutSection };
