import { Link } from "react-router";
import Header from "../../components/Header";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <title> Calibration Curve</title>

      <Header />
      
      <h1> Welcome to the Home Page </h1>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo sed, eveniet laudantium cumque asperiores at obcaecati tenetur ex maxime fugit deleniti nobis ipsam, sapiente quis omnis fuga! Fugiat, vel fugit?
      </p>

      <Link to="/plotting">
        <button>Plot Graph</button>
      </Link>
    </>
  );
}

export default HomePage;