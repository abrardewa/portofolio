import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";
import { ReactComponent as Logo } from "../../assets/LogoNew.svg";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const initialCode = localStorage.getItem("code");
  const [current, setCurrent] = useState<string>(
    initialCode ? initialCode : "1"
  );
  const navigation = [
    { name: "Home", href: "home", code: "1" },
    { name: "Education", href: "education", code: "2" },
    { name: "Projects", href: "projects", code: "3" },
    { name: "Works", href: "works", code: "4" },
  ];
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const changeMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsDarkMode(true);
  };
  const contact = () => {
    return (
      <div className="flex flex-row divide-x gap-3">
        <button
          onClick={() => {
            changeMode();
          }}
        >
          {isDarkMode ? (
            <MoonIcon className="text-black dark:text-slate-50 dark:hover:fill-slate-100 w-6" />
          ) : (
            <SunIcon className="text-black dark:text-slate-50 w-6" />
          )}
        </button>
        <div className="child-sosmed">
          <NavLink to="https://github.com/abrardewa" target="_blank">
            <Github className="icon fill-soft-dark dark:fill-slate-400 dark:hover:fill-slate-100" />
          </NavLink>
          <NavLink
            to="https://mail.google.com/mail/u/0/?fs=1&to=abrarpratama5228@gmail.com&su=&body=&bcc=&tf=cm"
            target="_blank"
          >
            <Mail className="icon fill-soft-dark dark:fill-slate-400 dark:hover:fill-slate-100" />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/abrar-dewa-pratama-barus-a769061a3/"
            target="_blank"
          >
            <Linkedin className="icon fill-[#0A66C2] dark:fill-slate-400 dark:hover:fill-slate-100" />
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <Disclosure as="nav" className="navbar">
      {({ open }) => (
        <>
          <div className="main-navbar">
            <div className="split">
              <div className="mobile">
                <Disclosure.Button className="disclosure">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 dark:text-slate-100"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 dark:text-slate-100"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="normal">
                <div className="hidden md:block">
                  <Logo className="logo" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 justify-center">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          let element = document.getElementById(item.href);
                          element?.scrollIntoView({ block: "center" });
                          setCurrent(item.code);
                          localStorage.setItem("code", item.code);
                        }}
                        className={
                          "text-navbar rounded-md px-3 py-2 text-sm lg:text-base font-medium"
                        }
                        aria-current={
                          current === item.code ? "page" : undefined
                        }
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {contact()}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  // as="a"
                  // href={`#${item.href}`}
                  onClick={() => {
                    let element = document.getElementById(item.href);
                    element?.scrollIntoView({ block: "center" });
                    setCurrent(item.code);
                    localStorage.setItem("code", item.code);
                  }}
                  className={classNames(
                    current === item.code
                      ? "active-mobile"
                      : "text-soft-dark-disabled dark:text-slate-400 dark:hover:text-slate-100 w-screen",
                    "block rounded-md px-3 py-2 text-sm font-medium"
                  )}
                  aria-current={current === item.code ? "page" : undefined}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
