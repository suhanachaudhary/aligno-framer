
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen"; // Make sure this is defined
import { useState, useEffect } from "react";
import WhyCorazor from "./components/pages/why/WhyCorazor";
import ScrollLink from "./ScrollLink";
import Solution from "./components/pages/solution/Solution";
import CaseStudies from "./components/pages/casestudy/CaseStudies";
import Collaborate from "./components/pages/collaborate/Collaborate";
import Resources from "./components/pages/resources/Resources";
import ContactPage from "./components/pages/contact/ContactPage";
import AboutPage from "./components/pages/about/AboutPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <BrowserRouter>
          <Navbar />
          <ScrollLink />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/why" element={<WhyCorazor />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/study" element={<CaseStudies />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
