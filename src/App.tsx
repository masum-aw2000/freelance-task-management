import "./App.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProjectProvider } from "./context/ProjectContext";
import NavBar from "./views/navigation/NavBar";
import Home from "./views/home/home";
import Projects from "./views/projects/projects";
import ProjectDetail from "./views/projects/ProjectDetail";

// define convex client
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

function App() {
  return (
    <ConvexProvider client={convex}>
      <ProjectProvider>
        <Router>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
          </Routes>
        </Router>
      </ProjectProvider>
    </ConvexProvider>
  );
}

export default App;
