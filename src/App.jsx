import SideBar from "./components/SideBar/SideBar.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import "./App.css";

function App() {
  return (
    <div className={CSS.container}>
      <div className={CSS.sidebar}>
        <h1 className={CSS.title}>INTROVERT PHOTOS</h1>
        <p className={CSS.description}>
          personal photo diary of a chronic introvert
        </p>
        <SideBar />
      </div>
      <Gallery />
    </div>
  );
}

export default App;
