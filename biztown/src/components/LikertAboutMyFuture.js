import React from "react";
import LikertTableRow from "./LikertTableRow";
import { Table } from "reactstrap";

const LikertAboutMyFuture = (props) => {
  const prompts = [
    "I will set goals for my future.",
    "I feel in control over how my future will turn out.",
    "Doing well at school is important to me.",
    "I expect to graduate from high school.",
    "I plan to attend at least two years in college.",
    "I think I will probably graduate from college.",
    "I believe I can create my own future.",
  ];

  const responses = [
    "Disagree",
    "Slightly Disagree",
    "Slightly Agree",
    "Agree",
  ];

  const values = ["1", "2", "3", "4"];

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>ABOUT MY FUTURE...</th>
            <th>Disagree</th>
            <th>Slightly Disagree</th>
            <th>Slightly Agree</th>
            <th>Agree</th>
          </tr>
        </thead>
        <tbody>
          {prompts.map((prompt, idx) => (
            <LikertTableRow
              coloredBackground={idx % 2}
              key={prompt}
              data={props.data}
              handleChange={props.handleChange}
              responses={responses}
              values={values}
              questionId={`q${idx + 26}_answer`}
              prompt={prompt}
              idx={idx}
              aboutMyFuture={true}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default LikertAboutMyFuture;
