import "./App.css";
import Navbar from "./Components/Navbar";
import HeroPage from "./Components/Hero";
import Cards from "./Components/Cards";
import Design from "./Components/Design";
import Team from "./Components/Team";
import Testimony from "./Components/Testimony";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <Navbar />
        <HeroPage />
        <Cards />
        <Design />
        <Team />
        <Testimony />
      </div>
      <Footer />
    </div>
  );
}

export default App;
