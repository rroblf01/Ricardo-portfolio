export default function About() {
  return (
    <div id="about" className="text-gray-800 mt-20 py-5">
      <div className="md:flex max-w-xl mx-auto md:space-x-14">
        <img
          className="w-52 h-auto mx-auto rounded-full"
          src="/ricardo.jpeg"
        />

        <div className="py-5 max-w-xl">
          <h3 className="text-4xl">
            ¡Hola!, Me llamo Ricardo Robles.
          </h3>
          <p className="text-2xl text-[#014D85]">Programador Back-end</p>
          <p>Ingeniero Informático y apasionado por la tecnología.</p>
        </div>
      </div>
    </div>
  );
}
