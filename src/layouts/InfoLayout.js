import { NavLink, Outlet } from "react-router-dom"

export default function InfoLayout() {
  return (
    <div id="Info"
        className="container container90 pt4-00 "
    >
        <div id=""
            className="grid gtc12 vh-100"
        >
            <aside id = "InfoLinks"
                className="gc1s3 
                    items-center justify-center
                    vh-100
                    pa1-00
                    bg-blue3 "
            >
                <header>
                    <h2>Info</h2>
                    <p>
                        Lorem dd CSS files. In the simplest case, you’ll add a tag to your HTML. If you use a build tool or a framework, consult its documentatie to your project.
                    </p>
                </header>
                <nav>
                    <ul className="h-100"
                    >
                        <li>
                            <NavLink
                                className="blue0"
                                to= "faq"
                            >
                                FAQs
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink 
                                className="blue0"
                                to= "contact"
                            >
                                Contact Us
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                className="blue0"
                                to= "governance"
                            >
                                govenance
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="blue0"
                                to= "careers"
                            >
                                careers
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
            
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
