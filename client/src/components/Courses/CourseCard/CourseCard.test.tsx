import React from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import CourseCard from "./CourseCard";

// Check that the component can render and stay for a second
it("renders without crashing", async () => {
  const div = document.createElement("div");
  const root = createRoot(div);

  const courseData: ICourse = {
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
