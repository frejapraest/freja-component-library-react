import "./banner.css";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

/**
 * @typedef {Object} BannerProps
 * @property {React.ReactElement | [React.ReactElement, React.ReactElement]} children - Pass either 1 or 2 `<p>` elements as children.
 * @property {'success' | 'warning' | 'error' | 'neutral'} [status='neutral'] - Visual status style and icon of the banner.
 */

/**
 * Notification banner displaying a status icon and one or two lines of text.
 *
 * @param {BannerProps} props
 * @example
 * // Single-line banner
 * <Banner status="success">
 *   <p>Your changes have been saved.</p>
 * </Banner>
 *
 * @example
 * // Multi-line banner
 * <Banner status="warning">
 *   <p>Attention needed</p>
 *   <p>Please review your billing details before continuing.</p>
 * </Banner>
 */
export default function Banner({ children, status }) {
  let sizeClass = Array.isArray(children) ? "banner-" : "banner-single-line";
  let statusClass = `banner-${status}`;
  const allClasses = classnames(sizeClass, statusClass, "banner");

  let icon;

  switch (status) {
    case "success":
      icon = <FontAwesomeIcon icon="fa-solid fa-circle-check" />;
      break;
    case "warning":
      icon = <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" />;
      break;
    case "error":
      icon = <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />;
      break;
    case "neutral":
      icon = <FontAwesomeIcon icon="fa-solid fa-circle-info" />;
      break;
    default:
      icon = <FontAwesomeIcon icon="fa-solid fa-circle-info" />;
  }

  return (
    <div className={allClasses}>
      <div className="icon-container">{icon}</div>
      <div className="banner-text-container">{children}</div>
    </div>
  );
}
