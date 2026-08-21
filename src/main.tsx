import { createRoot } from "react-dom/client";
import "@fontsource-variable/source-serif-4";
import "@fontsource-variable/geist";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
