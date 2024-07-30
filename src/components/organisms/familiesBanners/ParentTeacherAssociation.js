import React from 'react'
import { Link } from 'react-router-dom'

export default function ParentTeacherAssociations() {
  return (
    <div className = "tc"
    >
        <h1 className="mb4-00">Parent Teacher Association</h1>

        <Link to="parent-teacher-association"
            className="black-90 pv0-50 ph1-00 ba br0-25"
        >
            Explore More
        </Link>
    </div>
  )
}
