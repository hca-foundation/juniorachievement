import React from "react";
import TableRow from "./TableRow";
import { Table } from "reactstrap";

const AboutMyFacilitators = (props) => {
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
            <th>Disagree</th>
            <th>Slightly Disagree</th>
            <th>Slightly Agree</th>
            <th>Agree</th>
          </tr>
        </thead>
        <tbody>
          {prompts.map((prompt, idx) => (
            <TableRow
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

export default AboutMyFacilitators;
