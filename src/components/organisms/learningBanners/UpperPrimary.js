import { Link } from 'react-router-dom'

export default function UpperPrimary() {
  return (
    <div className = "tc"
    >
        <h1 className="mb4-00"
        >
            Upper Primary
        </h1>

        <Link to="upper-primary"
            className="white-90 pv0-50 ph1-00 ba br0-25"
        >
            Explore More
        </Link>
    </div>
  )
}
