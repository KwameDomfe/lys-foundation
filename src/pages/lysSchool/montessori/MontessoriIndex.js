
import IndexCoreConcepts from "../../../components/organisms/montessoriBanners/CoreConcepts"
import MontessorVersusConventionalMethods from "../../../components/organisms/montessoriBanners/MontessorVersusConventionalApproach"
import BeyondSureStart from "../../../components/organisms/montessoriBanners/BeyondLysSchool"
import GraduateProfiles from '../../../components/organisms/montessoriBanners/GraduateProfiles'
import Research from "../../../components/organisms/montessoriBanners/Research"
import MontessoriInTheNews from "../../../components/organisms/montessoriBanners/MontessoriInTheNews"

function MontessoriLandingPage() {

    return (
        <div className="pt4-00 mv1-00 container container90">
            <header className="tc">
                <h2>
                    Montessori Page Header
                </h2>
            </header>
            <div className="grid gtc12 ggap1-00 flex item-center justify-center "
            >
                <section id="MontessoriCoreConcepts" 
                    className="gc1s12 gr1s1 flex items-center justify-center
                    min-vh-50 ba"
                >
                    <IndexCoreConcepts />
                </section>

                <section id="MontessorVersusConventionalMethods" 
                    className="gr3s1 gc1s12 flex items-center justify-center 
                    min-vh-50 
                    bg-black-50"
                >
                    <MontessorVersusConventionalMethods />
                </section>

                <section id="BeyondSureStart" 
                    className="gc7s6 gr4s1 flex items-center justify-center
                    min-vh-50 ba"
                >
                    <BeyondSureStart />
                </section>

                <section id="GraduateProfiles" 
                    className=" gc1s6 gr4s1 flex items-center justify-center
                    min-vh-50 bg-black-50"
                >
                    <GraduateProfiles />
                </section>

                <section id="Reseach" 
                    className="gc1s6 gr2s1 flex items-center justify-center
                    min-vh-50 ba"
                >
                    <Research />
                </section>

                <section id="MontessoriInTheNews" 
                    className="gc7s6 gr2s1 flex items-center justify-center
                    min-vh-50 bg-black-50"
                >
                    <MontessoriInTheNews />
                </section>
            </div>
            <footer className="tc">
                <h2>
                    Montessori Page Footer
                </h2>
            </footer>

        </div>

    )
}

export default MontessoriLandingPage
