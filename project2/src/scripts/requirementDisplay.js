import React from "react";
import CourseSearch from "./courseSearch.js";
import CourseDisplay from "./courseDisplay.js";

class Reqs extends CourseSearch {

  render() {
    return (
      <div className="p-4">
        <CourseDisplay courseList={this.props.reqCourses}/>
      </div>
    );
  }
}

export default Reqs;
