import { Link } from "react-router-dom"

function MissionVisionAndValues() {
  return (
    <div className = "tc pv1-00 mv1-00"
        >
            <h1 className="mt0-00 mb2-00"
            >
                Mission Vision and Values
            </h1>

            <Link to="mission-vision-and-values"
                className="black-90 pv0-50 ph1-00 ba br0-25"
            >
                Explore More
            </Link>
        </div>
  )
}

export default MissionVisionAndValues
