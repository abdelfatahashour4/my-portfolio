import React from "react";
import { FaStoreAlt, FaBlog } from "react-icons/fa";
import { BiChat } from "react-icons/bi";
import { AiFillApi } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import "../../assets/css/services.css";
export default function Services() {
  return (
    <div id="services">
      <div className="service">
        <div className="Icon_Service">
          <span>
            <FaStoreAlt />
          </span>
        </div>
        <div className="content_service">
          <h3>E-Commerce online store</h3>
          <p>
            build E-commerce applications, is the buying and selling of goods
            and services, or the transmitting of funds or data, over an
            electronic network, primarily the internet.
          </p>
        </div>
      </div>

      <div className="service">
        <div className="Icon_Service">
          <span>
            <BiChat />
          </span>
        </div>
        <div className="content_service">
          <h3>Real-Time applications</h3>
          <p>
            real-time, bidirectional and event-based communication It works on
            every platform, browser or device, focusing equally on reliability
            and speed.
          </p>
        </div>
      </div>

      <div className="service">
        <div className="Icon_Service">
          <span>
            <AiFillApi />
          </span>
        </div>
        <div className="content_service">
          <h3>Rest API</h3>
          <p>
            Technical specification describing the data exchange options between
            solutions with the specification done in the form of a request for
            processing and data delivery protocols.
          </p>
        </div>
      </div>

      <div className="service">
        <div className="Icon_Service">
          <span>
            <MdDashboard />
          </span>
        </div>
        <div className="content_service">
          <h3>build Dashboard</h3>
          <p>
            A data dashboard is an information management tool that visually
            tracks, analyzes and displays key performance indicators (KPI),
            metrics and key data points to monitor the health of a business,
            department or specific process.
          </p>
        </div>
      </div>

      <div className="service">
        <div className="Icon_Service">
          <span>
            <FaBlog />
          </span>
        </div>
        <div className="content_service">
          <h3>build BLOGS Application</h3>
          <p>
            informational website displaying information in reverse
            chronological order, with the latest posts appearing first, at the
            top.
          </p>
        </div>
      </div>
    </div>
  );
}
