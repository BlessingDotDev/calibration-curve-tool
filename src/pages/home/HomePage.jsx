
import Header from "../../components/Header";
import Features from "../../UIcomponents/Features";
import Footer from "../../UIcomponents/Footer";
import Button from "../../UIcomponents/Button"
import bg from "../../assets/images/bg-images/beakerss.jpg";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <title> Calibration Curve</title>

      <Header />

      <div className="background-image-container" style={{
        backgroundImage: `url(${bg})`
      }}>
        <div className="bg-overlay">
          <div className="top-overlay">
            <p className="title">Welcome to graphing the science</p>

            <Button />
          </div>
        </div>
      </div>

      <Features />
      <Footer />

    </>
  );
}

export default HomePage;