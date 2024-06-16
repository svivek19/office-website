import React from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

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
            <div className="text-slate-500">
              {item.overview.length > 20
                ? item.overview.slice(0, 70) + "..."
                : item.overview}
            </div>

            {/* dialog model*/}
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="text-violet-700 underline my-3">
                  Read more
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 z-50" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-h-[80vh] w-full max-w-[450px] rounded-[6px] bg-white p-[25px] shadow-lg focus:outline-none">
                  <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                    {item.title}
                  </Dialog.Title>
                  <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal text-justify">
                    {item.overview}
                  </Dialog.Description>

                  <div className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal text-justify">
                    <ul>
                      <li className="font-semibold">Features</li>
                      {item.features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal text-justify">
                    <h2 className="font-semibold">Benefits</h2>
                    <p>{item.benefits}</p>
                  </div>

                  <Dialog.Close asChild>
                    <button
                      className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                      aria-label="Close"
                    >
                      <Cross2Icon />
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
