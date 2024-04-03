import { About } from "@/components/pages/Home/About";
import { Book } from "@/components/pages/Home/Book";
import { Contact } from "@/components/pages/Home/Contact";
import Hero from "@/components/pages/Home/Hero";
import { Services } from "@/components/pages/Home/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Book />
    </main>
  );
}
