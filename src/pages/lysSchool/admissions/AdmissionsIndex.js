import AdmissionProcess from '../../../components/organisms/admissionsBanners/AdmissionProcess'
import AdmissionWelcome from '../../../components/organisms/admissionsBanners/Welcome'
import ConnectWithUs from '../../../components/organisms/admissionsBanners/ConnectWithUs'
import TutionAndFees from '../../../components/organisms/admissionsBanners/TutionAndFees'
import FinancialAid from '../../../components/organisms/admissionsBanners/FinancialAid'
import FrequentlyAskedQuestions from '../../../components/organisms/admissionsBanners/FrequentlyAskedQuestions'

function AdmissionsIndex() {
    
    return (
        <div className="grid gtc12 
            flex item-center justify-center
            container container90 pt4-00"
        >
            <div className="gc1s12 
                h-100"
            >
                <hgroup className="gc1s12 
                    w-100 
                    blue0 
                    tc"
                >
                    <h1 className="ph1-00 pt0-00 mv1-50
                        f3-00 ttu"
                    >
                        Admissions
                    </h1>
                </hgroup>

                <section id="" 
                    className="flex items-center justify-center
                        min-vh-50 bg-black-50"
                >
                    <AdmissionWelcome />
                </section>
                <section id="" 
                    className="flex items-center justify-center
                        min-vh-50 "
                >
                    <AdmissionProcess />
                </section>
                <section id="" 
                    className="flex items-center justify-center 
                        min-vh-50 
                        bg-black-50"
                >
                    <ConnectWithUs />
                </section>
                <section id="" 
                    className="flex items-center justify-center
                    min-vh-50 "
                >
                    <TutionAndFees />
                </section>

                <section id="" 
                    className="flex items-center justify-center
                    min-vh-50 
                    bg-black-50"
                >
                    <FinancialAid />
                </section>

                <section id="" 
                    className="flex items-center justify-center
                    min-vh-50 
                    "
                >
                    <FrequentlyAskedQuestions />
                </section>
            </div>
        </div>
    )
}

export default AdmissionsIndex
