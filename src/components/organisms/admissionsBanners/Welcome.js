import { Link } from "react-router-dom";


export default function AdmissionWelcome() {
  return (
    <div className = "tc"
    >
        <h1 className="mb4-00"
        >
           Welcome
        </h1>

        <Link to="welcome"
            className="black-90 pv0-50 ph1-00 ba br0-25"
        >
            Explore More
        </Link>
    </div>
  )
}
