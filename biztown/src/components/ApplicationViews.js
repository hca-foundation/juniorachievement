import React from "react";
import { Route } from "react-router-dom";
import { FormInputLayout } from "./FormInputLayout.js";

const ApplicationViews = () => {
  return (
    <>
      <Route
        path="/pretest/"
        render={() => <FormInputLayout pretest={true} />}
      />
      <Route
        path="/posttest"
        render={() => <FormInputLayout posttest={true} />}
      />
      <Route
        path="/completionPage"
        render={() => <div>Complete!!</div>}
      />
    </>
  );
};

export default ApplicationViews;
