import ToDoList from "./ToDoList.tsx";

export default function Projects() {
  const projects = [
    { name: "ToDoList", project: ToDoList },
    { name: "ToDoList", project: ToDoList },
    { name: "ToDoList", project: ToDoList },
    { name: "ToDoList", project: ToDoList },
    { name: "ToDoList", project: ToDoList },
    { name: "ToDoList", project: ToDoList },
    { name: "ToDoList", project: ToDoList },
    { name: "ToDoList", project: ToDoList },
    { name: "ToDoList", project: ToDoList },
    { name: "ToDoList", project: ToDoList },
    { name: "ToDoList", project: ToDoList },
    { name: "ToDoList", project: ToDoList },
    { name: "ToDoList", project: ToDoList },
    { name: "ToDoList", project: ToDoList },
    { name: "ToDoList", project: ToDoList },
  ];
  return (
    <div id="proyects">
      <div className="text-center max-w-xl mx-auto mt-20">
        <h3 className="text-2xl">
          Pequeños proyectos incrustados.
        </h3>
        <div className="md:flex max-w-xl mx-auto md:space-x-14 border-[#F0BF9A] border-4 mt-10 p-5">
          <ul className="max-h-44 overflow-auto mx-auto text-center justify-center">
            {projects.map((el) => {
              return <li>{el.name}</li>;
            })}
          </ul>
          <ToDoList />
        </div>
      </div>
    </div>
  );
}
