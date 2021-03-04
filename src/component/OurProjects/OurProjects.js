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
    link: "https://ping-pong-real-time-chat-application.netlify.app",
    name: "Ping Pong",
    image: "/projects/Ping-Pong.png",
  },
  {
    link: "https://a2-store.netlify.app",
    name: "A2 store",
    image: "/projects/A2 store.png",
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
                <a href={link} target="_blank" rel="noreferrer">
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
