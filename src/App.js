import './App.css';
import './css/utilities.css';
import './css/gdb_normalize.css';

import { 
createBrowserRouter,
Route,
createRoutesFromElements,
RouterProvider,
} from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';
import TwoColumnsPageLayout from './layouts/TwoColumnsLayout';
// import InfoLayout from './layouts/InfoLayout';
// import StyleGuideLayout from './layouts/StyleGuideLayout';

// Pages Routes
import HomePage from './pages/HomePage';


import Styleguide from './pages/styleguide/Styleguide';
// import Atoms from './pages/styleguide/Atoms';
// import Molecules from './pages/styleguide/Molecules';
// import Organisms from './pages/styleguide/Organisms';
// import Templates from './pages/styleguide/Templates';



import LysSchoolIndex from './pages/lysSchool/LysSchoolIndex';
import TheSchoolIndex from './pages/lysSchool/theSchool/TheSchoolIndex'
import LysSchoolAtAGlance from './pages/lysSchool/theSchool/LysSchoolAtAGlance';
import FacultyAndStaff from './pages/lysSchool/theSchool/FacultyAndStaff';
import BoardOfTrustees from './pages/lysSchool/theSchool/BoardOfTrustees';
import MissionVisionAndValues from './pages/lysSchool/theSchool/MissionVisionAndValues';
import History from './pages/lysSchool/theSchool/History';
import ContactsAndDirections from './pages/lysSchool/theSchool/ContactsAndDirections';
import AcademicCalender from './pages/lysSchool/theSchool/AcademicCalender';

import MontessoriIndex from './pages/lysSchool/montessori/MontessoriIndex'
import CoreConcepts from './pages/lysSchool/montessori/CoreConcepts'
import MontessoriVersusConventionalMethods from './pages/lysSchool/montessori/MontessoriVersusConventionalMethods';
import Research from './pages/lysSchool/montessori/Research';
import MontessoriInTheNews from './pages/lysSchool/montessori/MontessoriInTheNews';
import BeyondLysSchool from './pages/lysSchool/montessori/BeyondLysSchool';
import GraduateProfiles from './pages/lysSchool/montessori/GraduateProfiles';

import LearningIndex from './pages/lysSchool/learning/LearningIndex';
import Preschool from './pages/lysSchool/learning/Preschool';
import LowerPrimary from './pages/lysSchool/learning/LowerPrimary';
import UpperPrimary from './pages/lysSchool/learning/UpperPrimary';
import JuniorHigh from './pages/lysSchool/learning/JuniorHigh';

import AdmissionsIndex from './pages/lysSchool/admissions/AdmissionsIndex';
import Welcome from './pages/lysSchool/admissions/Welcome';
import AdmissionProcess from './pages/lysSchool/admissions/AdmissionProcess';
import ConnectWithUs from './pages/lysSchool/admissions/ConnectWithUs';
import TutionAndFees from './pages/lysSchool/admissions/TutionAndFees';
import FinancialAid from './pages/lysSchool/admissions/FinancialAid';
import FrequentlyAskedQuestions from './pages/lysSchool/admissions/FrequentlyAskedQuestions';

import FamiliesIndex from './pages/lysSchool/families/FamiliesIndex';
import ParentTeacherAssociation from './pages/lysSchool/families/ParentTeacherAssociation';
import ParentsHandbook from './pages/lysSchool/families/ParentsHandbook';
import AdultEducationForMothers from './pages/lysSchool/families/AdultEducationForMothers';

import LysFoundationIndex from './pages/lysFoundation/LysFoundation';

import PageNotFound from './pages/PageNotFound';

// Function
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route  path="/"
            element={<RootLayout />}
        > 
            <Route index 
                exact
                element = {<HomePage />}
            />

            <Route path = "lys-foundation"
                element  = {<LysFoundationIndex />}
            />

            <Route path = "lys-school"
                element = {<LysSchoolIndex />}
            />

            <Route path = "lys-school"
                
            >
                <Route
                    path = "the-school"
                    element = {<TheSchoolIndex />}
                />

                <Route path = "the-school"
                    element = {
                        <TwoColumnsPageLayout 
                            category = 'The School'
                            desc_1 = 'The school Next a valid value to be accessible. Provide a valid, navigable address as the href value., navigable address as the href value.'
                            desc_2  = 'The school Next a valid value to be accessible. Provide a valid, navigable address as the href value.'
                            desc_3 = 'The school Next alid,Provide a valid, navigable address as the href value. navigable address as the href value.'
                            url_path_01 = 'the-school-at-a-glance'
                            url_path_02 = 'history'
                            url_path_03 = 'faculty-and-staff'
                            url_path_04 = 'board-of-trustees'
                            url_path_05 = 'contacts-and-directions'
                            url_path_06 = 'academic-calender'
                            url_name_01 = 'The school at a glance'
                            url_name_02 = 'history'
                            url_name_03 = 'faculty and staff'
                            url_name_04 = 'board of trustees'
                            url_name_05 = 'contacts and directions'
                            url_name_06 = 'academic calender'
                        />
                    }
                >
                    <Route path = "the-school-at-a-glance" 
                        element = {<LysSchoolAtAGlance />} 
                    />
                    <Route path = "faculty-and-staff" 
                        element = {<FacultyAndStaff />} 
                    />
                    <Route path = "board-of-trustees" 
                        element = {<BoardOfTrustees />} 
                    />
                    <Route path = "mission-vision-and-values" 
                        element = {<MissionVisionAndValues />} 
                    />
                    <Route path = "history" 
                        element = {<History />} 
                    />
                    <Route path = "contacts-and-directions" 
                        element = {<ContactsAndDirections />} 
                    />
                    <Route path = "academic-calender" 
                        element = {<AcademicCalender />} 
                    />
                </Route>

                <Route path = "montessori" 
                    element = {<MontessoriIndex />} 
                />

                <Route path = "montessori"
                    element = {
                        <TwoColumnsPageLayout 
                            category = 'Montessori'
                            desc_1 = 'Montessori Your Next a valid value to be accessible. Provide a valid, navigable address as the href value.'
                            desc_2  = 'Montessori Your Next a valid value to be accessible. Provide a valid, navigable address as the href value.'
                            desc_3 = 'Montessori Your Next a valid value to be accessible. Provide a valid, navigable address as the href value.'
                            url_path_01 = 'core-concepts'
                            url_path_02 = 'research'
                            url_path_03 = 'montessori-in-the-news'
                            url_path_04 = 'montessori-versus-conventional-approach'
                            url_path_05 = 'beyond-lys-school'
                            url_path_06 = 'graduate-profiles'
                            url_name_01 = 'core concepts'
                            url_name_02 = 'research'
                            url_name_03 = 'montessori in the news'
                            url_name_04 = 'Montessori Versus Conventional Approach'
                            url_name_05 = 'Beyond Lys School'
                            url_name_06 = 'Graduate Profiles'
                        />
                    }
                >
                    <Route path = "core-concepts" 
                    element = {<CoreConcepts />} 
                    />
                     <Route path = "montessori-versus-conventional-approach" 
                    element = {<MontessoriVersusConventionalMethods />} 
                    />
                    <Route path = "beyond-lys-school" 
                    element = {<BeyondLysSchool />} 
                    />
                    <Route path = "research" 
                    element = {<Research />} 
                    />
                    <Route path = "montessori-in-the-news" 
                    element = {<MontessoriInTheNews />} 
                    /> 
                    <Route path = "graduate-profiles" 
                    element = {<GraduateProfiles />} 
                    />
                </Route>

                <Route path = "learning" 
                    element = {<LearningIndex />} 
                />
                <Route path = "learning" 
                    element = {
                        <TwoColumnsPageLayout category = 'Learning'
                        desc_1 = 'Learning a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        desc_2  = 'Learning a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        desc_3 = 'Learning a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        url_path_01 = 'pre-school'
                        url_path_02 = 'lower-primary'
                        url_path_03 = 'upper-primary'
                        url_path_04 = 'junior-high'
                        url_path_05 = ''
                        url_path_06 = ''
                        url_name_01 = 'Pre School'
                        url_name_02 = 'lower primary'
                        url_name_03 = 'upper-primary'
                        url_name_04 = 'junior-high'
                        url_name_05 = ''
                        url_name_06 = ''
                        />
                    } 
                >
                    <Route path = "pre-school" 
                    element = {<Preschool />} 
                    />
                    <Route path = "lower-primary" 
                    element = {<LowerPrimary />} 
                    />
                    <Route path = "upper-primary" 
                    element = {<UpperPrimary />} 
                    />
                    <Route path = "junior-high" 
                    element = {<JuniorHigh />} 
                    />
                </Route>
                <Route path = "admissions" 
                    element = {<AdmissionsIndex />} 
                />
                <Route path = "admissions" 
                    element = {
                        <TwoColumnsPageLayout category = 'Admissions'
                        desc_1 = 'The admissions section a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        desc_2  = 'The admissions section a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        desc_3 = 'The admissions section a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        url_path_01 = 'welcome'
                        url_path_02 = 'admission-process'
                        url_path_03 = 'connect-with-us'
                        url_path_04 = 'tution-and-fees'
                        url_path_05 = 'financial-aid'
                        url_path_06 = 'frequently-asked-questions'
                        url_name_01 = 'welcome'
                        url_name_02 = 'admission process'
                        url_name_03 = 'connect with us'
                        url_name_04 = 'tuition and fees'
                        url_name_05 = 'financial aid'
                        url_name_06 = 'frequently asked questions'
                        />
                    } 
                >
                    <Route path = "welcome" 
                    element = {<Welcome />} 
                    />
                     <Route path = "admission-process" 
                    element = {<AdmissionProcess />} 
                    />
                    <Route path = "connect-with-us" 
                    element = {<ConnectWithUs />} 
                    />
                    <Route path = "tution-and-fees" 
                    element = {<TutionAndFees />} 
                    />
                    <Route path = "financial-aid" 
                    element = {<FinancialAid />} 
                    />
                    <Route path = "frequently-asked-questions" 
                    element = {<FrequentlyAskedQuestions />} 
                    /> 
                </Route>
                <Route path = "families" 
                    element = {<FamiliesIndex />} 
                />
               <Route path = "families" 
                    element = {
                        <TwoColumnsPageLayout category = 'Families'
                        desc_1 = 'The Family Your Next a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        desc_2  = 'The Family Your Next a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        desc_3 = 'The Family Your Next a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        url_path_01 = 'parents-handbook'
                        url_path_02 = 'parent-teacher-association'
                        url_path_03 = 'adult-education-for-mothers'
                        url_path_04 = ''
                        url_path_05 = ''
                        url_path_06 = ''
                        url_name_01 = 'parents-handbook'
                        url_name_02 = 'parent teacher association'
                        url_name_03 = 'Adult Education For Mothers'
                        url_name_04 = ''
                        url_name_05 = ''
                        url_name_06 = ''
                        />
                    }  
                >
                    <Route path = "parents-handbook" 
                    element = {<ParentsHandbook />} 
                    />
                    <Route path = "parent-teacher-association" 
                    element = {<ParentTeacherAssociation />} 
                    />
                    <Route path = "adult-education-for-mothers" 
                    element = {<AdultEducationForMothers />} 
                    />
                </Route>
            </Route>

            <Route path = "style-guide/" 
                element  = {<Styleguide />}
            />

            {/* <Route path = "style-guide/"
                element = {<StyleGuideLayout />} 
            >
                <Route path = "atoms" 
                    element = {<Atoms />} 
                />
                <Route path = "molecules" 
                    element = {<Molecules />} 
                />
                <Route path = "organisms" 
                    element = {<Organisms />} 
                />
                <Route path = "templates" 
                    element = {<Templates />} 
                />
            </Route> */}

            

            <Route path="*"
            element = { <PageNotFound /> }
            >
            </Route>

        </Route>

    )
)

function App() {

    return (
        <RouterProvider
            router={router}
        />
    );

} 

export default App;
