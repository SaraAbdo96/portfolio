import Title from "../layouts/Title";
import Achievements from "./Achievements";
import Education from "./Education";
import Skills from "./Skills";
import { useState } from "react";

const Resume = () => {
  const [activeComponent, setActiveComponent] = useState("Education");

  return (
    <section id="resume" className="w-full py-20 border-b-[px] border-b-black">
      <div className="flex items-center justify-center text-center">
        <Title title="3+ YEARS OF EXPERIENCE" desc="My Resume" />
      </div>
      <div>
        <ul className="grid w-full grid-cols-1 xl:grid-cols-3 md:grid-cols-2">
          <li
            className={`resumeLi ${
              activeComponent === "Education"
                ? "active border-designColor rounded-lg"
                : "border-none"
            }`}
            onClick={() => setActiveComponent("Education")}
          >
            Education & Experience
          </li>
          <li
            className={`resumeLi ${
              activeComponent === "Skills"
                ? "active border-designColor rounded-lg"
                : "border-none"
            }`}
            onClick={() => setActiveComponent("Skills")}
          >
            Professional Skills
          </li>
          {/* <li
            className={`resumeLi ${
              activeComponent === "Experience" ? "active" : ""
            }`}
            onClick={() => setActiveComponent("Experience")}
          >
            Experience
          </li> */}
          <li
            className={`resumeLi ${
              activeComponent === "Achievements"
                ? "active border-designColor rounded-lg"
                : "border-none"
            }`}
            onClick={() => setActiveComponent("Achievements")}
          >
            Achievements
          </li>
        </ul>
      </div>
      {activeComponent === "Education" && <Education />}
      {activeComponent === "Skills" && <Skills />}
      {/* {activeComponent === "Experience" && <div>Experience Component</div>} */}
      {activeComponent === "Achievements" && <Achievements />}
    </section>
  );
};

export default Resume;
