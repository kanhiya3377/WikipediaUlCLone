import "./App.css";
import Headerbar from "./components/Headerbar";
import MainBar from "./components/MainBar";
import Navbar from "./components/Navbar";

const App = () => {
  
  return (

    <div className=" w-[100vw] h-[100vh] overflow-x-hidden">
      <Navbar />
      <Headerbar />
      <MainBar />
    </div>
  );
};

export default App;
