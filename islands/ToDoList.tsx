import { useState } from "preact/hooks";

export default function ToDoList() {
  const [tasks, setTasks] = useState<string[]>(["First Task"]);
  const [task, setTask] = useState("");

  return (
    <div id="projects" className="md:flex max-w-2xl mx-auto md:space-x-14">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTasks((p) => [...p, task]);
          setTask("");
        }}
      >
        <label>
          <span>Add ToDo {" "}</span>
          <input
            type="text"
            value={task}
            onInput={(e) => {
              setTask((e.target as HTMLInputElement).value);
            }}
          />
        </label>
        <button>Add</button>
      </form>
      <ul className="list-disc text-left ml-28">
        {tasks.map((el) => <li className="text-[#014D85]">{el}</li>)}
      </ul>
    </div>
  );
}
