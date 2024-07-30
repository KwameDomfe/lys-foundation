import { Link } from "react-router-dom";

export default function LowerPrimary() {
  return (
    <div className = "tc"
    >
        <h1 className="mb4-00"
        >
            Lower Primary
        </h1>

        <Link to="lower-primary"
            className="white-90 pv0-50 ph1-00 ba br0-25"
        >
            Explore More
        </Link>
    </div>
  )
}
