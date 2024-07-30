import React from 'react'
import { Link } from 'react-router-dom'

export default function GraduateProfiles() {
  return (
    <div className="tc">
        <header className="tc">
            <h2>
               Graduate Profiles Page Header
            </h2>
        </header>
        <main className="vh-75">
            <h1 className="f3-00 "
            >
                Graduate Profiles
            </h1>
        {/* <div>
            <Link to="graduate-profiles"
                className="black-90 pv0-50 ph1-00 ba br0-25"
            >
                Explore More
            </Link>
        </div> */}
        </main>
       
        <footer className="tc">
            <h2>
               Graduate Profiles Page Footer
            </h2>
        </footer>

    </div>
  )
}
