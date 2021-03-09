import React, { useRef, Redirect } from "react";
import TableRow from "./TableRow";
import DataManager from "../modules/DataManager";
import { Table } from "reactstrap";

const AboutMyFuture = () => {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  const input6 = useRef();
  const input7 = useRef();

  const inputs = [
    input1,
    input2,
    input3,
    input4,
    input5,
    input6,
    input7,
  ];

  const handleQuestions26To32 = (e) => {
    e.preventDefault();

    const questions26To32 = {
      q26_score: input1.current.value,
      q27_score: input2.current.value,
      q28_score: input3.current.value,
      q29_score: input4.current.value,
      q30_score: input5.current.value,
      q31_score: input6.current.value,
      q32_score: input7.current.value,
    };

    DataManager.post("pretest", questions26To32).then(() => {
      <Redirect to="/aboutme" />;
    });
  };

  const prompts = [
    "I will set goals for my future.",
    "I feel in control over how my future will turn out.",
    "Doing well at school is important to me.",
    "I expect to graduate from high school.",
    "I plan to attend at least two years in college.",
    "I think I will probably graduate from college.",
    "I believe I can create my own future.",
  ];

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
            <TableRow
              key={prompt}
              prompt={prompt}
              inputs={inputs}
              idx={idx}
              aboutMyFuture={true}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default AboutMyFuture;
