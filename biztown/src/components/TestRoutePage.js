import { Component } from "react";
import { Link } from "react-router-dom";

class TestRoutePage extends Component {
  render() {
    return (
      <div className="page-nav-buttons">
        <span className="btn btn-secondary navigation-btn">
          <Link to="/pretest/">Pre Assessment Test</Link>
        </span>
        <span className="btn btn-secondary navigation-btn">
          <Link to="/posttest/">Post Assessment Test</Link>
        </span>
      </div>
    );
  }
}

export { TestRoutePage };
