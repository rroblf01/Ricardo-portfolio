import ToDoList from "../islands/ToDoList.tsx";

export default function Proyects() {
  return (
    <div id="proyects">
      <div className="text-center max-w-xl mx-auto mt-20">
        <h3 className="text-2xl">
          Pequeños proyectos incrustados.
        </h3>
        <ToDoList />
      </div>
    </div>
  );
}
