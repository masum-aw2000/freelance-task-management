// src/views/projects/Projects.tsx
import { Link } from "react-router-dom";
import { useProjectContext } from "../../context/ProjectContext";
import { Task } from "../../context/ProjectContext";

const calculateTaskStats = (tasks: Task[]) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === "Complete").length;
  const inProgressTasks = tasks.filter((task) => task.status === "In-Progress").length;
  const notStartedTasks = tasks.filter((task) => task.status === "Not Started").length;

  return {
    totalTasks,
    completedTasks,
    inProgressTasks,
    notStartedTasks,
  };
};

const Projects = () => {
  const { projects } = useProjectContext();

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Projects Overview</h2>
      {projects.length > 0 ? (
        <ul className="space-y-4">
          {projects.map((project) => {
            const stats = calculateTaskStats(project.tasks);

            return (
              <li
                key={project.id}
                className="p-4 border border-gray-300 rounded-md shadow-sm"
              >
                <h3 className="text-md font-semibold">
                  <Link to={`/projects/${project.id}`} className="text-blue-600 hover:underline">
                    {project.name}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">Total Tasks: {stats.totalTasks}</p>
                <div className="mt-2 flex space-x-4 text-sm">
                  <span className="text-green-600 font-medium">
                    Complete: {stats.completedTasks}
                  </span>
                  <span className="text-yellow-600 font-medium">
                    In Progress: {stats.inProgressTasks}
                  </span>
                  <span className="text-red-600 font-medium">
                    Not Started: {stats.notStartedTasks}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-gray-500">No projects available. Add some projects to get started!</p>
      )}
    </div>
  );
};

export default Projects;
