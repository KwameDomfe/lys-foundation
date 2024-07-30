import { useEffect } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"

const TwoColumnsPageLayout = (props) => {
    
    // Props
    const {
        category, 
        desc_1,
        desc_2 ,
        desc_3,
        url_path_01,
        url_path_02,
        url_path_03,
        url_path_04,
        url_path_05,
        url_path_06,
        url_name_01,
        url_name_02,
        url_name_03,
        url_name_04,
        url_name_05,
        url_name_06,

    } = props
    
    //  useEffect
    useEffect(() => {
        window.scroll(0,0)
    
    }, [])


    // JSX
    return (
        <div className="container container90 pt4-00"
        >
            <div className="flex ggap1-00 relative"
            >
                <aside className="w20-00 bg-black-20 vh-100 pa1-00 mt0-00 sticky top-4"
                >
                    <h2 className="f1-25">
                        <Link to =""
                        >
                        {category}
                        </Link>
                    </h2>
                    <div className="of-y-scrol mb2-00">
                        <p>
                            {desc_1} 
                        </p>
                        <p>
                            {desc_2}
                        </p>
                        <p>
                            {desc_3}
                        </p>
                    </div>
                    <nav className="bb bt bw3 pv2-00"
                    >
                        <ul >
                            <li className="mb1-00">
                                <NavLink to={url_path_01}>
                                    {url_name_01}
                                </NavLink>
                            </li>

                            <li className="mb1-00">
                                <NavLink to={url_path_02}>
                                    {url_name_02}
                                </NavLink>
                            </li>
                            <li className="mb1-00">
                                <NavLink to={url_path_03}>
                                    {url_name_03}
                                </NavLink>
                            </li>
                            <li className="mb1-00">
                                <NavLink to={url_path_04}>
                                    {url_name_04}
                                </NavLink>
                            </li>
                            <li className="mb1-00">
                                <NavLink to={url_path_05}>
                                    {url_name_05}
                                </NavLink>
                            </li>
                            <li className="mb1-00">
                                <NavLink to={url_path_06}>
                                    {url_name_06}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main className="w-100 top-6"
                >
                     <Outlet />
                </main>
            </div>
        </div>
    )
}

export default TwoColumnsPageLayout
