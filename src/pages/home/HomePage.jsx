import { Link } from "react-router";
import Header from "../../components/Header";
import "./HomePage.css";
import bg from "../../assets/images/bg-images/beakerss.jpg"
//import bg from "../../assets/images/logo/plot-sci.png"

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

            <Link to="/plotting">
              <button className="plot-button">
                Plot Graph
              </button>
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}

export default HomePage;