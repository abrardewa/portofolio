import Photo from "../../assets/Logo_ITERA.png";
import Photo2 from "../../assets/wisuda.png";
import "./index.css";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
export default function Education() {
  return (
    <div className="porto education snap-center" id="education" data-section>
      <div className="edu-main">
        <div className="content">
          <div className="left">
            <p className="title">My Education</p>
            <div className="profile">
              <img className="edu-pict" src={Photo} width={82} alt="itera" />
              <div className="edu-text">
                <p className="text-lg font-semibold">
                  Sumatera Institute of Technology
                </p>
                <p>(August 2018 - Juni 2022)</p>
                <p className="pt-2 pb-4">GPA 3.30</p>
                <a href="https://www.itera.ac.id/" className="edu-button">
                  <RocketLaunchIcon className="text-soft-dark dark:text-soft-white w-5" />
                  <p className="text-sm lg:text-base">Visit Website</p>
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <img className="picture" src={Photo2} alt="foto" />
          </div>
        </div>
      </div>
    </div>
  );
}
