import"./testimonialWithImage.css"
import {Children} from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

//pass in image as a prop: image="SRC LINK HERE"
//pass 3 children: first one <h2> description, second & third <p> information.

export default function TestimonialWithImage({image, children}) {
    const childrenArr = Children.toArray(children)
    return (
        <div className="testimonial-with-image">
            <div className="container">
                <div className="image-container">
                <img src={image}/>
                </div>
                <div className="text-container">
                    {<FontAwesomeIcon icon="fa-solid fa-quote-left" />}
                        {childrenArr[0]}
                        <div className="text-bottom-information-container">
                            {childrenArr[1]}
                            {childrenArr[2]}
                        </div>
                
                </div>

            </div>


        </div>

    )
}