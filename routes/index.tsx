import { Head } from "$fresh/runtime.ts";
import NavBar from "../components/NavBar.tsx";
import About from "../components/About.tsx";
import Experience from "../islands/Experience.tsx";
import Contact from "../components/Contact.tsx";
import Proyects from "../components/Proyects.tsx";
export default function Home() {
  return (
    <>
      <Head>
        <title>Portafólio de Ricardo</title>
        <link rel="icon" href="/logo.jpeg" type="image/x-icon"></link>
      </Head>
      <div>
        <main className="bg-[#E6E7C6] px-10">
          <section className="min-h-screen font-sans">
            <NavBar />
            <About />
            <Experience />
            <Proyects />
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
}
