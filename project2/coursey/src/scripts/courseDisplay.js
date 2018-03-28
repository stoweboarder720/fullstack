import React from "react";
import {Row, Col} from "reactstrap";
import CourseCard from "./courseCard.js";

class CourseDisplay extends React.Component {

  fetchRooms(course) {
    let rooms = [];
    let room = "";
    let count = 0;

    while (count < course.Room.length) {
      room += course.Room.charAt(count);
      if (room.length >= 8) {
        rooms.push(room);
        room = "";
        count++;
      }
      count++;
    }
    return rooms;
  }

  fetchTimes(course) {
    let times = [];
    let tempTime = "";
    let count = 0;

    while (count < course["Meeting Time"].length) {
      tempTime += course["Meeting Time"].charAt(count);
      const suffix = tempTime.slice(-2);
      if (suffix === "am" || suffix === "pm") {
        times.push(tempTime);
        tempTime = "";
        count++;
      }
      count++;
    }
    return times;
  }

  pairTimeRoom(course) {
    const times = this.fetchTimes(course);
    const rooms = this.fetchRooms(course);
    const timesRooms = [];

    for (let i = 0; i < times.length; i++) {
      let room = "";
      if (rooms.length === 0) {
        room = "";
      } else if (rooms.length <= i) {
        room = " - " + rooms[rooms.length - 1]
      } else {
        room = " - " + rooms[i];
      }
      timesRooms.push(<div key={i}>{times[i] + room}</div>);
    }
    if (timesRooms.length === 0) {
      timesRooms.push(<div key={0}>TBD</div>);
    }
    timesRooms.push(<br key={-1}/>);
    return timesRooms;
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
          const timesRooms = this.pairTimeRoom(course);
          courses.push(
            <Col className="my-3" xs={12} sm={6} md={4} lg={3} key={course.Course + " " + i}>
              <CourseCard course={course} timesRooms={timesRooms}/>
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

  render() {
    const cards = this.populateCards();
    return (
      <div>
        {cards}
      </div>
    );
  }
}

export default CourseDisplay;
