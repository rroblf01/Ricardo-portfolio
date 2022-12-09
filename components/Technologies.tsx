export default function Technologies() {
  const tech = [
    {
      name: "Python",
      resume: "Realizados proyectos con Django y FastApi",
      logo: "/python.svg",
    },
    {
      name: "Docker",
      resume: "Tanto para desplegar aplicaciones como para desarrollar.",
      logo: "/docker.svg",
    },
    {
      name: "PostgreSQL",
      resume: "La base de datos que más he usado.",
      logo: "/postgresql.svg",
    },
    {
      name: "Javascript",
      resume:
        "Trabajado tanto vanilla como con frameworks como Express y React.",
      logo: "/javascript.svg",
    },
    {
      name: "Typescript",
      resume: "Realizado proyectos con frameworks como Express, React y Fresh.",
      logo: "/typescript.svg",
    },
    {
      name: "Git",
      resume: "Github y Gitlab.",
      logo: "/git.svg",
    },
    {
      name: "C++",
      resume: "Usado profesionalmente.",
      logo: "/cpp.svg",
    },
    {
      name: "Go",
      resume: "Usado en proyectos personales.",
      logo: "/golang.svg",
    },
  ];

  return (
    <div className="text-center">
      <h3 className="text-2xl mt-10 mt-16">
        Tecnologías con las que me siento cómodo trabajando
      </h3>
      <div className="lg:flex flex-wrap justify-center">
        {tech.map((el) => (
          <div className="text-center shadow-lg p-10 ml-2 rounded-xl lg:max-w-xs">
            <div className="md:flex max-w-xl mx-auto justify-center md:space-x-4">
              <img className="w-20 h-auto mx-auto" src={el.logo} />
              <h3 className="text-lg font-medium pt-8 pb-2 left-10 mx-auto">
                {el.name}
              </h3>
            </div>
            <p className="py-2">{el.resume}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
