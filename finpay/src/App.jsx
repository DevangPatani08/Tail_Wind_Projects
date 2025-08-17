import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Why from "./components/Why";
import Step from "./components/Step";
import Mission from "./components/Mission";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="w-full min-h-screen flex flex-col justify-start items-center gap-0">
        <Hero />
        <Feature />
        <Why />
        <Step />
        <Mission />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
