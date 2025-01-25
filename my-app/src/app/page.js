import Navbar from "../components/Navbar"
import Header from "../components/Header"
import FeaturedProjects from "../components/FeaturedProjects"
import AboutSection from "../components/AboutSection"
import Footer from "../components/Footer"
//import AnimatedBackground from "../components/AnimatedBackground"

export default function Home() {
  return (
    (<div className="min-h-screen flex flex-col relative">
      {/* <AnimatedBackground /> */}
      <div className="absolute inset-0 bg-white bg-opacity-50 z-0"></div>
      <Navbar />
      <main className="flex-grow relative z-1">
        <Header />
        <FeaturedProjects />
        <AboutSection />
      </main>
      <Footer />
    </div>)
  );
}

