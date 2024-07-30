import { Link } from 'react-router-dom'
import facebook from '../../svgs/socialMedia/facebook.svg'
import twitter from '../../svgs/socialMedia/twitter.svg'
import linkedin from '../../svgs/socialMedia/linkedin.svg'
import youtube from '../../svgs/socialMedia/youtube.svg'
// import { useState } from 'react'
const SocialNavigation = () => {

    const mainNav= [
        {
            id : 1,
            icon : facebook,
            url : 'https://www.facebook.com'
        },
        {
            id : 2,
            icon : twitter,
            url : 'https://www.twitter.com'
        },
        {
            id : 3,
            icon : linkedin,
            url : 'https://www.linkedin.com'
        },
        {
            id : 4,
            icon : youtube,
            url : 'https://www.youtube.com'
        },
    ]

    return (
        <ul className="flex justify-between items-center 
            ph1-00 pv1-00 mb0-00-m w-100"
        >
            {mainNav.map((a)=>{
                        return (
                            <li key={a.id} 
                                className="mb0-00"
                            >
                                <Link to = {a.url}
                                    className="flex justify-center gold items-center"
                                    target="_blank"
                                >
                                    <figure className="ba bw1 br-100 mh0-25"
                                    >
                                        <img src={a.icon}
                                            className="w1-25 h1-25 pa0-25"
                                            alt={a.url}
                                        />
                                    </figure>
                                </Link>
                            </li>
                        )
                    }
                )
            }
        </ul>
    )
}

export default SocialNavigation