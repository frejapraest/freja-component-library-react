import "./tooltip.css";
import classnames from "classnames";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

//pass ref to component that the tooltip need to be pinned to, also add top and left prop as offset values. also add children as description

export default function Tooltip({ children, theme, color, ref, top, left }) {
  const [shownComponent, setIsShownComponent] = useState(true);
  const [style, setStyle] = useState(null);

  useEffect(() => {
    if (ref && ref.current) {
      setStyle({
        position: "fixed",
        top: ref.current.offsetTop + top,
        left: ref.current.offsetLeft + left,
      });
    }
  }, [ref, top, left]);

  const themeClass = `theme-${theme}`;
  const colorClass = `color-${color}`;
  let allClasses = classnames(themeClass, colorClass, "tooltip");

  function handleCloseBtn() {
    setIsShownComponent(false);
  }

  return shownComponent ? (
    <div className={allClasses} style={style}>
      <header>
        <div className="header-start">
          <FontAwesomeIcon icon="fa-solid fa-inbox" size="lg" />
          <p>Archive notes</p>
        </div>
        <button onClick={handleCloseBtn}>
          <FontAwesomeIcon icon="fa-solid fa-x" size="lg" />
        </button>
      </header>
      <p className="description-text">{children}</p>
      <div className="styling-triangle"></div>
    </div>
  ) : null;
}
