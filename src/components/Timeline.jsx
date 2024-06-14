import React from "react";
import { AiFillAlert } from "react-icons/ai";
import { GiTechnoHeart, GiPeaceDove } from "react-icons/gi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { IoHardwareChipSharp } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = ({ data }) => {
  // Define arrays for icons and background colors
  const icons = [
    AiFillAlert,
    GiTechnoHeart,
    GiPeaceDove,
    CgSmileMouthOpen,
    VscWorkspaceTrusted,
    IoLogoJavascript,
    FaPython,
    IoHardwareChipSharp,
  ];

  return (
    <VerticalTimeline>
      {data.map((item, index) => {
        const Icon = icons[index % icons.length];

        return (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "transparent",
              color: "#555",
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid #555" }}
            iconStyle={{ background: "#555", color: "#fff" }}
            icon={<Icon />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-medium">
              {item.title}
            </h3>
            <p className="text-slate-500">
              {item.overview.length > 20
                ? item.overview.slice(0, 70) + "..."
                : item.overview}
            </p>

            <button className="text-violet-700 underline my-3">
              Read more
            </button>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
