import React from "react";
import Refs from "../data/refs.js";

class CourseSearch extends React.Component {
  courseQueryFetch(query) {
    return fetch(Refs.SERVER + "q?" + query + "&Semester=Fall&Year=2018&limit=500")
      .then((response) => response.json());
  }

  crnDeptFetch(courseID) {
    const department = courseID.slice(0, 4).toUpperCase();
    const crn = courseID.substring(4).trim().toUpperCase();
    return fetch(Refs.SERVER + `q?Department=${department}&CrseNum=${crn}&Semester=Fall&Year=2018&limit=500`)
      .then((response) => response.json());
  }

}

export default CourseSearch;
