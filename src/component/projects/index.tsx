import PTK1 from "../../assets/tk.png";
import PTK2 from "../../assets/tk2.png";
import Purino3 from "../../assets/purino3.png";
import "./index.css";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Projects() {
  const [state, setState] = useState<number>(0);
  const handleNextBtn = () => {
    if (state < data.length - 1) {
      setState(state + 1);
    } else {
      setState(0);
    }
  };
  const handlePrevBtn = () => {
    if (state > 0) {
      setState(state - 1);
    } else {
      setState(data.length - 1);
    }
  };
  const data = [
    {
      photo1: PTK1,
      photo2: PTK2,
      type: "web",
      title: "TK Melati Putih Web",
      content:
        "TK Melati Putih Web is a CMS application to help users manage and record their school data. This apps built with PHP, CodeIgniter, Bootstrap, and MySQL Databases.",
    },
    {
      photo1: Purino3,
      type: "mobile",
      title: "Purino Covid Tracker",
      content:
        "Purino Covid Tracker is a application to see the spread of COVID-19. This apps built with JavaScript and React Native.",
    },
  ];
  return (
    <div className="porto projects" data-section id="projects">
      <div className="projects-content">
        <p className="title text-center">My Projects</p>
        <div className="content group">
          <div className="flex flex-col place-items-center gap-5">
            <p className="title">{data[state].title}</p>
            <div className="text">{data[state].content}</div>
          </div>
          <div
            className={`flex ${
              data[state].type === "web" ? "flex-col" : "flex-row"
            } relative w-3/4 place-self-center justify-center`}
          >
            <img
              src={data[state].photo1}
              className={`w-3/5 h-full relative ${
                data[state].type === "web"
                  ? "top-3"
                  : data[state].photo2
                  ? "w-2/12"
                  : "w-full"
              } rounded-md shadow-xl`}
              alt={`${data[state].title}1`}
            />
            {data[state].photo2 && (
              <img
                src={data[state].photo2}
                className={`w-3/5 h-full relative ${
                  data[state].type === "web" ? "bottom-3" : "w-3/12"
                } self-end rounded-md shadow-xl`}
                alt={`${data[state].title}2`}
              />
            )}
          </div>
          <button
            className="absolute btn-slide block lg:hidden lg:group-hover:block right-8 xl:right-[5%]"
            onClick={handleNextBtn}
          >
            <ChevronRightIcon />
          </button>
          <button
            className="absolute btn-slide block lg:hidden lg:group-hover:block left-8 xl:left-[5%]"
            onClick={handlePrevBtn}
          >
            <ChevronLeftIcon />
          </button>
        </div>
        {/* <Slider params={data} /> */}
      </div>
    </div>
  );
}
