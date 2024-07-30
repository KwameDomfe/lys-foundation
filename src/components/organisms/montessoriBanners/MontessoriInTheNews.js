import { Link } from "react-router-dom";


export default function MontessoriInTheNews() {
  return (
    <div className = "tc"
    >
        <h1 className="mb4-00"
        >
            Montessori In The News
        </h1>

        <Link to="montessori-in-the-news"
            className="black-90 pv0-50 ph1-00 ba br0-25"
        >
            Explore More
        </Link>
    </div>
  )
}
