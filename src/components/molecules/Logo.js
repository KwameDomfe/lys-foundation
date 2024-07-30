import { Link } from 'react-router-dom'
import logo from '../../images/_partials/logos/lys_foundation_logo.png'

const Logo = () => {
    
    return (
        <Link to = "/"
            className="white-90"
        >
            <figure id="m__logo"
                className="flex items-center justify-center ttu"
            >
                <img src={logo}
                    alt="The LYS Foundation Logo"
                    className="w2-50 h2-50 br5-00"
                />
                <figcaption 
                    className="dn-m db-l ml1-00 f1-25"
                >   
                    The LYS
                    <div id=""
                        className="f1-00
                        fw1"
                    >
                        Foundation
                    </div>
                </figcaption> 
            </figure>
        </Link>
    )
}

export default Logo
