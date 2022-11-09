import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import SearchBar from "./SearchBar";

// Check that the component can render and stay for a second
it("renders without crashing", async () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
});
