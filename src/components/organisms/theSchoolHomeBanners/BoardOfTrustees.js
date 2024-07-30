import { Link } from "react-router-dom"

function BoardOfTrustees() {
  return (
    <div className = "tc"
        >
            <h1 className="mb2-00"
            >
                Board of Trustees
            </h1>

            <Link to="board-of-trustees"
                className="black-90 pv0-50 ph1-00 ba br0-25"
            >
                Explore More
            </Link>
        </div>
  )
}

export default BoardOfTrustees
