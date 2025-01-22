import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProjectProvider } from "./context/ProjectContext";
import NavBar from "./views/navigation/NavBar";
import Home from "./views/home/home";
import Projects from "./views/projects/projects";
import ProjectDetail from "./views/projects/ProjectDetail";

function App() {
  return (
    <ProjectProvider>
      <Router>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projects/:projectId" element={<ProjectDetail/>}/>
          </Routes>
      </Router>
    </ProjectProvider>
  );
}

export default App;
