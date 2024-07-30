import banner_2024 from '../../../images/_partials/backgrounds/corporate-responsibility.jpg'
import AnchorLink from '../../atoms/AnchorLink';
import Features from './Features';
import regularImage03 from '../../../images/placeholders/regular_images/regular_03.jpg'
import mailIcon from '../../../svgs/mails/Mail_(iOS).svg'

function HeroSection() {
     
    const bannerTitle = `Kuku Montessori School (KMS)`;
    const bannerSubTitle = "- School's most cuurent and relevant endeavour -";

    return (
        <article id="HeroSection"
            className="grid gtc12
                h-100 w-100 
                tc"
        >
            <img id="HeroSection__Banner"
                src={banner_2024}
                alt=""
                className="gc1s12 gr1s4 
                    min-vh-60 
                    cover"
            />

            <div id="HeroSection__Overlay"
                className="gc1s12 gr1s4 
                    flex flex-column items-center justify-center 
                    bg-gradient1BT"
            >   
            </div>
            <hgroup id="HeroSection__Overlay"
                className="gc1s12 gr1s3 
                    flex flex-column items-center justify-center 
                    bg-black-10"
            >   <h1 className="gold f3-00 mb2-00 ttu"
                >
                    {bannerTitle}
                </h1>
                <h2 className="white-90 mb2-00"
                >
                   {bannerSubTitle}
                </h2>
            </hgroup>

            <div className="gc1s12 gr4s1 
                flex justify-between items-center
                w-30 container
                pv4-00"
            >
                <AnchorLink href="" 
                    icon={mailIcon}
                    name="Primary CTA" 
                    caption=""
                />

                <AnchorLink href="" 
                    icon={regularImage03} 
                    name="Secondary CTA" 
                />
            </div>

            <Features />
        </article>
    )
}

export default HeroSection
