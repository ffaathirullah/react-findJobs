import "./App.css";
import Navbar from "./Components/Navbar";
import NavBarBottom from "./Components/NavBarBottom";
import MyPaper from "./Components/Paper";
import BottomCarousel from "./Components/BottomCarousel";
import Testimonial from "./Components/Carousel";

function App() {
  const image_url =
    "https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/04/bg-slider2.jpg";
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image_url})`,
          backgroundColor: "#302EA7",
        }}
      >
        <Navbar />
        <NavBarBottom />
      </div>
      <MyPaper />
      <BottomCarousel />
      <Testimonial />
    </div>
  );
}

export default App;
