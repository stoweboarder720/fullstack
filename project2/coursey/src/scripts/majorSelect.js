import React from "react";
import {Form, Label, Input, Button} from "reactstrap";
import CourseSearch from "./courseSearch.js";

import Refs from "../data/refs.js";

class Major extends CourseSearch {
  constructor(props) {
    super(props);
    this.updatedMajor = this.updatedMajor.bind(this);
    this.updatedYear = this.updatedYear.bind(this);
    this.updatedDepartment = this.updatedDepartment.bind(this);
    this.updatedRequirement = this.updatedRequirement.bind(this);
    this.fetchCourses = this.fetchCourses.bind(this);
    this.state = {
      major: Refs.MAJORS[0].name,
      year: Refs.YEARS[0],
      department: Refs.DEPARTMENTS[0],
      requirement: Refs.REQUIREMENTS[0],
      courses: [],
      reqData: null,
      elecData: null,
    };
  }

  updatedMajor(event) {
    this.setState({ major: event.target.value });
  }

  updatedYear(event) {
    this.setState({ year: event.target.value });
  }

  updatedDepartment(event) {
    this.setState({ department: event.target.value });
  }

  updatedRequirement(event) {
    this.setState({ requirement: event.target.value });
  }


  sortByYear(major) {
    let year = [];
    let query = [];
    switch(this.state.year) {
      case 'Freshman':
        year = major.FRESHMEN;
        break;
      case 'Sophomore':
        year = major.SOPHOMORES;
        break;
      case 'Junior':
        year = major.JUNIORS;
        break;
      case 'Senior':
        year = major.SENIORS;
        break;
      default:
        break;
    }

    if (year !== null) {
      for (let course of year) {
        query.push(this.crnFetch(course));
      }
    }
    return query;
  }

  fetchCourses() {
    let query = [];
    for (let major of Refs.MAJORS) {
      if (this.state.major === major.name) {
        query = this.sortByYear(major.courses);
      }
    }

    let requirement = this.state.requirement.slice(0, 4);
    let department = this.state.department.slice(0, 4);
    let cccReq = "";
    let i = 0;
    while (requirement.charAt(i).match("[a-zA-Z0-9]")) {
      cccReq += requirement.charAt(i);
      i++;
    }

    Promise.all(query)
      .then((results) => {
        let requiredCourses = [];
        for (let result of results) {
          requiredCourses.push(...result.message);
        }
        this.setState({ reqData: requiredCourses });
        this.props.changeReqs(this.state.reqData);
      });

    if (cccReq === "Any") {
      console.log("ANY");
    } else if (department === "Any") {
      console.log("DEPT"); 
    }
    const query2 = `Department=${department.toUpperCase()}&CCCReq=${cccReq.toUpperCase()}`;
    this.courseQueryFetch(query2)
      .then((data) => {
        if (data.message.length > 0) {
          this.setState({ elecData: data.message });
        } else {
          this.setState({ elecData: "none" });
        }
        this.props.changeElecs(this.state.elecData);
        this.props.switchTab("2");
      });
  }

  render() {
    const majors = Refs.MAJORS.map((major, i) => <option key={i}>{major.name}</option>);
    const years = Refs.YEARS.map((year, i) => <option key={i}>{year}</option>);
    const departments = Refs.DEPARTMENTS.map((dept, i) => <option key={i}>{dept}</option>);
    const requirements = Refs.REQUIREMENTS.map((req, i) => <option key={i}>{req}</option>);
    return (
      <div className="p-4">
        <Form className="courseSearchForm" onSubmit={this.searchMajor} inline>
          <Label for="majorChoice">Select your major:</Label>
          <Input id="majorChoice" type="select" value={this.state.major} onChange={this.updatedMajor}>
            {majors}
          </Input>
          <Label for="yearChoice">and your class year:</Label>
          <Input id="yearChoice" type="select" value={this.state.year} onChange={this.updatedYear}>
            {years}
          </Input>
        </Form>

        <Form className="courseSearchForm" onSubmit={this.fetchCourses} inline>
          <Label for="deptChoice">Select a department:</Label>
          <Input id="deptChoice" type="select" value={this.state.department} onChange={this.updatedDepartment}>
            {departments}
          </Input>
          <Label for="reqChoice">Select a CCC Requirement:</Label>
          <Input id="reqChoice" type="select" value={this.state.requirement} onChange={this.updatedRequirement}>
            {requirements}
          </Input>
          <Button onClick={this.fetchCourses}>Explore</Button>
        </Form>
      </div>
    );
  }
}

export default Major;