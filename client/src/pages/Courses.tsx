import React from "react";

// TODO: fetch this from the API instead of hardcoding it
const courses: Array<ICourse> = [
  {
    ID: 0,
    Name: "Test",
    Assignments: [],
  },
  {
    ID: 1,
    Name: "Test2",
    Assignments: [],
  },
];

// TODO: make a list of course tiles
function Courses() {
  return (
    <>
      {courses.map((course, index) => (
        <div key={index}>
          <h1>{course.Name}</h1>
        </div>
      ))}
    </>
  );
}

export default Courses;
