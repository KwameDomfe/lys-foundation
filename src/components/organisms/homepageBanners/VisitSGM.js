import { Link } from "react-router-dom"

function VisitSGM() {
  
    return (
        <div className = "flex flex-column items-center justify-center container container90 tc min-vh-60"
        >
            <p className="f2-00">Visit</p> 
            <h1 className="f3-00 mt0-00 mb2-00">
            Kuku Montessori School
            </h1>

            <h2 className="f2-00 mb2-00">
                Is Kuku Montessori School School the right fit for your family?
            </h2>
            <p className="f1-25 mb2-00">
                Visit Kuku Montessori School School and learn more about our community, our children, and our Montessori Approach.
            </p> 
            <div>
                <Link to="surestart/contacts-and-directions"
                    className="white-90 bg-secondary pv0-50 ph1-00 mb2-00 br0-25 gold"
                >
                    Visit Us
                </Link>
            </div>
        </div>
    )
}

export default VisitSGM
