import { Component } from "react";

class MultipleChoiceSection extends Component {
  /*
    POST MVP STATE:
      have these questions editable on the client by users
  */
  render() {
    var multipleChoiceQuestions = [
      {
        question:
          "Which description best describes the circular flow of an economy?",
        possibleAnswers: [
          "The flow between businesses and resources",
          "The exchange of money, goods, and services in an economy",
          "A circular flow happens only in a resource market",
          "A circular flow happens only in a goods and services market",
        ],
      },
      {
        question: "Who pays for public goods and services?",
        possibleAnswers: [
          "Philanthropists",
          "Taxpayers",
          "Only people who use them",
          "Government",
        ],
      },
      {
        question: "Taxes are:",
        possibleAnswers: [
          "Required payments to the government",
          "Payments for private goods and services",
          "Payments for philanthropy",
          "Payments for business operations",
        ],
      },
      {
        question:
          "Which two of the following examples are financial institutions?",
        possibleAnswers: [
          "Savings & Loan, City Hall",
          "Library, Credit Union",
          "Credit Union, Bank",
          "Museum, Bank",
        ],
      },
      {
        question:
          "The amount left over from your paycheck after taxes and deductions is called your:",
        possibleAnswers: [
          "Balance",
          "Gross balance",
          "Transaction",
          "Net Pay",
        ],
      },
      {
        question: "Which one of the following statements is TRUE?",
        possibleAnswers: [
          "You can continue to write checks as long as you have checks in your checkbook.",
          "All checking account transactions should be recorded in the transaction register.",
          "A direct deposit is when you take your paycheck directly to the bank after you receive it.",
          "Credit cards and debit cards are the same thing.",
        ],
      },
      {
        question: "Interests are things people:",
        possibleAnswers: [
          "Do well",
          "Have a natural ability for",
          "Keep to themselves",
          "Like to do",
        ],
      },
      {
        question: "Which two skills are considered soft skills?",
        possibleAnswers: [
          "Teamwork, Interests",
          "Punctuality, Teamwork",
          "Interests, Compassion",
          "Dressing appropriately, Compassion",
        ],
      },
      {
        question: "Which of the following is a business expense?",
        possibleAnswers: [
          "Personal care",
          "Sales",
          "Revenue",
          "Advertising",
        ],
      },
      {
        question:
          "The revenue left over after paying business costs is called:",
        possibleAnswers: [
          "Profit",
          "Gross balance",
          "Inventory",
          "Loss",
        ],
      },
    ];
    var options = ["a", "b", "c", "d"];
    var multipleChoiceComponent = multipleChoiceQuestions.map(
      (questionBlock, index) => {
        var questionId =
          index < 9 ? `q0${index + 1}_answer` : `q${index + 1}_answer`;
        var possibleAnswers = questionBlock.possibleAnswers.map(
          (possibleAnswer, index) => {
            var isChecked =
              questionId in this.props.data &&
              this.props.data[questionId] === options[index];
            return (
              <div
                key={options[index]}
                className="multiple-choice-answer"
              >
                <input
                  className="form-control-radio-btn"
                  type="radio"
                  id={questionId}
                  name={questionId}
                  value={options[index]}
                  checked={isChecked}
                  onChange={this.props.handleChange}
                />
                <label htmlFor={questionId}>{possibleAnswer}</label>
              </div>
            );
          }
        );
        return (
          <li className="form-group" key={questionId}>
            <label className="form-question">
              {questionBlock.question}
            </label>
            <div className="multiple-choice-answer-container">
              {possibleAnswers}
            </div>
          </li>
        );
      }
    );
    return (
      <div>
        <h3>Program Content Questions</h3>
        {this.props.preTest ? (
          <div>
            <b>
              Even though you haven’t actually participated in this
              program yet, please try to answer these questions.
            </b>
          </div>
        ) : null}
        <div>
          <i>
            Select the response that you think best answers the
            question.
          </i>
        </div>
        <ol>{multipleChoiceComponent}</ol>
      </div>
    );
  }
}

export { MultipleChoiceSection };
