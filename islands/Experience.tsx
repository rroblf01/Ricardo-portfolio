import { useState } from "preact/hooks";
import Timeline from "../components/Timeline.tsx";

export default function Experience() {
  const [isExperience, setExperience] = useState(false);

  const estudios = [{ title: "Actualidad", date: " " }, {
    title: "Ingeniería informatica",
    date: "Universidad de León",
  }, {
    title: "Bachillerato científico",
    date: "IES Juan del Enzina",
  }];

  const experience = [
    { title: "Actualidad", date: " " },
    { title: "QDQmedia, Programador Back-end", date: "02/2022 - Actualidad" },
    {
      title: "HP SCDS, Ingeniero del Software",
      date: "06/2020 - 02/2022",
    },
    {
      title: "Salvis, Full-Stack, contrato de práctica",
      date: "10/2019 - 01/2020",
    },
  ];

  const renderExperience = isExperience ? experience : estudios;
  return (
    <div id="experience">
      <nav className="flex justify-center items-center space-x-4">
        <button
          className="rounded-lg px-3 py-2 text-[#334155] font-medium hover:bg-[#F0BF9B] hover:text-[#0f172a] border-[#F0BF9A] border-b-1"
          onClick={() => {
            setExperience(false);
          }}
        >
          Estudios
        </button>
        <button
          className="rounded-lg px-3 py-2 text-[#334155] font-medium hover:bg-[#F0BF9B] hover:text-[#0f172a] border-[#F0BF9A] border-b-1"
          onClick={() => {
            setExperience(true);
          }}
        >
          Experiencia
        </button>
      </nav>

      <Timeline listTimeLine={renderExperience} />
    </div>
  );
}
