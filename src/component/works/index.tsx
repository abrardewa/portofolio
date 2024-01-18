import itera from "../../assets/Logo_ITERA.png";
import impactByte from "../../assets/impactbyte.jpeg";
import ocbc from "../../assets/Logo-ocbc.png";
import "./index.css";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Works() {
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
      photo1: ocbc,
      title: "OCBC Bank Indonesia (Outsource)",
      postiton: "Software Engineer",
      timeStart: "August 2022",
      timeEnd: "Current",
      content: [
        "Create and improve web app features while following a set of rules (SOP) to make the frontend team work better together. Use technologies like ReactJS, TypeScript, HTML, CSS, and Ant Design.",
        "Applied Agile methodologies, specifically Scrum, to foster collaboration with stakeholders throughout the development process. Leveraged Jira as a supporting tool for effective project management.",
        "Implementing frontend best practices to enhance stability and minimize bugs.",
        "Diligently testing and refining product features to guarantee an exceptional user experience across both customer-facing interfaces and internal dashboard components.",
      ],
    },
    {
      photo1: impactByte,
      title: "PT. IMPACT BYTE TEKNOLOGI EDUKASI (SKILVUL)",
      postiton: "UI/UX Designer",
      timeStart: "August 2021",
      timeEnd: "December 2021",
      content: [
        "Use Agile methodologies (Scrum) to collaborated with stakeholders during development processes and use Jira as a support tools.",
        "Conducted live user testing of components and functionality to evaluate effectiveness of designs and enhancements.",
      ],
    },
    {
      photo1: itera,
      title: "Institut Teknologi Sumatera",
      postiton: "Frontend Mobile Developer",
      timeStart: "May 2021",
      timeEnd: "August 2021",
      content: [
        "Followed SDLC best practices within Agile environment to produce rapid iterations for clients.",
        "Collaborated with stakeholders during development processes to confirm creative proposals and design best practices",
        "Coded using JavaScript and CSS using React Native and Bootstrap to develop features for mobile platforms.",
      ],
    },
  ];
  return (
    <div className="works" data-section id="works">
      <div className="works-content">
        <p className="title text-center">Works Experience</p>
        <div className="content group">
          <div className="company">
            <div
              className={`flex flex-col lg:flex-row relative w-3/6 md:w-1/6 justify-end`}
            >
              <img
                src={data[state].photo1}
                className={` h-full lg:h-24 rounded-md object-contain`}
                alt={`${data[state].title}1`}
              />
            </div>
            <div className="flex flex-col place-items-start">
              <p className="title">
                {data[state].postiton + " at " + data[state].title}
              </p>
              <p className="time">
                {data[state].timeStart + " - " + data[state].timeEnd}
              </p>
            </div>
          </div>
          <ol type="1" className="list">
            {data[state].content.map((item) => (
              <li>{item}</li>
            ))}
          </ol>
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
