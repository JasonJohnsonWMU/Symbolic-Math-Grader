import React from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import SideNavBar from "./SideNavBar";

// Check that the component can render and stay for a second
it("renders without crashing", async () => {
  const div = document.createElement("div");
  const root = createRoot(div);

  const props = {
    setIsOpen: () => {},
    isOpen: false,
  };

  root.render(
    <MemoryRouter>
      <SideNavBar {...props} />
    </MemoryRouter>
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
});
