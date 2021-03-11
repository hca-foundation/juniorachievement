import React from "react";
import { Label, Input } from "reactstrap";

const TableRow = (props) => {
  let questionId = "";
  if (props.aboutMe) {
    questionId = `q${props.idx + 23}_answer`;
  } else if (props.aboutMyFuture) {
    questionId = `q${props.idx + 26}_answer`;
  } else if (props.aboutMyFacilitators) {
    questionId = `q${props.idx + 33}_answer`;
  }

  const isChecked = (questionId, answer) => {
    var isTrue =
      questionId in props.data && props.data[questionId] === answer;

    return isTrue;
  };

  return (
    <tr>
      {props.aboutMe ? (
        <>
          <th scope="row">{props.idx + 23}. </th>
          <td>{props.prompt}</td>
          {props.responses.map((response) => (
            <td key={response.name}>
              <Label check>
                <Input
                  type="radio"
                  name={questionId}
                  value={response.value}
                  checked={isChecked(questionId, response.value)}
                  onChange={props.handleChange}
                  required
                ></Input>
              </Label>
            </td>
          ))}
        </>
      ) : null}
      {props.aboutMyFuture ? (
        <>
          <th scope="row">{props.idx + 26}. </th>
          <td>{props.prompt}</td>
          {props.responses.map((response) => (
            <td key={response.name}>
              <Label check>
                <Input
                  type="radio"
                  name={questionId}
                  value={response.value}
                  onChange={props.handleChange}
                  required
                ></Input>
              </Label>
            </td>
          ))}
        </>
      ) : null}
      {props.aboutMyFacilitators ? (
        <>
          <th scope="row">{props.idx + 33}. </th>
          <td>{props.prompt}</td>
          {props.responses.map((response) => (
            <td key={response.name}>
              <Label check>
                <Input
                  type="radio"
                  name={questionId}
                  value={response.value}
                  required
                ></Input>
              </Label>
            </td>
          ))}
        </>
      ) : null}
    </tr>
  );
};

export default TableRow;
