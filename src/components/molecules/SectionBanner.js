import { Link } from "react-router-dom";


export default function SectionBanner(props) {

    const {sectionName, sectionURL} = props

    return (
        <div id=""
            className="gr1s1 gc1s1 
                flex flex-column justify-center 
                h-100 w-100
                bg-black-40 
                tc"
        >
            <h1 className="mb2-00"
            >
                {sectionName}
            </h1>

            <div>
                <Link to={sectionURL}
                    className="pv0-50 ph1-00 white-90 ba br0-25"
                >
                    Explore More
                </Link>
            </div>
            
        </div>
    )
}
