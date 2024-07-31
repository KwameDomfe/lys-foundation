import React from 'react'
import { Link } from 'react-router-dom'

const LysFoundation = () => {
    return (
        <div className="flex flex-column justify-center items-center mt4-00 min-vh-90 tc"
        >
            <h2>
                Lys Foundation Homepage
            </h2>
            <p>
                Page Under Development.
            </p>
            <p>
                Go to <div className="ba pa1-00 mv2-00">
                        <Link to ="/">Home Page </Link>
                    </div>  
                    <div className="ba pa1-00">
                        <Link to ="/lys-school">Lys School Page</Link>
                    </div>
            </p>
        </div>
    )
}

export default LysFoundation