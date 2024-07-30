import React from 'react'
import Feature from './Feature'
import { features } from '../../../data';


function Features() {
    return (
        <div id="HeroSection__Features"
            className='gc1s12 
                flex justify-center items-center flex-wrap
                container container90 
                pv2-00'
        >
            {features.map(( feature ) => 
                    {
                        const {id, desc,value} = feature;
                        return (
                            
                            <div key={id}
                                className="ma0-50" 
                                title={desc} 
                                // tabIndex="0" 
                                // aria-label={desc}
                            >
                                <Feature 
                                    value={value}
                                    desc={desc}
                                />
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default Features
