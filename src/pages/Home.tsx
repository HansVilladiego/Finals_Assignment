import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header title="Welcome to My Portfolio" subtitle="React · TypeScript · .NET Core" />
      <main style={{ flex: 1 }}>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}