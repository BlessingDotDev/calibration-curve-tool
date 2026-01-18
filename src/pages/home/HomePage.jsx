import { Link } from "react-router";
import Header from "../../components/Header";
import "./HomePage.css";
import bg from "../../assets/images/bg-images/beakerss.jpg"

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
            <p className="title">Welcome to the Science Lab</p>

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