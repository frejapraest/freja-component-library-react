import "./testimonialWithoutImage.css"
import {Children} from "react"




//pass in image as a prop: image="SRC LINK HERE"
//pass 4 children: first one <h3> the brand name, second <h2> introduction, third & fourth <p> information.
// pass one svg logo as prop, named: logo

export default function TestimonialWithoutImage({children, logo}) {
    const childrenArr = Children.toArray(children)
    return (
        <div className="testimonial-without-image">
            <div className="header">
                {logo}
                {childrenArr[0]}
            </div>
                <div className="text-container">
                        {childrenArr[1]}
                        <div className="bottom-text-container">
                            {childrenArr[2]}
                            <p className="bottom-text-divider">/</p>
                            {childrenArr[3]}
                        </div>
                
                </div>
        </div>
    )
}