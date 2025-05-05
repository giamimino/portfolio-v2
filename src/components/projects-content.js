'use client'

import styles from '../styles/projects.module.scss'
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import Project from './project';
import Image from 'next/image';

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

const ProjectContent = () => {
  return (
    <main className={styles.main}>
      <div className={styles.sideBar}>
        <Folder title="projects" classR="mainFolder">
          <div className={styles.filesLang}><input type="checkbox" /><p><i className="ri-reactjs-line"></i>React</p></div>
          <div className={styles.filesLang}><input type="checkbox" /><p><i className="ri-html5-fill"></i>HTML</p></div>
          <div className={styles.filesLang}><input type="checkbox" /><p><i className="ri-css3-fill"></i>CSS</p></div>
          <div className={styles.filesLang}><input type="checkbox" /><p><i className="ri-php-line"></i>PHP</p></div>
        </Folder>
      </div>
      <aside>
        <div className={styles.projects}>
        
            <Project 
            title="test" 
            image="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" 
            description="Duis aute irure dolor in velit esse cillum dolore."
            project="https://www.youtube.com"
            />
            <Project 
            title="test" 
            image="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" 
            description="Duis aute irure dolor in velit esse cillum dolore."
            project="https://www.youtube.com"
            />
            <Project 
            title="test" 
            image="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" 
            description="Duis aute irure dolor in velit esse cillum dolore."
            project="https://www.youtube.com"
            />
            <Project 
            title="test" 
            image="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" 
            description="Duis aute irure dolor in velit esse cillum dolore."
            project="https://www.youtube.com"
            />
            <Project 
            title="test" 
            image="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" 
            description="Duis aute irure dolor in velit esse cillum dolore."
            project="https://www.youtube.com"
            />
            <Project 
            title="test" 
            image="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" 
            description="Duis aute irure dolor in velit esse cillum dolore."
            project="https://www.youtube.com"
            />
            <Project 
            title="test" 
            image="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" 
            description="Duis aute irure dolor in velit esse cillum dolore."
            project="https://www.youtube.com"
            />
        </div>
      </aside>
    </main>
  )
}

export default ProjectContent;