import Navbar from "./Components/HeaderComponent/Navbar";
import './App.css'
import Home from "./Pages/Home";
import Showcase from "./Pages/Project/Showcase";
import Skills from "./Pages/Skillset/Skills";
import Techs from "./Pages/Techs/Techs";

function App() {
  return (
    <div className="body-container">
      <Navbar />
      <Home/>
      <Showcase />
      <Skills />
      <Techs/>
    </div>
  );
}

export default App;
