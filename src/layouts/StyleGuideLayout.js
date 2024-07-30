import { Link, NavLink, Outlet } from "react-router-dom"
import mks from '../svgs/socialMedia/twitter.svg'

export default function StyleGuideLayout() {

    const sg_menu = [
        {
            name : 'atoms',
            url : 'atoms',
            icon : mks
        },
        {
            name : 'molecules',
            url : 'molecules',
            icon : mks
        },
        {
            name : 'organisms',
            url : 'organisms',
            icon : mks
        },
        {
            name : 'templates',
            url : 'templates',
            icon : mks
        },
    ]

    return (
        <div id="style-guide"
            className="min-vh-100 pt4-00 container container90"
        >
            <header>
                <h2>Style Guide</h2>
                <p>
                    Lorem dd CSS files. In the simplest case, you’ll add a tag to your HTML. If you use a build tool or a framework, consult its documentatie to your project.
                </p>
                <p>
                    Lorem dd CSS files. In the simplest case, you’ll add a tag to your HTML. If you use a build tool or a framework, consult its documentatie to your project.
                </p>
                <p>
                    Lorem dd CSS files. In the simplest case, you’ll add a tag to your HTML. If you use a build tool or a framework, consult its documentatie to your project.
                </p>
                <p>
                    Lorem dd CSS files. In the simplest case, you’ll add a tag to your HTML. If you use a build tool or a framework, consult its documentatie to your project.
                </p>
            </header>

            <div id=""
                className="grid gtc12 min-vh-100"
            >
                <nav id = "helpLinks"
                    className="gc1s3 
                        items-center justify-center
                        h-100
                        pa1-00
                        bg-blue3 mr2-00 "
                >
                    <Link to= '' >
                        <h2>Style Guide</h2>
                    </Link>
                    <ul className="h-100"
                    >
                        {
                            sg_menu.map((menu) =>(
                                <li key={menu.name}>
                                    <NavLink
                                        className="flex"
                                        to= {menu.url}
                                        
                                    >
                                        <img
                                            src={menu.icon}
                                            alt={menu.name}
                                            className="w1-00"
                                        />{menu.name}
                                    </NavLink>
                                </li>

                            ))
                        }
                    </ul>
                </nav>
                
                <main className="gc4s6 w-100 h-100"
                >
                    <Outlet />
                </main>
                
                <div id=""
                    className="gc10s3 w-100 h-100"
                >
                
                </div>
            </div>
        
        </div>
    )
}
