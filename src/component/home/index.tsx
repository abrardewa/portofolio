import "./index.css";
import Photo from "../../assets/fotoNew.png";
import Loading from "../../assets/loading.svg?react";
import Download from "../../assets/download.svg?react";
import Check from "../../assets/check.svg?react";
import Antd from "../../assets/antd.svg?react";
import Flutter from "../../assets/flutter.svg?react";
import Css from "../../assets/css.svg?react";
import CI from "../../assets/ci.svg?react";
import JS from "../../assets/js.svg?react";
import Less from "../../assets/less.svg?react";
import Git from "../../assets/mdi_git.svg?react";
import Tailwind from "../../assets/tailwind.svg?react";
import Ts from "../../assets/ts.svg?react";
import Php from "../../assets/php.svg?react";
import Reac from "../../assets/react.svg?react";
import { useState } from "react";
import moment from "moment";
import CountUpImport from "react-countup";

// react-countup ships CommonJS only; Vite returns its module.exports object as the default import
const CountUp =
  (CountUpImport as unknown as { default?: typeof CountUpImport }).default ??
  CountUpImport;

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => {
      fetch("CV_abrardewa.pdf").then((response) => {
        response.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "CV_abrardewa.pdf";
          alink.click();
        });
        if (response.status === 200) {
          setSuccess(true);
        }
      });
      setLoading(false);
    }, 300);
  };

  const getLongExp = () => {
    let today = moment();
    let startExp = moment("29 08 2022", "DD MM YYYY");
    let longExpYear = today.diff(startExp, "year");
    return longExpYear;
  };

  return (
    <div className="main-home" id="home">
      <div className="child-home">
        <div className="content-child">
          <div className="content-about">
            <div className="content-title">
              Hi there! I'm
              <span className="gap-2">
                <br />
                Abrar Dewa Pratama Barus
              </span>
            </div>
            <div className="sub-title">Frontend Engineer Enthusiast</div>
          </div>
          <div className="flex flex-col w-fit text-soft-dark">
            <div className="skills">
              {/* <div className='skills-child'> */}
              <div className="items">
                <JS className="logo" />
                <p>JavaScript</p>
              </div>
              <div className="items">
                <Ts className="logo" />
                <p>TypeScript</p>
              </div>
              <div className="items">
                <Php className="logo" />
                <p>PHP</p>
              </div>
              <div className="items">
                <Reac className="logo" />
                <p>React</p>
              </div>
              <div className="items">
                <CI className="logo" />
                <p>CodeIgniter</p>
              </div>
              <div className="items">
                <Flutter className="logo" />
                <p>Flutter</p>
              </div>
              <div className="items">
                <Css className="logo" />
                <p>Css</p>
              </div>
              <div className="items">
                <Less className="logo" />
                <p>Less</p>
              </div>
              <div className="items">
                <Tailwind className="logo" />
                <p>Tailwind Css</p>
              </div>
              <div className="items">
                <Antd className="logo" />
                <p>Antd</p>
              </div>
              <div className="items">
                <Git className="logo" />
                <p>Git</p>
              </div>
              {/* </div> */}
            </div>
            <button className="button-download" onClick={handleDownload}>
              {loading ? (
                <Loading className="animate-spin fill-soft-white" />
              ) : success ? (
                <Check className="fill-soft-white" />
              ) : (
                <Download className="fill-soft-white" />
              )}
              <div className="text">Download My CV</div>
            </button>
          </div>
        </div>
        <div className="picture">
          <img
            className="picture-content"
            src={Photo}
            width={24}
            height={24}
            alt="foto"
          />
        </div>
      </div>
      <div className="info-exp">
        <div className="item-exp">
          <div className="long-exp-content">
            <CountUp
              start={0}
              end={getLongExp()}
              duration={2.75}
              useEasing={true}
            />
            +
          </div>
          <p className="long-exp-text">Years Experience</p>
        </div>
        <div className="item-exp">
          <div className="long-exp-content">
            <CountUp start={0} end={2} duration={2.75} useEasing={true} />
          </div>
          <p className="long-exp-text">Completed Projects</p>
        </div>
      </div>
    </div>
  );
}
