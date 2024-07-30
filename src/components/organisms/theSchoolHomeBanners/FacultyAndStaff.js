import { Link } from "react-router-dom"

function FacultyAndStaff() {
  return (
    <div className = "tc mt4-00"
        >
            <h1 className="mb2-00"
            >
                Faculty and Staff
            </h1>

            <Link to="faculty-and-staff"
                className="black-90 pv0-50 ph1-00 ba br0-25"
            >
                Explore More
            </Link>
        </div>
  )
}

export default FacultyAndStaff
