import React, { useRef, Redirect } from "react";
import TableRow from "./TableRow";
import DataManager from "../modules/DataManager";
import { Table } from "reactstrap";

const AboutMyFacilitators = () => {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();

  const inputs = [input1, input2, input3];

  const handleQuestions33To35 = (e) => {
    e.preventDefault();

    const questions33To35 = {
      q33_score: input1.current.value,
      q34_score: input2.current.value,
      q35_score: input3.current.value,
    };

    DataManager.post("posttest", questions33To35).then(() => {
      <Redirect to="/" />;
    });
  };

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
              prompt={prompt}
              inputs={inputs}
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
