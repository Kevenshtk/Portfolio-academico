import useWindowWidth from "../../hooks/useWindowWidth.js";
import { useState, useEffect } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaC,
  FaJava
} from "react-icons/fa6";
import { SiJquery, SiSpring, SiOracle, SiArduino } from "react-icons/si";

import "./styles.sass";

const skillsData = [
  { name: "HTML", level: "Intermediate", icon: <FaHtml5 /> },
  { name: "CSS", level: "Intermediate", icon: <FaCss3Alt /> },
  { name: "Jquery", level: "beginner", icon: <SiJquery /> },
  { name: "Linguagem C", level: "beginner", icon: <FaC /> },
  { name: "Java", level: "beginner", icon: <FaJava /> },
  { name: "Spring", level: "beginner", icon: <SiSpring /> },
  { name: "Oracle", level: "beginner", icon: <SiOracle /> },
  { name: "Arduino", level: "beginner", icon: <SiArduino /> },
];

const Skills = () => {
  const width = useWindowWidth();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(width > 765 && width <= 900 ? 4 : 2);
  const [currentSkills, setCurrentSkills] = useState([]);

  useEffect(() => {
    if (width > 900 && currentSkills.length !== skillsData.length) {
      setCurrentSkills(skillsData);
    }
  }, [width, currentSkills.length]);

  useEffect(() => {
    const getStepSize = () => (width > 765 && width <= 900 ? 4 : 2);

    const pagination = () => {
      const step = getStepSize();

      if (min >= skillsData.length) {
        setMin(0);
        setMax(step);
        return skillsData.slice(0, step);
      }

      const nextMin = min + step;
      const nextMax = max + step;

      setMin(nextMin);
      setMax(nextMax);

      return skillsData.slice(min, max);
    };

    if (width <= 900) {
      const interval = setInterval(() => {
        setCurrentSkills(pagination());
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [min, max, width]);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Kit de ferramentas</h2>
        <p className="section-subtitle">Tecnologias usadas durante o curso</p>

        <div className="skills-notebook">
          <div className="notebook-header"></div>

          <div className="skills-grid">
            {currentSkills?.map((skill) => (
              <div
                key={skill.name}
                className="skill-card"
                role="list"
                aria-label={`${skill.name}, nível ${skill.level}`}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <div className="skill-doodle">
                  <div className="doodle-dots">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="dot"></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
