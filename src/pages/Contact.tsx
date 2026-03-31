import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header title="Contact Me Have a question or just want to say hi? 👋" />
      <main style={{ flex: 1 }}>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}