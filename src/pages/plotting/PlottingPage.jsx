import { Link } from "react-router";
import Header from "../../components/Header";
import "./PlottingPage.css";

function PlottingPage() {
  return (
    <>
      <title>Plotting</title>

      <Header varient="plotting" />

      <main className="main-container">
        <p className="plot-title">Plot-sci</p>

      <Link to="/">
       <button>GO back home</button>
      </Link>
      </main>

    </>
  );
}

export default PlottingPage;