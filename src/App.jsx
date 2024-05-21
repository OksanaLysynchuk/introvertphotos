import SideBar from "./components/SideBar/SideBar.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <h1>INTROVERT PHOTOS</h1>
        <p>personal photo diary of a chronic introvert</p>
        <SideBar />
      </div>
      <Gallery />
    </div>
  );
}

export default App;
