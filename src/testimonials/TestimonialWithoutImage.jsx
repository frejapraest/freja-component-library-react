import "./testimonialWithoutImage.css";
import { Children } from "react";

/**
 * @typedef {Object} TestimonialWithoutImageProps
 * @property {[React.ReactElement, React.ReactElement, React.ReactElement, React.ReactElement]} children - Pass 4 elements as children: 1st <h2> brand name, 2nd <h2> quote, 3rd & 4th <p> person information.
 * @property {React.ReactElement} [logo] - Pass logo svg as a prop.
 */

/**
 * Testimonial with no image, including logo, brand name, quote, name and title.
 *
 * @param {TestimonialWithoutImageProps} props
 * @example
 * <TestimonialWithoutImage logo={<FontAwesomeIcon icon="fa-solid fa-star" />}>
 *   <h2>Workcation</h2>
 *   <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </h2>
 *   <p>May Andersons</p>
 *   <p>Workcation, CTO</p>
 * </TestimonialWithoutImage>
 */
export default function TestimonialWithoutImage({ children, logo }) {
  const childrenArr = Children.toArray(children);
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
  );
}
