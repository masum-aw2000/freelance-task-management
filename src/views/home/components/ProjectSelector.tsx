import { useProjectContext } from "../../../context/ProjectContext";

const ProjectSelector = () => {
  const { projects, selectedProject, setSelectedProject } = useProjectContext();

  // Find the selected project
  const currentProject = selectedProject
    ? projects.find((project) => project.id === selectedProject)
    : null;

  return (
    <div className="w-full max-w-xs mx-auto">
      <label
        htmlFor="project-selector"
        className="block text-sm font-medium text-gray-700"
      >
        Select a Project
      </label>
      <select
        id="project-selector"
        value={selectedProject || ""}
        onChange={(e) => setSelectedProject(e.target.value)}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
      >
        <option value="" disabled>
          Choose a project
        </option>
        {/* Dynamically display projects */}
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>

      {/* Display selected project and associated tasks */}
      {currentProject && (
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Selected Project: {currentProject.name}
          </p>
          <h3 className="text-md font-medium mt-2">Tasks:</h3>
          {currentProject.tasks.length > 0 ? (
            <ul className="list-disc list-inside">
              {currentProject.tasks.map((task) => (
                <li key={task.id} className="text-sm">
                  {task.name} -{" "}
                  <span
                    className={
                      task.status === "Not Started"
                        ? "text-red-500"
                        : task.status === "In-Progress"
                        ? "text-yellow-500"
                        : "text-green-500"
                    }
                  >
                    {task.status}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No tasks available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectSelector;
