import React, { useRef, Redirect } from "react"
import TableRow from "./TableRow"
import DataManager from "../modules/DataManager";
import { Table, Button } from 'reactstrap';

const AboutMe = () => {
  const input1 = useRef()
  const input2 = useRef()
  const input3 = useRef()

  const inputs = [input1, input2, input3]

  const handleQuestions23To25 = (e) => {
    e.preventDefault();

    const questions23To25 = {
      q23_score: input1.current.value,
      q24_score: input2.current.value,
      q25_score: input3.current.value
    }

    DataManager.post("pretest", questions23To25).then(() => {
      <Redirect to="/aboutmyfuture" />
    })
  }

  const prompts = ["I plan to start using a personal budget.", "I intend to start saving money for the future.", "I will think more about financial issues in my future."]

  return(
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
            <TableRow inputs={inputs} prompt={prompt} idx={idx} aboutMe={true} />
          ))
          }
        </tbody>
      </Table>
      <Button onClick={handleQuestions23To25}>Next</Button>
    </>
  )
}

export default AboutMe