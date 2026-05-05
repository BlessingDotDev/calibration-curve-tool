import { Link } from "react-router";

function Button() {
  return (
    <Link to="/plotting">
      <button className="plot-button">
        Plot Graph
      </button>
    </Link>
  );
}

export default Button;