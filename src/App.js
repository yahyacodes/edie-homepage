import "./App.css";
import Navbar from "./Components/Navbar";
import HeroPage from "./Components/Hero";
import Cards from "./Components/Cards";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <HeroPage />
      <Cards />
    </div>
  );
}

export default App;
