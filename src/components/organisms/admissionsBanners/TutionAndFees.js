import { Link } from "react-router-dom";


export default function TutionAndFees() {
  return (
    <div className = "tc"
    >
        <h1 className="mb4-00"
        >
            Tuition And Fees
        </h1>

        <Link to="tution-and-fees"
            className="black-90 pv0-50 ph1-00 ba br0-25"
        >
            Explore More
        </Link>
    </div>
  )
}
