import { About } from "@/components/pages/home/About";
import { Book } from "@/components/pages/home/Book";
import { Contact } from "@/components/pages/home/Contact";
import Hero from "@/components/pages/home/Hero";
import { Services } from "@/components/pages/home/Services";
import BasicLayout from "@/layouts/basic-layout";
import Head from "next/head";

export default function Home() {
  return (
    <BasicLayout isTransparentBg>
      <Head>
        <title>Home | The Dental</title>
        <meta
          name="description"
          content="Dentist is a dental clinic that offers a wide range of services. We are located in the heart of the city and have been serving the community for over 20 years."
        />
      </Head>
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </BasicLayout>
  );
}
