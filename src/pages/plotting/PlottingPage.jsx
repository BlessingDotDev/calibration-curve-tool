import { Link } from "react-router";
import Header from "../../components/Header";
import "./PlottingPage.css";

function PlottingPage() {
  return (
    <>
      <title>Plotting</title>

      <Header />

      <h1>Welcome to the plottingting page</h1>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, unde eos explicabo quidem obcaecati consequuntur quisquam delectus temporibus quod voluptatum eligendi similique consectetur ratione dolorum quibusdam sint distinctio, optio cumque?
      </p>

      <Link to="/">
       <button>GO back home</button>
      </Link>

    </>
  );
}

export default PlottingPage;