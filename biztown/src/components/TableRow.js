import React from "react";
import { Label, Input } from "reactstrap";

const TableRow = (props) => {
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
                  ref={props.inputs[props.idx]}
                  type="radio"
                  name={`q${props.idx + 23}_answer`}
                  value={response.value}
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
                  innerRef={props.inputs[props.idx]}
                  type="radio"
                  name={`q${props.idx + 26}_answer`}
                  value={response.value}
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
                  innerRef={props.inputs[props.idx]}
                  type="radio"
                  name={`q${props.idx + 33}_answer`}
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
