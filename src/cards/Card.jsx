import "./cards.css";

/**
 * @typedef {Object} CardProps
 * @property {[React.ReactElement, React.ReactElement]} children - Pass 2 elements as children: 1st <h1> as title, 2nd <p> as text.
 * @property {React.ReactElement} [icon] - Icon element rendered in the card's icon container (e.g. `<IconHere />`).
 */

/**
 * Content card displaying an icon alongside a title and body text.
 *
 * @param {CardProps} props
 * @example
 * <Card icon={<FontAwesomeIcon icon="fa-solid fa-star" />}>
 *   <h>Card Title</h1>
 *   <p>Description text.</p>
 * </Card>
 */
export default function Card({ children, icon }) {
  return (
    <div className="card">
      <div className="icon-container">{icon}</div>
      <div className="text-container">{children}</div>
    </div>
  );
}
