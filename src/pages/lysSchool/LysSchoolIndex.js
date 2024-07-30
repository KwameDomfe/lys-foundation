import { Link } from "react-router-dom"


const LysSchoolIndex = () => {

    return (
        <div className="flex flex-column pt4-00 tc">
            <header className="pv2-00 bg-black-20">
                <h2>LysSchool Header</h2>
            </header>
            <main className=" flex flex-column justify-around items-center min-vh-60">
                <section className="ba pa1-00">
                    <h2>
                       <Link to = "the-school"
                       >The School</Link>  
                    </h2>
                </section>
                <section>
                    <h2>
                        <Link to = "montessori"
                        >Montessori</Link>
                    </h2>
                </section>
                <section>
                    <h2>
                        <Link to = "learning"
                        >Learning</Link> 
                    </h2>
                </section>
                <section>
                    <h2>
                        <Link to = "admissions"
                        >Admissions </Link>
                    </h2>
                </section>
                <section>
                    <h2>
                        <Link to = "families"
                        >Families </Link>
                    </h2>
                </section>
            </main>
            <footer className="bg-black-20 pv1-00">
                <h2>LysSchool Footer</h2>
            </footer>
        </div>
    )
}

export default LysSchoolIndex