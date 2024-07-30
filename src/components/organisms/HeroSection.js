import React from 'react'
import jpg_1 from '../../images/_partials/backgrounds/capecoastcastle.jpg'
import { Link } from 'react-router-dom'
function HeroSection() {
  
  return (
    <section id="HeroSection" 
        className="grid gtc12
            min-vh-100 mt4-00"
    >   
        <img id="HeroSection__Banner" 
            src={jpg_1}
            alt="" 
            className="gc1s12 gr1s1 w-100 h-100 bg-gray" 
        />

        <div id="HeroSection__Overlay" 
            className="grid gc1s12 gr1s1 
                items-center justify-center
                bg-black-80"
        >
        </div>

        <div id="HeroSection__Content" 
        className="container container90
            gc1s12 gr1s1 items-center justify-center
            pt6-00 pb4-00
            grid gtc12 ggap1-00 
            f2-00 white-90"
        >
            <hgroup className="w-100 gc1s9 gr1s1 ">
                <h1 className="mt0-00 mb4-00">
                Clients are our focus on our delivery promise. 
                </h1>
                <p >
                We architect Bespoke Digital Solutions for our clients 
                </p>
                <div className="mb3-00 mt4-00">
                    <Link  to="#" 
                        className="dib 
                            mr2-00 pv0-50 ph1-00 
                            ba 
                            f1-25 ttu bg-gold
                            br0-25 b--gold black-90
                            bw1">
                        request for a service
                    </Link>
                    <Link to="#" className="dib 
                            pv0-50 ph1-00 
                            ba 
                            f1-25
                            br0-25 b--gold gold
                            bw1 ttu">
                        TOUR our projects
                    </Link>
                </div>
            </hgroup>
            <div className="gc5s2 gr2s1 
                w-100 h0-00 
                pb-75 
                bg-black-50
                ba b--gold br0-25">
            </div>
            <div className="gc7s2 gr2s1 
                w-100 h0-00 
                pb-75 
                bg-black-50
                ba b--gold br0-25">
            </div>
            <div className="gc9s2 gr2s1 
                w-100 h0-00 
                pb-75 
                bg-black-50
                ba b--gold br0-25">
            </div>
            <div className="gc11s2 gr2s1 
                w-100 h0-00 
                pb-75 
                bg-black-50
                ba b--gold br0-25">
            </div>
        </div>

        <footer id="HeroSection__Footer" 
            className="gc1s12
                flex justify-between items-center 
                container container90  
                pv4-00"
        >
            <div className="flex items-center justify-center 
                w6-00 h6-00 
                bg-black-50 
                ba br5-00">
                card I
            </div>
            <div className="flex items-center justify-center 
                w6-00 h6-00 
                bg-black-50 
                ba br5-00">
                card II
            </div>
            <div className="flex items-center justify-center 
                w6-00 h6-00 
                bg-black-50 
                ba br5-00">
                card III
            </div>
            <div className="flex items-center justify-center 
                w6-00 h6-00 
                bg-black-50 
                ba br5-00">
                card I
            </div>
            <div className="grid items-center justify-center 
                w6-00 h6-00 
                bg-black-50 
                ba br5-00">
                card II
            </div>
            <div className="flex items-center justify-center 
                w6-00 h6-00 
                bg-black-50 
                ba br5-00">
                card III
            </div>
        </footer>

    </section>
  )
}

export default HeroSection
