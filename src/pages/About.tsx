import Header from "../components/Header";
import BioContent from "../components/BioContent";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header title="About Me" subtitle="A little bit about who I am and what I do" />
      <main style={{ flex: 1 }}>
        <BioContent />
      </main>
      <Footer />
    </>
  );
}