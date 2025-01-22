// src/views/projects/ProjectDetail.tsx
import { useParams } from "react-router-dom";
import { useProjectContext } from "../../context/ProjectContext";
import { Task } from "../../context/ProjectContext";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { projects } = useProjectContext();

  // Find the selected project
  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">{project.name}</h2>
      <h3 className="text-md font-medium text-gray-700">Tasks</h3>
      {/* Check if there are tasks to show */}
      {project.tasks.length > 0 ? (
        <ul className="space-y-4">
          {project.tasks.map((task: Task) => (
            <li
              key={task.id}
              className="p-4 border border-gray-300 rounded-md shadow-sm"
            >
              <h4 className="font-semibold">{task.name}</h4>
              <p
                className={`text-sm font-medium ${
                  task.status === "Complete"
                    ? "text-green-600"
                    : task.status === "In-Progress"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                Status: {task.status}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No tasks available for this project.</p> // Message when no tasks exist
      )}
    </div>
  );
};

export default ProjectDetail;
