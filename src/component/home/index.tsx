import "./index.css";
import Photo from "../../assets/fotoNew.png";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import { ReactComponent as Download } from "../../assets/download.svg";
import { ReactComponent as Check } from "../../assets/check.svg";
import { ReactComponent as Antd } from "../../assets/antd.svg";
import { ReactComponent as Flutter } from "../../assets/flutter.svg";
import { ReactComponent as Css } from "../../assets/css.svg";
import { ReactComponent as CI } from "../../assets/ci.svg";
import { ReactComponent as JS } from "../../assets/js.svg";
import { ReactComponent as Less } from "../../assets/less.svg";
import { ReactComponent as Git } from "../../assets/mdi_git.svg";
import { ReactComponent as Tailwind } from "../../assets/tailwind.svg";
import { ReactComponent as Ts } from "../../assets/ts.svg";
import { ReactComponent as Php } from "../../assets/php.svg";
import { ReactComponent as Reac } from "../../assets/react.svg";
import { useState } from "react";
import moment from "moment";
import CountUp from "react-countup";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [isYear, setIsYear] = useState<boolean>(false);
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
    let longExpMonth = today.diff(startExp, "month");
    let longExpYear = today.diff(startExp, "year");
    longExpYear > 0 && setIsYear(true);
    return longExpYear > 0 ? longExpYear : longExpMonth;
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
          <p className="long-exp-text">
            {isYear ? "Year Experience" : "Month Experience"}
          </p>
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
