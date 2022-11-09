// React
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";

// UI Components
import CourseCard from "./CourseCard";

// Types
//import { ICourse } from "../../../models/ICourse";

// Check that the component can render and stay for a second
it("renders without crashing", async () => {
  const div = document.createElement("div");
  const root = createRoot(div);

  const courseData: any = {
    ID: 0,
    Name: "Test",
    Assignments: [],
  };

  root.render(
    <MemoryRouter>
      <CourseCard course={courseData}></CourseCard>
    </MemoryRouter>
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
});
