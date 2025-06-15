import "./App.css";
import Header from "./components/header";
import HomePage from "./components/content/homepage";
import Wigget from "./components/content/homepage/wigget";
import AboutUs from "./components/content/pages/aboutus";
import Service from "./components/content/pages/services";
import Contact from "./components/content/pages/contact";
import Footer from "./components/footer";
function App() {
  return (
    <div className="text-3xl font-bold text-gold-500 font-work scroll-smooth">
      <Header />
      <HomePage />
      <Wigget />
      <AboutUs />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
