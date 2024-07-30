// import { Link } from "react-router-dom";
import image_01 from '../../../images/_partials/backgrounds/02.jpg';
import image_02 from '../../../images/placeholders/regular_images/regular_03.jpg';
import image_03 from '../../../images/placeholders/regular_images/regular_01.png';
import image_04 from '../../../images/_partials/backgrounds/wallpeel.jpg';
import AnchorLink from "../../atoms/AnchorLink";
// import {SGMLearning2} from '../../../data';
import Button from '../../atoms/Button'


function SGMLearning(props) {

    // const {tree} = props

    return (

        <div className ="w-100 bg-primary-01 white-90"
        >
            <header className="container container80-m 
                bg-black-40"
            >
                <hgroup className="tc pv4-00"
                >
                    <h2 className="f3-00 ttu">
                        Kuku Montessori School Learning
                    </h2>
                    <p className="pa1-00 ph4-00-m mb0-00
                        f1-75 lh-copy tj"
                    >
                        At (<abbr title="Kuku Montessori School">KMS</abbr>) we dolor sit amet consectetur rem nihil <span className="b gold">PreScool</span> vero dolore cum maxime id optio excepturi minima <span className="b gold">Lower Primary</span> laboriosam iure ipsam maxime tempora numquam optio amet, atque qui <span className="b gold">Upper Primary</span>. Voluptates quis molestiae <span className="b gold">Junior High School</span> pariatur similique saepe rem voluptate at laborum neque?
                    </p>
                   
                </hgroup>
            </header>

            <div className="bg-secondary pv2-00"
            >
                <div className ="grid gtc4 ggap1-00 min-vh-50
                    container container90 
                    f1-25"
                >
                    <Figure grid={`gc1s4 gr1s1 gr1s1-s gc1s2-s gc1s1-l`} 
                        image = {image_01} 
                        name = "Preschool"
                        desc ="Laboriosam sunt in modi pariatur reprehenderit a blanditiis eaque dignissimos ad, odio, vero, earum praesentium ipsum natus repudiandae sequi?"
                        link = "learning/preschool"
                    />
                    <Figure grid={`gc1s4 gr2s1 gr1s1-s gc3s2-s gc2s1-l`} 
                        image = {image_02}
                        name = "Lower Primary"
                        desc ="Laboriosam sunt in modi pariatur reprehenderit a blanditiis eaque dignissimos ad, odio, vero, earum praesentium ipsum natus repudiandae sequi?"
                        link = "learning/lower-primary"
                    />
                    <Figure grid={`gc1s4 gr3s1 gr2s1-s gc1s2-s gr1s1-l gc3s1-l`} 
                        image = {image_03}
                        name = "Upper Primary"
                        desc ="Laboriosam sunt in modi pariatur reprehenderit a blanditiis eaque dignissimos ad, odio, vero, earum praesentium ipsum natus repudiandae sequi?"
                        link = "learning/upper-primary"
                    />
                    <Figure grid={`gc1s4 gr4s1 gr2s1-s gc3s2-s gc4s1-l gr1s1-l`} 
                        image = {image_04}
                        name = "Junior High"
                        desc ="Laboriosam sunt in modi pariatur reprehenderit a blanditiis e praesentium ipsum natus repudiandae sequi?"
                        link = "learning/junior-high"
                    />
                </div>
            </div>

            <footer className="grid gtc2 ggap1-00 tc pv2-00 min-vh-50 container container90"> 
                <div className="gc1s2 gc1s1-m ba pa1-00 flex flex-column items-center justify-center vh-50 w-100">
                    
                    <p className="f1-50 mb2-00">
                        This content can be replaced with a very compelling summarily video of SGM
                    </p>
                    <i>( less than 5 mins duration)</i>
                </div>
                <div className="gc1s2 gc2s1-m ba pa0-50 flex flex-column flex-row-m items-center justify-center ggap1-00">
                    <h3 className="f2-00 f2-50-m mb2-00">
                        Enrol your <br /> child / ward <br /> today... <br />
                    </h3>
                    <div className="f1-25 lh-copy"
                    >
                        <h3>Talk To:</h3>
                        <div>
                            <Button 
                                width='' 
                                name='Admissions' 
                                bgColour='secondary' 
                                colour='gold'
                                icon={image_04}
                            />
                            <Button 
                                width='' 
                                name='Head of School' 
                                bgColour='secondary' 
                                colour='gold'
                                icon={image_01}
                            />
                            <Button 
                                width='' 
                                name='PTA Chairman' 
                                bgColour='secondary' 
                                colour='gold'
                                icon={image_04}
                            />
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

function Figure(props) {
    
    const { name, desc, link, image, grid} = props
    return (
        <figure 
            className={`${grid} grid gtc1 items-center justify-center w-100`}
        >
            <img src={image}
                alt="" 
                className="gc1s1 gr1s1 
                    h-100
                    cover"
            />
            <figcaption className="gc1s1 gr1s1 
                flex flex-column items-center justify-between
                h-100
                bg-black-50
                white-90 tc"
            >
                <h2 className="mb2-00">{name}</h2>
                <p>
                    {desc}
                </p>
                <div className="bg-gold pv1-00 w-100">
                    <AnchorLink href={link} 
                        icon={image_03} 
                        name={name} 
                        caption="" 
                    />
                </div>
            </figcaption>
        </figure>
    )
}

export default SGMLearning
