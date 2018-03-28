import React from "react";
import Navigation from "./navigation.js";
import Begin from "./begin.js";
import Major from "./majorSelect.js";
import Reqs from "./requirementDisplay.js";
import Electives from "./electiveDisplay.js";

class Coursey extends React.Component {
  constructor(props) {
    super(props);
    this.switchTab = this.switchTab.bind(this);
    this.changeReqs = this.changeReqs.bind(this);
    this.changeElecs = this.changeElecs.bind(this);
    this.state = {
      tab: "0",
      reqCourses: null,
      elecCourses: null
    };
  }

  switchTab(type) {
    this.setState({ tab: type, amountLoaded: 16 });
  }

  changeReqs(CourseDisplay) {
    this.setState({ reqCourses: CourseDisplay });
    console.log(this.state.reqCourses);
  }

  changeElecs(CourseDisplay) {
    this.setState({ elecCourses: CourseDisplay });
    console.log(this.state.elecCourses);
  }

  render() {
    let currentTab = null;

    if (this.state.tab === "0") {
      currentTab = <Begin key={0} switchTab={this.switchTab}/>;
    } else if (this.state.tab === "1") {
      currentTab = <Major key={1} switchTab={this.switchTab} changeReqs={this.changeReqs} changeElecs={this.changeElecs}/>;
    } else if (this.state.tab === "2") {
      currentTab = <Reqs key={2} switchTab={this.switchTab} reqCourses={this.state.reqCourses}/>;
    } else if (this.state.tab === "3") {
      currentTab = <Electives key={3} elecCourses={this.state.elecCourses}/>;
    }

    return (
      <div>
        <Navigation switchTab={this.switchTab} tab={this.state.tab}/>
        {currentTab}
      </div>
    );
  }
}

export default Coursey;
