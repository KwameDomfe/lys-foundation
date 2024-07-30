
import Directions from '../../../images/placeholders/landscape_Images/landscape_01.png'

export default function ContactsAndDirection() {
  return (
    <div className=" mv1-00">
            <header className="tc">
                <h2>
                    Contacts and Directions Header
                </h2>
            </header>
            <div id="ContactsAndDirection"
                className="flex flex-column justify-start"
            >
                <hgroup className="mb2-00">
                    <p className="lh-copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dicta nihil voluptatibus accusantium aspernatur beatae eius nisi fugiat, consequatur quod minus nesciunt laboriosam libero, quibusdam perferendis ut rerum provident et.
                    </p>
                    <p className="lh-copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dicta nihil voluptatibus accusantium aspernatur beatae eius nisi fugiat, consequatur quod minus nesciunt laboriosam libero, quibusdam perferendis ut rerum provident et.
                    </p>
                </hgroup>
                <div className="">
                    <h1 className="f3-00">Contacts</h1>
                    <div className="grid gtc12 ggap2-00 w-100 pr1-00 mb4-00 tc"
                    >
                        <div className="gc1s6 gr1s1
                            flex items-center justify-center 
                            bg-black-20"
                        >
                            <figure>
                                
                                <figcaption className="pa1-00 mt1-00 ">
                                    <h3 className="mv1-00">For Admissions</h3>
                                    <p className="mb2-00">Contact Details</p>
                                
                                </figcaption>
                            </figure>
                        </div>
                        <div className="gc7s6 gr1s1
                            flex items-center justify-center
                            bg-black-20 "
                        >
                        <figure>
                            
                                <figcaption className="pa1-00 mt1-00 ">
                                    <h3 className="mv1-00">For Other Enquiries</h3>
                                    <p className="mb2-00">Contact Details</p>
                                
                                </figcaption>
                            </figure>
                        </div>
                        
                    </div>
                </div>
                <div className="">
                    <h1 className="f3-00">Directions</h1>
                    <div className="grid gtc12 ggap2-00 w-100 tc"
                    >
                        <div className="gc1s12 gr1s1
                            flex items-center justify-center 
                            bg-black-50 "
                        >
                            <figure>
                                <img src={Directions}
                                    alt=""
                                    className="h-100"
                                />
                                <figcaption className="pa1-00 mt1-00 bg-black-50">
                                    <h3 className="mv1-00">Map Showing Directions to School</h3>
                                </figcaption>
                            </figure>
                        </div>
                    
                    
                    
                    </div>
                </div>
            
            </div>
            <footer className="tc">
                <h2>
                    Contacts and Directions Footer
                </h2>
            </footer>

        </div>

  )
}
