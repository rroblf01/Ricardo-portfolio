export default function Contact() {
  return (
    <div id="contact" className="sticky top-[100vh] mt-20">
      <h3 className="text-center text-2xl">
        ¡Contacta conmigo!
      </h3>
      <nav className="flex sm:justify-center items-center flex-col sm:flex-row sm:items-baseline sm:space-x-4">
        <p className="rounded-lg px-3 py-2 text-[#334155] font-medium hover:text-[#0f172a]">
          Correo:{" "}
          <a
            href="mailto:ricardo.r.f@hotmail.com"
            className="hover:bg-[#F0BF9B] border-[#F0BF9A] border-b-1"
          >
            ricardo.r.f@hotmail.com
          </a>
        </p>

        <p className="rounded-lg px-3 py-2 text-[#334155] font-medium hover:text-[#0f172a]">
          Linkedin:{" "}
          <a
            href="https://linkedin.com/in/ricardoroblesfernandez/"
            className="hover:bg-[#F0BF9B] border-[#F0BF9A] border-b-1"
          >
            Ricardo Robles Fernández
          </a>
        </p>
      </nav>
    </div>
  );
}
