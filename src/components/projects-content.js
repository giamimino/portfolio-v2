'use client'

import styles from '../styles/projects.module.scss'
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import Project from './project';
import projects from './projects.json';
import { useEffect } from 'react';


const Folder = ({ title, children, classR }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={
          classR
            .split(" ")
            .map(cls => styles[cls])
            .concat(open ? styles.open : "")
            .join(" ")
        }
        onClick={() => setOpen(!open)}
      >
        <i className={open ? "ri-arrow-drop-down-line" : "ri-arrow-drop-right-line"} />
        {title}
      </div>
      {open && <div>{children}</div>}
    </div>
  );
};

const techs = [
  { key: "react", icon: "ri-reactjs-line", label: "React" },
  { key: "html", icon: "ri-html5-fill", label: "HTML" },
  { key: "css", icon: "ri-css3-fill", label: "CSS" },
  { key: "php", icon: "ri-php-line", label: "PHP" },
  { key: "js", icon: "ri-javascript-fill", label: "JS" },
];

const ProjectContent = () => {
  const [filter, setFilter] = useState([]);
  const [classed, setClassed] = useState([]);

  function handleFilterChange(event) {
    const { value, checked } = event.target;
    setFilter(prev =>
      checked ? [...prev, value] : prev.filter(item => item !== value)
    );
  }

  const filteredProjects =
    filter.length === 0
      ? projects
      : projects.filter(project =>
          filter.some(f => project[f]),
        );
  
  useEffect(() => {
    const indices = filteredProjects.map((_, index) => index)
    setClassed(indices);

    const durationPerItem = 100;
    const animationDuration = 500;

    const totalDuration = (filteredProjects.length - 1) * durationPerItem + animationDuration;

    const timer = setTimeout(() => {
      setClassed([]);
    }, totalDuration)

    return () => clearTimeout(timer);
  }, [filteredProjects]);

  return (
    <main className={styles.main}>
      <div className={styles.sideBar}>
        <Folder title="projects" classR="mainFolder">
          {techs.map(tech => (
            <div className={styles.filesLang} key={tech.key}>
              <input
                type="checkbox"
                value={tech.key}
                onChange={handleFilterChange}
                checked={filter.includes(tech.key)}
              />
              <p>
                <i className={tech.icon}></i>
                {tech.label}
              </p>
            </div>
          ))}
        </Folder>
      </div>
      <aside>
        <div className={styles.projects}>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={
                classed.includes(index) ? styles.autoBlur : ""
              }
              style={{animationDelay: `${index * 100}ms`}}
              >
              <Project
                key={index}
                index={index}
                title={project.title}
                image={project.image}
                description={project.des}
                project={project.url}
              />
            </div>
          ))}
        </div>
      </aside>
    </main>
  );
};

export default ProjectContent;