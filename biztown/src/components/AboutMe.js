import React, { useRef } from "react";
import TableRow from "./TableRow";
import { Table } from "reactstrap";

const AboutMe = (props) => {
  const prompts = [
    "I plan to start using a personal budget.",
    "I intend to start saving money for the future.",
    "I will think more about financial issues in my future.",
  ];

  const responses = [
    { name: "Not Likely", value: 1 },
    { name: "Somewhat Likely", value: 2 },
    { name: "Very Likely", value: 3 },
  ];

  return (
    <>
      <Table bordered>
        <thead>
          <tr>
            <th></th>
            <th>ABOUT ME...</th>
            <th>Not Likely</th>
            <th>Somewhat Likely</th>
            <th>Very Likely</th>
          </tr>
        </thead>
        <tbody>
          {prompts.map((prompt, idx) => (
            <TableRow
              key={prompt}
              data={props.data}
              handleChange={props.handleChange}
              responses={responses}
              prompt={prompt}
              idx={idx}
              aboutMe={true}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default AboutMe;
