import { Link } from "react-router-dom";

export default function ParentHandbook() {
  return (
    <div className = "tc"
    >
        <h1 className="mb4-00">Parent Handbook</h1>

        <Link to="parents-handbook"
            className="black-90 pv0-50 ph1-00 ba br0-25"
        >
            Explore More
        </Link>
    </div>
  )
}
