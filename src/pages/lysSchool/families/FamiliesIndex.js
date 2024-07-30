import ParentsHandBook from '../../../components/organisms/familiesBanners/ParentHandbook'
import ParentTeacherAssociations from '../../../components/organisms/familiesBanners/ParentTeacherAssociation'
import AdultEducationForMothers from '../../../components/organisms/familiesBanners/AdultEducationForMothers'

function FamiliesIndex() {
    
    return (
        <div className="grid gtc12 
            flex item-center justify-center pt4-00"
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
                        Families
                    </h1>
                </hgroup>

                <section id="" 
                    className="flex items-center justify-center
                        min-vh-50 bg-black-50"
                >
                    <ParentsHandBook />
                </section>

                <section id="" 
                    className="flex items-center justify-center 
                        min-vh-50 
                        "
                >
                    <ParentTeacherAssociations />
                </section>
                <section id="" 
                    className="flex items-center justify-center 
                        min-vh-50 
                        bg-black-50"
                >
                    <AdultEducationForMothers />
                </section>
            </div>
        </div>
    )
}

export default FamiliesIndex
