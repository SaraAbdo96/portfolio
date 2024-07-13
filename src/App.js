import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="h-auto px-4 w-fulll bg-bodyColor text-lightText">
      <Navbar />
      <div className="px-16 mx-auto max-w-screen-2xl">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
