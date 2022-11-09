// UI Components
import CourseCard from "../components/Courses/CourseCard/CourseCard";

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

  {
    ID: 2,
    Name: "Test3",
    Assignments: [],
  },

  {
    ID: 3,
    Name: "Test4",
    Assignments: [],
  },

  {
    ID: 4,
    Name: "Test5",
    Assignments: [],
  },

  {
    ID: 5,
    Name: "Test6",
    Assignments: [],
  },
];

// TODO: make a list of course tiles
function Courses() {
  return (
    <>
      {courses.map((course) => (
        <CourseCard key={course.ID} course={course} />
      ))}
    </>
  );
}

export default Courses;
