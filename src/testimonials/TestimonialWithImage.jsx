import "./testimonialWithImage.css";
import { Children } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

/**
 * @typedef {Object} TestimonialWithImageProps
 * @property {[React.ReactElement, React.ReactElement, React.ReactElement]} children - Pass 3 elements as children: 1st <h2> quote, 2nd & 3rd <p> person information.
 * @property {React.ReactElement} [image] - Pass image link as a prop.
 */

/**
 * Testimonial with image, including quote, name and title.
 *
 * @param {TestimonialWithImageProps} props
 * @example
 * <TestimonialWithImage image="SRC LINK HERE">
 *   <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </h2>
 *   <p>May Andersons</p>
 *   <p>Workcation, CTO</p>
 * </TestimonialWithImage>
 */
export default function TestimonialWithImage({ image, children }) {
  const childrenArr = Children.toArray(children);
  return (
    <div ref={ref} className="testimonial-with-image">
      <div className="container">
        <div className="image-frame">
          <div className="image-container">
            <img src={image} />
          </div>
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
  );
}
