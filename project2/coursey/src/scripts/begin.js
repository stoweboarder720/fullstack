import React from "react";

class Begin extends React.Component {

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Welcome to Coursey</h1>
          <p className="lead">This tool will help you make sure you find all your reqs and interesting electives.</p>
          <hr className="my-4"/>
          <p className="lead"><a className="btn btn-primary btn-lg" onClick={() => this.props.switchTab("1")} role="button">Begin</a></p>
        </div>
      </div>
    );
  }
}

export default Begin;
