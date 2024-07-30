import { Link } from "react-router-dom";


export default function ConnectWithUs() {
  return (
    <div className = "tc"
    >
        <h1 className="mb4-00"
        >
            Connect With Us
        </h1>

        <Link to="connect-with-us"
            className="black-90 pv0-50 ph1-00 ba br0-25"
        >
            Explore More
        </Link>
    </div>
  )
}
