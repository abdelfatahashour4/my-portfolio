import React from "react";
import { FaLink } from "react-icons/fa";
import "../../assets/css/projects.css";
const projects = [
  {
    link: "https://client-boggy.vercel.app",
    name: "BOGGY",
    image: "/projects/BOGGY - official.png",
  },
  {
    link: "https://client-ping-pong.herokuapp.com",
    name: "Ping Pong",
    image: "/projects/Ping-Pong.png",
  },
  {
    link: "https://client-a2-store.herokuapp.com",
    name: "A2 store",
    image: "/projects/BOGGY - official.png",
  },
];
export default function OurProjects() {
  return (
    <div id="our_projects">
      {projects.map(({ link, name, image }, i) => {
        return (
          <React.Fragment key={i}>
            <div className="project">
              <div className="project_image">
                <img src={image} alt="" />
              </div>
              <div className="project_content">
                <h3>{name}</h3>
                <a href={link}>
                  <FaLink /> visit
                </a>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
