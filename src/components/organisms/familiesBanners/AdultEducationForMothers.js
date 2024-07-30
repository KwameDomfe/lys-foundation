import React from 'react'
import { Link } from 'react-router-dom'

const AdultEducationForMothers = () => {
  return (
    <div className = "tc"
    >
        <h1 className="mb4-00">Adult Education For Mothers</h1>

        <Link to="adult-education-for-mothers"
            className="black-90 pv0-50 ph1-00 ba br0-25"
        >
            Explore More
        </Link>
    </div>
  )
}

export default AdultEducationForMothers