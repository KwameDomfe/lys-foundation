import { Link } from "react-router-dom";


export default function AcademicCalender() {
  return (
    <div className = "tc"
    >
        <h1 className="mb4-00"
        >
           Academic Calender
        </h1>

        <Link to="academic-calender"
            className="black-90 pv0-50 ph1-00 ba br0-25"
        >
            Explore More
        </Link>
    </div>
  )
}
