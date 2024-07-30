import { Link } from "react-router-dom";


export default function GraduateProfiles() {
  return (
    <div className = "tc"
    >
        <h1 className="mb4-00"
        >
           Graduate Profiles
        </h1>

        <Link to="graduate-profiles"
            className="black-90 pv0-50 ph1-00 ba br0-25"
        >
            Explore More
        </Link>
    </div>
  )
}
