import { BookWithForm } from "@/components/pages/contact/book-with-form";
import { Contact } from "@/components/pages/home/contact";
import BasicLayout from "@/layouts/basic-layout";
import Head from "next/head";

function ContactPage() {
  return (
    <BasicLayout>
      <Head>
        <title>Contact Us | The Dental</title>
        <meta
          name="description"
          content="Contact us for any queries or to book an appointment. We are here to help you."
        />
      </Head>
      <main>
        <Contact showBook={false} />
        <BookWithForm />
      </main>
    </BasicLayout>
  );
}

export default ContactPage;
