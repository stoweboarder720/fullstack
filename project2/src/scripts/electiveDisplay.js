import React from "react";
import CourseSearch from "./courseSearch.js";
import CourseDisplay from "./courseDisplay.js";

class Electives extends CourseSearch {

  render() {
    return (
      <div className="p-4">
        <CourseDisplay courseList={this.props.elecCourses}/>
      </div>
    );
  }
}

export default Electives;
