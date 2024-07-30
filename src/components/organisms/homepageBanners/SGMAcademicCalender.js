// import { Link } from "react-router-dom"
import img01 from '../../../images/_partials/backgrounds/Canoes-in-Elmina.png'
import img02 from '../../../images/_partials/backgrounds/02.jpg'
import img03 from '../../../images/_partials/backgrounds/10155.jpg'
import img04 from '../../../images/_partials/backgrounds/4-2.jpg'
import { Link } from 'react-router-dom'
function SGMAcademicCalender() {
    
    function CalenderCard (props) {

        const {day, month, img, date, activity,time} = props

        return(
            <div className="flex flex-column justify-between
                pa0-50 h-100"
            >
                <div className="flex justify-around items-center
                    mb0-50 ph0-50 bg-white-20"
                >
                    <div className="mb0-00 f1-25"
                    >
                        <div >{day}</div>
                        <div className="ttu b ">{month}</div>
                    </div> 
                    <p className="f3-00 mb0-00">{date}</p>
                </div>
                
                <img src={img} 
                    alt="" 
                    className="cover h8-00"
                />
                
                <div className="flex flex-column items-center justify-center
                    pa1-00
                    bg-white-10"
                >
                    <p className="mb1-00 gold f1-25">
                        {activity}
                    </p>
                    <p className="mb0-00 f1-25">
                        {time}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <>
        <header>
            <h2 className="f3-00 tc white-90 pv1-00">
                Academic Calender
            </h2>
        </header>
        <div className="flex justify-between items-center ggap0-50
            container container90 tc bg-black-50 "
        >
            <div className="w3-00 h3-00
                pr1-00 pl0-50 ma1-00
                bg-gold 
                br5-00 
                f2-00 b 
                pointer"
            >
                <p>&lt;</p>
            </div>
            <div className="gc1s6 gr1s1 
                grid gtc4 items-center justify-center ggap1-00 w-100 pv4-00
                white-90"
            >
                <div className="gc1s1 gr1s1
                    bg-black-80 h-100"
                >
                    <CalenderCard day="Friday"
                        date = "21"
                        month = "Mar"
                        activity = "Confeerence of Motessori Schools"
                        img = {img01}
                        time = "8:30am - 2:30pm"
                    />
                </div>
                
                <div className="gc2s1 gr1s1
                    bg-black-80 h-100"
                >
                    <CalenderCard day="Friday"
                        date = "21"
                        month = "Mar"
                        activity = "Parent Teacher Association Meeting"
                        img = {img02}
                        time = "12:30pm - 3:30pm"
                    />
                </div>
                
                <div className="gc3s1 gr1s1
                    bg-black-80 h-100"
                >
                    <CalenderCard day="Friday"
                        date = "21"
                        month = "Mar"
                        activity = "Educational Trip to Nkrumah Mauseleum"
                        img = {img03}
                        time = "All Day"
                    />
                </div>
                
                <div className="gc4s1 gr1s1
                    h-100
                    bg-black-80"
                >
                    <CalenderCard day="Friday"
                        date = "21"
                        month = "Mar"
                        activity = "Mid Term Break for the term"
                        img = {img04}
                        time = "All Day"
                    />
                </div> 
            </div>
            <div className="
                w3-00 h3-00 
                ph1-00 ma1-00
                bg-gold 
                br5-00 
                f2-00 b 
                pointer"
            >
                <p>&gt;</p>
            </div>
        </div>
        <footer>
        <p className="f1-50 tc white-90 pv2-00 mb4-00"
        >
            View full list of Academic Calender for the term <Link rel="stylesheet" to="surestart/academic-calender">here</Link>.
        </p>
        </footer>
        </>

    )
}

export default SGMAcademicCalender
