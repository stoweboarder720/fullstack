import React from "react";
import CardFlip from "./cardFlip.js";

class CourseCard extends React.Component {
  constructor(props) {
    super(props);
    this.viewSections = this.viewSections.bind(this);
  }

  viewSections() {
      this.props.viewSections(this.props.course);
  }

  render() {
    const course = this.props.course;
    return (
      <div className="top-buffer">
            <CardFlip title={course.Title} dept={course.Department} courseNum={course.CrseNum}
            time={course["Meeting Time"]} prof={course.Instructor} crn={course.CRN} seats={course.SeatsAvail}
            room={course.Room} ccc={course.CCCReq} />
      </div>
    );
  }
}

export default CourseCard;
