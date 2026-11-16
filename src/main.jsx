import "./index.css";
import Tooltip from "./tooltips/Tooltip.jsx";

import { useRef } from "react";

export default function Main() {
  const ref = useRef(null);

  return (
    <main>
      <div className="div-element" ref={ref}></div>
      <Tooltip color="pink" theme="dark" ref={ref} left={50} top={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
      </Tooltip>
      <Tooltip color="black" theme="dark" ref={ref} left={20 * 7} top={20 * 10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
      </Tooltip>
      <Tooltip color="blue" theme="dark" ref={ref} left={30 * 7} top={30 * 10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
      </Tooltip>
      <Tooltip color="green" theme="dark" ref={ref} left={40 * 7} top={40 * 10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
      </Tooltip>
      <Tooltip color="pink" theme="light" ref={ref} left={50 * 7} top={50 * 10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
      </Tooltip>
      <Tooltip color="black" theme="light" ref={ref} left={60 * 7} top={60 * 10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
      </Tooltip>
      <Tooltip color="blue" theme="light" ref={ref} left={70 * 7} top={70 * 10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
      </Tooltip>
      <Tooltip color="green" theme="light" ref={ref} left={80 * 7} top={80 * 10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
      </Tooltip>
    </main>
  );
}
