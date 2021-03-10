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
        path="/pretest/"
        render={() => <FormInputLayout pretest={true} />}
      />
      <Route
        exact
        path="/posttest"
        render={() => <FormInputLayout posttest={true} />}
      />
      <Route
        exact
        path="/completionPage"
        render={() => <div>Complete!!</div>}
      />
    </>
  );
};

export default ApplicationViews;
