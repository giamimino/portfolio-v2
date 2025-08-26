'use client'

import styles from '../styles/projects.module.scss'
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import Project from './project';
import { useEffect } from 'react';
import { supabase } from '../utils/supabase'
import { Icon } from '@iconify/react';


type FolderProps = {
  title: string;
  children: React.ReactNode;
  classR: string;
};

const Folder = ({ title, children, classR }: FolderProps) => {
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
  { key: "html", icon: "flowbite:html-solid", label: "HTML" },
  { key: "css", icon: "uim:css3", label: "CSS" },
  { key: "php", icon: "ri:php-fill", label: "PHP" },
  { key: "JavaScript", icon: "bi:javascript", label: "JS" },
  { key: "react", icon: "mdi:react", label: "React" },
  { key: "ReactNative", icon: "mdi:react", label: "ReactNative" },
  { key: "typescript", icon: "bi:typescript", label: "TS" },
  { key: "prisma", icon: "file-icons:prisma", label: "Prisma" },
];

export default function ProjectContent() {
  const [filter, setFilter] = useState([]);
  const [classed, setClassed] = useState([]);
  const [projects, setProjects] = useState<any[]>([])

  useEffect(() => {
    const getProjects = async () => {
      const { data: projects } = await supabase.from('projects_crud').select()

      if (projects && projects.length > 1) {
        setProjects(projects.reverse())
      }
    }

    getProjects()
  }, [])

  function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
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
  }, [filter]);

  return (
    <main className={styles.main}>
      <div className={styles.sideBar}>
        <Folder title="projects filter" classR="mainFolder">
          {techs.map(tech => (
            <div className={styles.filesLang} key={tech.key}>
              <input
                type="checkbox"
                value={tech.key}
                onChange={handleFilterChange}
                checked={filter.includes(tech.key)}
              />
              <p>
                <Icon icon={tech.icon} />
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
                title={project.title || "No title available"}
                image={project.image || "https://www.uticomputadores.com/erro-java-assinador-assinadoc-erro-00000f62/"}
                description={project.description || "No description available"}
                project={project.url}
              />
            </div>
          ))}
        </div>
      </aside>
    </main>
  );
};