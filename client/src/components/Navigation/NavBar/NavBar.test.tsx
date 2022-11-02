import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

// Check that the component can render and stay for a second
it("renders without crashing", async () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
});
