export default function NavBar() {
  return (
    <nav className="flex sm:justify-center items-center flex-col sm:flex-row sm:items-baseline sm:space-x-4">
      {[
        ["Sobre mí", "#about"],
        ["Experiencia", "#experience"],
        ["Proyectos", "#projects"],
        ["Contáctame", "#contact"],
      ].map(([title, url]) => (
        <a
          href={url}
          className="rounded-lg px-3 py-2 text-[#334155] font-medium hover:bg-[#F0BF9B] hover:text-[#0f172a] border-[#F0BF9A] border-b-1"
        >
          {title}
        </a>
      ))}
    </nav>
  );
}
