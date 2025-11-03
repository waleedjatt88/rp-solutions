import React, { useState, useEffect } from 'react';
import LoadingScreen from "./components/loadingscreen";

import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import OurValues from "./components/ourvalues";
import Profile from "./components/profile"
import Projects from './components/Projects';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <main>
            <HeroSection />
           <Profile/>
            <AboutSection />
            <Services />
            <ContactSection />
                        <Projects/>

            <OurValues />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
