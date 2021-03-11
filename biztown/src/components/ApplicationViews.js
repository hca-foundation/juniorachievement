import React from "react";
import { Route } from "react-router-dom";
import { FormInputLayout } from "./FormInputLayout.js";
import { TestRoutePage } from "./TestRoutePage.js";

const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/" render={() => <TestRoutePage />} />
      <Route
        exact
        path="/pretest"
        render={(props) => (
          <FormInputLayout preTest={true} {...props} />
        )}
      />
      <Route
        exact
        path="/posttest"
        render={(props) => (
          <FormInputLayout postTest={true} {...props} />
        )}
      />
      <Route
        exact
        path="/completionpage"
        render={() => <div>Complete!!</div>}
      />
    </>
  );
};

export default ApplicationViews;
