import "./App.css";
import Navbar from "./Components/Navbar";
import NavBarBottom from "./Components/NavBarBottom";

function App() {
  const image_url =
    "https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/04/bg-slider2.jpg";
  return (
    <div
      style={{
        backgroundImage: `url(${image_url})`,
        backgroundColor: "#302EA7",
      }}
    >
      <Navbar />
      <NavBarBottom />
    </div>
  );
}

export default App;
