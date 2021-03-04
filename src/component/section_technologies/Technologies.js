import React from "react";
import { FaNodeJs, FaReact, FaBootstrap, FaHtml5 } from "react-icons/fa";
import {
  SiMongodb,
  SiNextDotJs,
  SiMaterialUi,
  SiSocketDotIo,
} from "react-icons/si";
import { DiCss3Full, DiSass } from "react-icons/di";
import "../../assets/css/section_technologies.css";
export function Technologies() {
  return (
    <section className="Technologies">
      <ul className="list-technologies">
        <li>
          <FaNodeJs />
        </li>
        <li>
          <SiMongodb />
        </li>
        <li>
          <FaBootstrap />
        </li>
        <li>
          <FaReact />
        </li>
        <li>
          <SiNextDotJs />
        </li>
        <li>
          <SiMaterialUi />
        </li>
        <li>
          <FaHtml5 />
        </li>
        <li>
          <DiCss3Full />
        </li>
        <li>
          <DiSass />
        </li>
        <li>
          <SiSocketDotIo />
        </li>
      </ul>
    </section>
  );
}
