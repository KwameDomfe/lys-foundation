import { Outlet } from "react-router-dom"
// import ObjectList from '../components/molecules/ObjectList21'
import ObjectList from "../components/molecules/ObjectList"
import { mainMenuLinks } from "../data"


export default function LandingPageLayout(props) {

    // Arrays Variables
    const { 
        img_01,
        img_02,
        img_03,
        img_04,
        data,
        category,
        description
    } = props

    
    return (
        <div id="LandingPage"
            className="w-100"
        >
            <header id="LandingPage__PicturesBanner" 
                className="grid gtc12"
            >
                <div className="gc1s12 gr1s1"></div>
                <figure className="gc1s12 gr1s1 
                    grid gtc4 
                    vh-75 container container90 
                    bg-black-80 pa0-0"
                >
                    <img src={img_01}
                        alt="" 
                        className="h-100 gc1s1 cover"
                    />
                    <img src={img_02} 
                        alt="" 
                        className="h-100 gc1s1 gr2s1 cover"
                    />
                    <img src={img_03} 
                        alt="" 
                        className="h-100 gr2s1 cover"
                    />
                    <img src={img_04} 
                        alt="" 
                        className="h-100 cover"
                    />
                    <div className="gc3s2 gr1s2 h-100 grid items-center justify-center white-90">
                        <hgroup className='w-100'>
                            <h1 className="mv2-00
                                f3-00 ttu tc"
                            >
                                {category}
                            </h1>
                            
                            {description}
                            
                        </hgroup>
                        <small>

                        </small>
                    </div>
                </figure>
            </header>
            
            <div id=""
                className="grid gtc12 container container90"
            >
                 <aside id=""
                    className="gc1s3 sticky top-0
                        bg-blue1 vh-100 sticky pa1-00"
                >
                   
                    <nav id="PageNavigation"
                    >
                        <ul 
                            className={`w-100
                                pv1-00 
                                blue0`}
                        >   
                            <ObjectList category = {category}
                                items={mainMenuLinks} 
                            />
                        </ul>
                    </nav>
                    
                </aside>
                <main id="" 
                    className="gc4s9"
                >
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
