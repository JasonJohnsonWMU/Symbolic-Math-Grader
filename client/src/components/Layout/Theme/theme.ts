import createTheme from "@mui/material/styles/createTheme";
import darkTheme from "./Themes/dark.json";
import lightTheme from "./Themes/light.json";

const dark = createTheme(darkTheme as any);
const light = createTheme(lightTheme as any);

export { dark, light };
