import { Link } from 'react-router-dom'

export default function FrequentlyAskedQuestions() {
  return (
    <div className = "tc"
        >
            <h1 className="mb4-00"
            >
                Frequently asked Questions
            </h1>

            <Link to="frequently-asked-questions"
                className="black-90 pv0-50 ph1-00 ba br0-25"
            >
                Explore More
            </Link>
        </div>
  )
}
