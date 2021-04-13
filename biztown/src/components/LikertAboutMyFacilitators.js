import React from "react";
import LikertTableRow from "./LikertTableRow";
import { Table } from "reactstrap";

const LikertAboutMyFacilitators = (props) => {
  const responses = [
    "Disagree",
    "Slightly Disagree",
    "Slightly Agree",
    "Agree",
  ];

  const values = ["1", "2", "3", "4"];

  const prompts = [
    "My instructor/volunteer made a connection between real life and what I learned in the classroom.",
    "My instructor/volunteer helped me to realize the importance of staying in school.",
    "My instructor/volunteer’s personal stories motivated me.",
  ];

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>ABOUT MY FACILITATORS...</th>
            <th className="likert-option">Disagree</th>
            <th className="likert-option">Slightly Disagree</th>
            <th className="likert-option">Slightly Agree</th>
            <th className="likert-option">Agree</th>
          </tr>
        </thead>
        <tbody>
          {prompts.map((prompt, idx) => (
            <LikertTableRow
              greyBackground={idx % 2 ? "grey-background" : null}
              key={prompt}
              data={props.data}
              handleChange={props.handleChange}
              responses={responses}
              values={values}
              questionId={`q${idx + 33}_answer`}
              prompt={prompt}
              idx={idx}
              aboutMyFacilitators={true}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default LikertAboutMyFacilitators;
