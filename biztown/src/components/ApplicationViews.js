import React from "react";
import { Route } from "react-router-dom";
import { FormInputLayout } from "./FormInputLayout.js";

const ApplicationViews = () => {
  return (
    <>
      <Route
        path="/pretest/"
        render={() => <FormInputLayout preTest={true} />}
      />
      <Route
        path="/posttest"
        render={() => <FormInputLayout postTest={true} />}
      />
      <Route
        path="/completionPage"
        render={() => <div>Complete!!</div>}
      />
    </>
  );
};

export default ApplicationViews;
