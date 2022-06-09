import style from "./style.module.css";
import Button from "../Button";
import { useState } from "react";

export default function Projects() {
  const [appState, setAppState] = useState({
    activeObject: null,
    objects: [
      {
        id: 1,
        image: "project-1.jpg",
        text: "Project 1",
      },
      {
        id: 2,
        image: "project-2.jpg",
        text: "Project 2",
      },
      {
        id: 3,
        image: "project-3.jpg",
        text: "Project 3",
      },
      {
        id: 4,
        image: "project-4.jpg",
        text: "Project 4",
      },
    ],
  });

  function toggleActive(key) {
    setAppState({ ...appState, activeObject: appState.objects[key] });
  }

  const [firstItemActive, setFirstItemActive] = useState(true);

  return (
      <div className={style.section_projects} id="projects">
        <h1>
          <u>Projects</u>
        </h1>
        <div className={style.projects}>
          {appState.objects.map((item, key) => (
            <div
              className={`${style.project} ${
                appState.objects[key] == appState.activeObject
                  ? style.active
                  : ""
              } ${key == 0 ? `${firstItemActive ? style.active : ""}` : ""}`}
              style={{ backgroundImage: `url(/images/${item.image})` }}
              key={key}
              onClick={() => {
                toggleActive(key);
                setFirstItemActive(false);
              }}
            >
              <h2>{item.text}</h2>
              <Button icon="Send" />
            </div>
          ))}
        </div>
      </div>
  );
}
