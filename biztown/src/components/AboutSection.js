import React, { Component, useEffect, useState } from "react";
import DataManager from "../modules/DataManager";

class AboutSection extends Component {
  render() {
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
          {/* <li className="form-group">
            <div className="flex-column-container">
              <label>Which school do you attend?</label>
              <div className="">
                <SchoolComponent
                // participation={this.props.data.participation}
                // handleChange={this.props.handleChange}
                />
              </div>
            </div>
          </li> */}
        </ol>
      </div>
    );
  }
}

function GradeComponent(props) {
  var gradeOptions = ["4th", "5th", "6th", "7th", "Other"];
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
  var participationOptions = [
    "This is my first time",
    "1",
    "2",
    "3",
    "4",
    "5 or more times",
  ];
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

// const SchoolComponent = (props) => {
//   //GET SCHOOL DISTRICTS
//   const schoolDistricts = [];
//   // FILTER SCHOOLS ACCORDING TO DISTRICT
//   const [schools, setSchools] = useState();

//   useEffect(() => {
//     DataManager.getAll("schools").then((allSchools) => {
//       setSchools(allSchools);
//     });
//   }, []);

//   return (
//     <>
//       <select>
//         {schools.map((school) => (
//           <option value={school.school_name} key={school.school_name}>
//             {school.school_name}
//           </option>
//         ))}
//       </select>
//       ;
//     </>
//   );
// };

export { AboutSection };
