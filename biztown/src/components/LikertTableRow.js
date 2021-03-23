import React from "react";
import { Label, Input } from "reactstrap";

const LikertTableRow = (props) => {
  const isChecked = (questionId, answer) => {
    var isTrue =
      questionId in props.data && props.data[questionId] === answer;
    return isTrue;
  };

  return (
    <tr>
      {props.aboutMe ? (
        <>
          <th
            scope="row"
            className={`${
              props.coloredBackground ? "grey-background" : ""
            }`}
          >
            {props.idx + 23}.{" "}
          </th>
          <td
            className={`${
              props.coloredBackground ? "grey-background" : ""
            }`}
          >
            {props.prompt}
          </td>
          {props.responses.map((response, idx) => (
            <td
              key={response[idx]}
              className={`${
                props.coloredBackground ? "grey-background" : ""
              }`}
              style={{ textAlign: "center" }}
            >
              <Label check>
                <Input
                  type="radio"
                  id={props.questionId}
                  name={props.questionId}
                  value={props.values[idx]}
                  checked={isChecked(
                    props.questionId,
                    props.values[idx]
                  )}
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
          <th
            scope="row"
            className={`${
              props.coloredBackground ? "grey-background" : ""
            }`}
          >
            {props.idx + 26}.{" "}
          </th>
          <td
            className={`${
              props.coloredBackground ? "grey-background" : ""
            }`}
          >
            {props.prompt}
          </td>
          {props.responses.map((response, idx) => (
            <td
              key={response[idx]}
              className={`${
                props.coloredBackground ? "grey-background" : ""
              }`}
              style={{ textAlign: "center" }}
            >
              <Label check>
                <Input
                  type="radio"
                  id={props.questionId}
                  name={props.questionId}
                  value={props.values[idx]}
                  checked={isChecked(
                    props.questionId,
                    props.values[idx]
                  )}
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
          <th
            scope="row"
            className={`${
              props.coloredBackground ? "grey-background" : ""
            }`}
          >
            {props.idx + 33}.{" "}
          </th>
          <td
            className={`${
              props.coloredBackground ? "grey-background" : ""
            }`}
          >
            {props.prompt}
          </td>
          {props.responses.map((response, idx) => (
            <td
              key={response[idx]}
              className={`${
                props.coloredBackground ? "grey-background" : ""
              }`}
              style={{ textAlign: "center" }}
            >
              <Label check>
                <Input
                  type="radio"
                  id={props.questionId}
                  name={props.questionId}
                  value={props.values[idx]}
                  checked={isChecked(
                    props.questionId,
                    props.values[idx]
                  )}
                  onChange={props.handleChange}
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

export default LikertTableRow;
