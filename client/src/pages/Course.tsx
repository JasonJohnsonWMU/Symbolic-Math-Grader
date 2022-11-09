// Animations
import { motion } from "framer-motion";

// Routing
import { useLocation, useNavigate } from "react-router-dom";

function Course() {
  const props = useLocation();
  const navigate = useNavigate();

  // if the user navigates to this page without a course, redirect them to the courses page
  if (!props?.state?.course) {
    navigate("/courses");
    return null; // return null to prevent the rest of the code from running
  }

  const course = props.state.course;

  return (
    <motion.div
      layoutId={course.Name} // this prop is used for the animation
    >
      <h1>Course Page: {course.Name}</h1>
    </motion.div>
  );
}

export default Course;
