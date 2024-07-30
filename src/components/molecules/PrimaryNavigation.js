import { NavLink } from 'react-router-dom'
import logo from '../../images/_partials/logos/lys_foundation_logo.png'

// import third from '../../images/placeholders/portrait/portrait-01.jpg'


const  PrimaryNavigation = (props) => {

    const mainNav= [
        {
            id : 1,
            prefix :'Lys',
            name :'Foundation',
            icon : logo,
            url : 'lys-foundation'
        },
        {
            id : 2,
            prefix :'Lys',
            name :'Shool',
            icon : logo,
            url : 'lys-school'
        },
        // {
        //     id : 3,
        //     prefix :'style',
        //     name :'Guide',
        //     icon : third,
        //     url : 'style-guide'
        // },
    ]

    const {onClick} = props;
    
    return (
        <ul className="flex flex-column items-center justify-center flex-row-m
            "
        >
            {mainNav.map((a)=>{ 
                return (
                    <li key={a.id} 
                        className="mr1-00 mb2-00 mb0-00-m w-100"
                        onClick={onClick}
                    >
                        <NavLink to = {a.url}
                            className="f0-75 flex items-center white-80 pb0-50"
                        >
                            
                            <img src={a.icon}
                                className="w1-25 h1-25 br0-25 ba bw1 gold cover"
                                alt={a.prefix + a.name}
                            />

                            <div className="ml0-50"
                            >
                                <span>{a.prefix}</span> 
                                <span className="gold f1-00">{a.name}</span>
                            </div>
                        </NavLink>
                    </li>
                )})}
        </ul>
    )
}

export default PrimaryNavigation