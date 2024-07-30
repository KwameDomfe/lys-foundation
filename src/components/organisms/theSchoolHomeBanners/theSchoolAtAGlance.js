import { Link } from "react-router-dom"

function TheSchoolAtAGlance() {
    return (
        <div className = "tc"
        >
            <h1 className="mb2-00"
            >
                The School at a Glance
            </h1>

            <Link to="the-school-at-a-glance"
                className="pv0-50 ph1-00 
                    black-90 
                    ba br0-25"
            >
                Explore More
            </Link>
        </div>
    )
}

export default TheSchoolAtAGlance
