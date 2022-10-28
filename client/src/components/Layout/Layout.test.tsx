import React from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import Layout from "./Layout";

// Check that the component can render and stay for a second
it("renders without crashing", async () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <MemoryRouter>
      <Layout>
        <div>main content here</div>
      </Layout>
    </MemoryRouter>
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
});
