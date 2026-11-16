import "./badges.css";
import classnames from "classnames";

/**
 * @typedef {Object} BadgeProps
 * @property {React.ReactElement | [React.ReactElement]} children - Pass  1 word as children.
 * @property {'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' } [color='blue'] - Visual color style of the badge.
 * @property {'square' | 'pill'} [variant='pill'] - Visual variant shape of the badge.
 */

/**
 * Badge displaying one word text with different colors styles and variant shape.
 *
 * @param {BadgeProps} props
 * @example
 * <Badge color="red" variant="square">
 *   Badge
 * </Badge>
 */
export default function Badgde({ children, variant, color }) {
  let variantClass = variant && `badge-${variant}`;
  let colorClass = color && `badge-${color}`;
  const allClasses = classnames(colorClass, variantClass, "badge");

  return <div className={allClasses}>{children}</div>;
}
