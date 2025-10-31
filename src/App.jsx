import HeroSection from "./components/HeroSection"
import ContactSection from "./components/ContactSection"
import Header from "./components/Navbar"
import Footer from "./components/Footer"
import AboutSection from "./components/AboutSection"

function App() {
  return (
    <>
    <Header/>
    <main>
      <HeroSection/>
      <AboutSection/>
          <ContactSection/>
      </main>
      <Footer/>
    </>
  )
}

export default App
