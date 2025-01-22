// context model for manage project state

import { createContext, useContext, useState, ReactNode } from "react";

// define the shape of a task
export interface Task {
  id: string;
  name: string;
  status: "Not Started" | "In-Progress" | "Complete";
}

// define the shape of the project and context
export interface Project {
  id: string;
  name: string;
  tasks: Task[];
}

interface ProjectContextType {
  projects: Project[];
  selectedProject: string | null;
  setProjects: (projects: Project[]) => void;
  setSelectedProject: (projectId: string) => void;
  updateTaskStatus: (
    projectId: string,
    taskId: string,
    status: Task["status"]
  ) => void;
}

// create the context
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "Project 1",
      tasks: [
        { id: "t1", name: "Design Homepage", status: "Complete" },
        { id: "t2", name: "Setup Backend", status: "In-Progress" },
      ],
    },
    { id: "2", name: "Project Beta", tasks: [] },
  ]);

  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  //   update task status
  const updateTaskStatus = (
    projectId: string,
    taskId: string,
    status: Task["status"]
  ) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id === taskId ? { ...task, status } : task
              ),
            }
          : project
      )
    );
  };
  return (
    <ProjectContext.Provider
      value={{
        projects,
        selectedProject,
        setProjects,
        setSelectedProject,
        updateTaskStatus,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

// custom hook for consuming the context

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};
