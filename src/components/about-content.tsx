'use client'

import { useState } from "react";
import 'remixicon/fonts/remixicon.css';
import styles from "../styles/about.module.scss";
import me from "../json/me.json";
import hobby from "../json/hobby.json";
import skills from "../json/skills.json";
import goals from "../json/goals.json";
import Link from "next/link";

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
        style={{
          cursor: "pointer"
        }}
      >
        <i className={open ? "ri-arrow-drop-down-line" : "ri-arrow-drop-right-line"} />
        {title}
      </div>
      {open && <div>{children}</div>}
    </div>
  );
};

const renderSkills = () => {
  const dataSkills = skills[1]?.dataSkills;

  return (
    <>
      <div className={styles.personal_skills}>
        <h2>_personal_skills</h2>
        <ul>
          {skills[0]?.personal_skills?.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
      {Object.entries(dataSkills ?? []).map(([category, items]) => (
        <div key={category} className={styles[category]}>
          <h2>_{category}</h2>
          <div>
            {Object.entries(items).map(([cat, its]) => (
                <ul key={cat}>
                  <h3>{cat}</h3>
                  {its.map((it, index) => (
                    <li key={index}>{it}</li>
                  ))}
                </ul>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
const renderMe = () => (
  <>
    {me.map((data, index) => (
      <div key={index}>
        <h1>{data.title}</h1>
        <p>{data.content}</p>
      </div>
    ))}
  </>
);
const renderHobby = () => (
  <div key={hobby.title}>
    <h1>{hobby.title}</h1>
    <p>{hobby.content}</p>
  </div>
);
const renderGoals = () => (
  <>
    <h1>{goals.title}</h1>
    <p>{goals.content}</p>
  </>
);

export default function AboutContent() {
  const [content, setContent] = useState<React.ReactNode>(null);

  function handleCntent(key: string) {
    switch (key) {
      case "me":
        setContent(renderMe());
        break;
      case "skills":
        setContent(renderSkills());
        break;
      case "hobby":
        setContent(renderHobby());
        break;
      case "goals":
        setContent(renderGoals());
        break;
      default:
        setContent(null);
    }
  }


  return (
    <main className={styles.about}>
      <div className={styles.sidebar}>
        <Folder title="personal-info" classR="mainFolder">
          <Folder title="bio" classR="secondaryFolder bioFolder">
            <div onClick={() => handleCntent("me")} className={styles.markdown}><i className="ri-markdown-fill"></i> Me</div>
            <div onClick={() => handleCntent("skills")} className={styles.markdown}><i className="ri-markdown-fill"></i> Skills</div>
          </Folder>
          <Folder title="interests" classR="secondaryFolder interestsFolder">
            <div onClick={() => handleCntent("goals")} className={styles.markdown}><i className="ri-markdown-fill"></i> Goals</div>
            <div onClick={() => handleCntent("hobby")} className={styles.markdown}><i className="ri-markdown-fill"></i> Hobby</div>
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
          <Link href="https://www.tiktok.com/@beberi_developeri" target="_blank" className={styles.contact}>
          <i className="ri-tiktok-fill"></i>
            <p>@beberi-developeri</p>
          </Link>
          <Link href="https://www.instagram.com/giamiminoshvili/" target="_blank" className={styles.contact}>
          <i className="ri-instagram-fill"></i>
            <p>@giamiminoshvili</p>
          </Link>
          <Link href="https://www.youtube.com/@DevByGia" target="_blank" className={styles.contact}>
          <i className="ri-youtube-fill"></i>
            <p>@devbygia</p>
          </Link>
          <Link href="https://www.facebook.com/gia.miminoshvili.92" target="_blank" className={styles.contact}>
          <i className="ri-facebook-box-fill"></i>
            <p>@gia.miminoshvili.92</p>
          </Link>
        </Folder>
      </div>
      <div className={styles.content}>
        { content }
      </div>
    </main>
  );
};