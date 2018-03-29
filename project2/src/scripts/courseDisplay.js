import React from "react";
import {Row, Col} from "reactstrap";
import CourseCard from "./courseCard.js";
import {ToastContainer} from 'react-toastify';

class CourseDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.viewSections = this.viewSections.bind(this);
    this.state = {
      detailOpen: false,
      curCourse: null
    }
  }

  roomCheck(course) {
    if (course.Room.length === 0) {
      course.Room = "TBD";
    }
  }

  populateCards() {
    if (this.props.courseList !== null) {
      if (this.props.courseList === "none") {
        return (
          <Row key={"none"}>
            <div className="text-center mt-5 w-100" key="none">
              No matching courses! Please try again.
            </div>
          </Row>
        );
      } else {
        let courses = [];
        for (let i = 0; i < this.props.courseList.length; i++) {
          const course = this.props.courseList[i];
          this.roomCheck(course);
          courses.push(
            <Col className="my-3" xs={12} sm={6} md={4} lg={3} key={course.Course + " " + i}>
              <CourseCard course={course}/>
            </Col>
          );
        }
        const cardData = (
          <Row>
            {courses}
          </Row>
        );
        return cardData;
      }
    }
    return null;
  }

  viewSections(course) {
    this.setState({
      detailOpen: !this.state.detailOpen,
      curCourse: course
    })
  }

  render() {
    const cards = this.populateCards();
    return (
      <div>
        <ToastContainer autoClose={2000}/>
        {cards}
      </div>
    );
  }
}

export default CourseDisplay;
