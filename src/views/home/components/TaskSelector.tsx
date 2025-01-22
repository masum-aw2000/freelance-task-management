import { useProjectContext, Task } from "../../../context/ProjectContext";

const TaskSelector = () => {
  const { projects, selectedProject, updateTaskStatus } = useProjectContext();

  if (!selectedProject) return <p>Please select a project to view tasks.</p>;

  const project = projects.find((p) => p.id === selectedProject);

  if (!project) return <p>Project not found.</p>;

  return (
    <div>
      <h3 className="text-md font-semibold mb-2">Tasks</h3>
      <ul className="space-y-2">
        {project.tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center">
            <span>{task.name}</span>
            <select
              value={task.status}
              onChange={(e) =>
                updateTaskStatus(project.id, task.id, e.target.value as Task["status"])
              }
              className="border px-2 py-1 rounded"
            >
              <option value="Not Started">Not Started</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Complete">Complete</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskSelector;
