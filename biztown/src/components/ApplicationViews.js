import React from "react";
import { Route } from "react-router-dom";
import CompletionPage from "./CompletionPage.js";
import { FormInputLayout } from "./FormInputLayout.js";
// import { CompletionPage } from "./CompletionPage.js";

const ApplicationViews = () => {
  return (
    <>
      <Route
        exact
        path="/completionpage"
        render={() => <CompletionPage />}
      />
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
    </>
  );
};

export default ApplicationViews;
