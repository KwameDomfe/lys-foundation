import BoardOfTrustees from '../../../components/organisms/theSchoolHomeBanners/BoardOfTrustees' 
import FacultyAndStaff from "../../../components/organisms/theSchoolHomeBanners/FacultyAndStaff"
import MissionVisionAndValues from '../../../components/organisms/theSchoolHomeBanners/MissionVisionAndValues'
import History from '../../../components/organisms/theSchoolHomeBanners/History'
import ContactsAndDirections from '../../../components/organisms/theSchoolHomeBanners/ContactsAndDirections'
import AcademicCalender from '../../../components/organisms/theSchoolHomeBanners/AcademicCalender'
import TheSchoolAtAGlance from '../../../components/organisms/theSchoolHomeBanners/theSchoolAtAGlance'


function LylSchoolLandingPage() {
    
    return (
        <div className="pt4-00 mv1-00 container container90">
            <header className="tc">
                <h2>
                   The School Header
                </h2>
            </header>
            <div className="grid gtc12 ggap1-00 mv1-00"
            >
                <section id="" 
                    className="gc1s6 gr1s1 flex items-center justify-center
                    min-vh-50 ba"
                >
                    <TheSchoolAtAGlance />
                </section>

                <section id="" 
                    className="gc7s6 gr1s2 flex items-center justify-center 
                    min-vh-50 
                    bg-black-50"
                >
                    <FacultyAndStaff />
                </section>


                <section id="" 
                    className="gc1s6 gr2s1
                        flex items-center justify-center
                        min-vh-50 bg-gold"
                >
                    <History />
                </section>

                <section id="" 
                    className="gc1s12 gr3s1
                        flex items-center justify-center
                        min-vh-50 bg-black-50"
                >
                <MissionVisionAndValues />
                </section>

                <section id="" 
                    className="gc1s6 gr4s2
                        flex items-center justify-center
                    min-vh-50 bg-black-30"
                >
                <BoardOfTrustees />
                </section>

                <section id="" 
                    className="gc7s6 gr4s1
                        flex items-center justify-center
                    min-vh-50 bg-black-50"
                >
                    <ContactsAndDirections />
                </section>

                <section id="" 
                    className="gc7s6 gr5s1
                        flex items-center justify-center
                    min-vh-50 ba"
                >
                <AcademicCalender />
                </section>
            </div>
            <footer className="tc">
                <h2>
                   The School Footer
                </h2>
            </footer>
        </div>
    )
}

export default LylSchoolLandingPage
