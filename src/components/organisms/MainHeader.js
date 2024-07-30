import { useState } from 'react'
import Logo from '../molecules/Logo'
import MenuToggle from '../molecules/MenuToggle'
import PrimaryNavigation from '../molecules/PrimaryNavigation'
import SecondaryNavigation from '../molecules/SocialNavigation'
// import UserAccounts from '../molecules/UserAccounts'


const MainHeader = () => {
    // UseState Variables
    const [toggleMenu, SetToggleMenu] = useState(true)

    /* Custom Functions */

    // HandleToggleMenu
    const handleToggleMenu = () => {SetToggleMenu(!toggleMenu)};
    const handleToggleMenu2 = function(){SetToggleMenu(!toggleMenu)};
    
    return (
        <article id="xxx-MainHeader"
            className={`flex items-center justify-center
                w-100 w-100-m ${toggleMenu ? "h4-00" : "h-100"} of-hidden h4-00-m
                bg-black-90 pv0-50
                fixed z-5`}
        >
            <div id="xxx-MainHeader--content"
                className="flex flex-column flex-row-m items-center      
                    justify-between h-100
                    container container90 
                    "
            >
                <section id="xxx-MainHeader--LogoAndMenuToggle"
                    className="flex justify-between items-center 
                        w-100 w-40-m 
                        mb1-00 mb0-00-m"
                > 
                    <Logo />
                    <MenuToggle
                        toggleMenu={toggleMenu} 
                        onClick={handleToggleMenu2}
                    />
                </section>
                
                <section id="xxx-MainHeader--NavigationAndUserAccounts"
                    className="flex flex-column justify-around items-center  
                    flex-row-m justify-between-m
                    w-100 h-100
                    pa0-50 mt6-00 mt0-00-m
                    br0-50 bg-white-20"
                >
                    <nav className="mb0-00-m"
                    >
                        <PrimaryNavigation onClick = {handleToggleMenu}/>
                    </nav>
                    <nav className="flex-m justify-center mb0-00"
                    >
                        <SecondaryNavigation />
                    </nav>
                    {/* <article className="flex-m mb0-00-m"
                    >
                        <UserAccounts />
                    </article> */}
                </section>

            </div>
        </article>
    )
  }
  
export default MainHeader