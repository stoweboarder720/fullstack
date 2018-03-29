import React from "react";
import {Button, Jumbotron} from "reactstrap";

class Begin extends React.Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Welcome to Coursey</h1>
          <p className="lead">This tool will help you make sure you find all your reqs and interesting electives.</p>
          <hr className="my-4"/>
          <Button color="warning" onClick={() => this.props.switchTab("1")}>Begin</Button>
        </Jumbotron>
      </div>
    );
  }
}

export default Begin;
