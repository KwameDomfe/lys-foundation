import { Link } from "react-router-dom";


export default function ContactsAndDirections() {
  return (
    <div className = "tc"
        >
            <h1 className="mb4-00"
            >
                Contacts and Directions
            </h1>

            <Link to="contacts-and-directions"
                className="black-90 pv0-50 ph1-00 ba br0-25"
            >
                Explore More
            </Link>
        </div>
  )
}
