import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import TopNavBar from "./TopNavBar";

// Check that the component can render and stay for a second
it("renders without crashing", async () => {
  const div = document.createElement("div");
  const root = createRoot(div);

  const props = {
    setIsSideNavBarOpen: () => {},
    isSideNavBarOpen: false,
  };

  root.render(
    <MemoryRouter>
      <TopNavBar {...props} />
    </MemoryRouter>
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
});
