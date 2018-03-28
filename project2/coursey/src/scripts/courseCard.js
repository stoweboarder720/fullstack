import React from "react";
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from "reactstrap";

class CourseCard extends React.Component {

  render() {
    const course = this.props.course;
    const timesRooms = this.props.timesRooms;
    return (
      <div className="courseCard">
        <Card>
          <CardBody className="text-center">
            <CardTitle>{course.Department + " " + course.CrseNum}</CardTitle>
            <CardSubtitle>{course.Title}</CardSubtitle>
            <CardText>{"Section " + course.Section}</CardText>
            <CardText>{"CRN " + course.CRN}</CardText>
            <CardText>{course.Instructor}</CardText>
            {timesRooms}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CourseCard;
