import { BookWithForm } from "@/components/pages/contact/BookWithForm";
import { Contact } from "@/components/pages/home/Contact";
import BasicLayout from "@/layouts/basic-layout";

function ContactPage() {
  return (
    <BasicLayout>
      <main className="pt-20">
        <Contact showBook={false} />
        <BookWithForm />
      </main>
    </BasicLayout>
  );
}

export default ContactPage;
