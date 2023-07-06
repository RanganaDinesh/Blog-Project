import Navbar from "./Components/HeaderComponent/Navbar";
import './App.css'
import Home from "./Pages/Home";
import Showcase from "./Pages/Project/Showcase";
import Skills from "./Pages/Skillset/Skills";

function App() {
  return (
    <div className="body-container">
      <Navbar />
      <Home/>
      <Showcase />
      <Skills/>
    </div>
  );
}

export default App;
