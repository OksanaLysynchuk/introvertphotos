// import { useState, useEffect } from "react";
// import SideBar from "./components/SideBar/SideBar.jsx";
// import Gallery from "./components/Gallery/Gallery.jsx";
// import Loader from "./components/Loader/Loader.jsx";
// import "./App.css";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   // Simulate a loading delay
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 500); // Adjust the delay as needed

//     // Clear timeout on component unmount
//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     <div className={CSS.container}>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           <SideBar />
//           <Gallery />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import SideBar from "./components/SideBar/SideBar.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Loader from "./components/Loader/Loader.jsx";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Perform the data fetching or any asynchronous tasks here
        // For demonstration purposes, let's simulate a delay of 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors if necessary
        setIsLoading(false);
      }
    };

    fetchData(); // Trigger the data fetching process
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SideBar className="sideBar" />
          <Gallery className="gallery" />
        </>
      )}
    </div>
  );
}

export default App;
