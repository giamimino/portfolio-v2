'use client'

import { useState } from "react";
import 'remixicon/fonts/remixicon.css';
import styles from "../styles/about.module.scss";


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
        {classR !== "mainFolder" && <i className="ri-folder-3-fill"></i>}
        {title}
      </div>
      {open && <div>{children}</div>}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Folder title="personal-info" classR="mainFolder">
        <Folder title="bio" classR="secondaryFolder bioFolder">
          <div className={styles.markdown}><i className="ri-markdown-fill"></i> Me</div>
          <div className={styles.markdown}><i className="ri-markdown-fill"></i> Skills</div>
        </Folder>
        <Folder title="interests" classR="secondaryFolder interestsFolder">
          <div className={styles.markdown}><i className="ri-markdown-fill"></i> Goals</div>
          <div className={styles.markdown}><i className="ri-markdown-fill"></i> Hobby</div>
        </Folder>
        <Folder title="education" classR="secondaryFolder educationFolder">
          <div className={styles.markdown}><i className="ri-markdown-fill"></i> 10th-grade-school</div>
          <div className={styles.markdown}><i className="ri-markdown-fill"></i> Self-learned</div>
        </Folder>
      </Folder>
      <Folder title="contacts" classR="mainFolder">
        <div className={styles.contact}>
        <i className="ri-mail-fill"></i>
          miminoshvili2102@gmail.com
        </div>
        <div className={styles.contact}>
        <i className="ri-phone-fill"></i>
          +995511212091
        </div>
      </Folder>
    </div>
  );
};

export default Sidebar;
