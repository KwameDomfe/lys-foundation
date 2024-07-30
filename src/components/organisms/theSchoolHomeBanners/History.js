import { Link } from "react-router-dom"


function History() {
  return (
    <div className = "tc"
    >
        <h1 className="mb4-00"
        >
            History
        </h1>

        <Link to="history"
            className="black-90 pv0-50 ph1-00 ba br0-25"
        >
            Explore More
        </Link>
    </div>
  )
}

export default History
