import React, { useRef } from "react";
import Styles from "./Projects.module.css";
import Info from "../../DynamicData/Content";
import { Divider } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import CustomCard from "../../common/CustomCard";

export default function Projects() {
  const { data } = useSelector((state) => state).todo;
  const targetElement1 = useRef(null);
  const targetElement2 = useRef(null);
  const onScroll1 = (pos) => {
    targetElement1.current.scrollBy({
      ...pos, // Adjust the value as needed
      behavior: "smooth",
    });
  };

  const onScroll2 = (pos) => {
    targetElement2.current.scrollBy({
      ...pos, // Adjust the value as needed
      behavior: "smooth",
    });
  };

  const Cards = ({ title, content, index, link, icon }) => {
    return (
      <>
        {" "}
        <img src={icon} className={Styles["avatar"]} alt="Logo" />
        <h4 className="mt-2">{title}</h4>
        <br></br>
        <p>{content}</p>
        <div className={Styles["export"]}>
          <a href={link}>View more</a>
        </div>
      </>
    );
  };

  return (
    <section id="Projects" className={Styles["projects-section"]}>
      <h1 className="text-xl font-semibold">Projects</h1>
      <Divider className="my-4" />
      <span>Android Apps</span>

      <div style={{ position: "relative" }}>
        <div ref={targetElement1} className={Styles["scrollCards"]}>
          {(data?.projects_apps || Info.projects_apps).map((item, index) => (
            <div key={index} className={Styles["cards"]}>
              <CustomCard
                link={item.link}
                index={index}
                icon={item.icon}
                title={item.title}
                content={item.description}
              />
            </div>
          ))}
        </div>
        <div className="firstScrollBar">
          <button
            className={Styles["M-F-button"]}
            onClick={() => {
              onScroll1({ left: 400 });
            }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: `<lord-icon
      src="https://cdn.lordicon.com/zmkotitn.json"
      trigger="hover"
      colors="primary:#121331"
      style="width:30px;height:20px;">
  </lord-icon>`,
              }}
            ></span>
          </button>
          <button
            style={{ right: 60 }}
            className={Styles["M-B-button"]}
            onClick={() => {
              onScroll1({ left: -400 });
            }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: `<lord-icon
      src="https://cdn.lordicon.com/zmkotitn.json"
      trigger="hover"
      colors="primary:#121331"
      style="width:30px;height:20px;transform: rotate(180deg)">
  </lord-icon>`,
              }}
            ></span>
          </button>
        </div>
      </div>
      <br></br>
      <span>Websites</span>

      <div style={{ position: "relative" }}>
        <div ref={targetElement2} className={Styles["scrollCards"]}>
          {(data?.projects_website || Info.projects_website).map(
            (item, index) => (
              <div key={index} className={Styles["cards"]}>
                <CustomCard
                  link={item.link}
                  index={index}
                  icon={item.icon}
                  title={item.title}
                  content={item.description}
                />
              </div>
            )
          )}
        </div>

        <button
          className={Styles["M-F-button"]}
          onClick={() => {
            onScroll2({ left: 400 });
          }}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: `<lord-icon
      src="https://cdn.lordicon.com/zmkotitn.json"
      trigger="hover"
      colors="primary:#121331"
      style="width:30px;height:20px">
  </lord-icon>`,
            }}
          ></span>
        </button>
        <button
          style={{ right: 60 }}
          className={Styles["M-B-button"]}
          onClick={() => {
            onScroll2({ left: -400 });
          }}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: `<lord-icon
      src="https://cdn.lordicon.com/zmkotitn.json"
      trigger="hover"
      colors="primary:#121331"
      style="width:30px;height:20px;transform: rotate(180deg)">
  </lord-icon>`,
            }}
          ></span>
        </button>
      </div>
    </section>
  );
}
