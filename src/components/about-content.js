'use client'

import { useState } from "react";
import 'remixicon/fonts/remixicon.css';
import styles from "../styles/about.module.scss";
import me from "../json/me.json";
import hobby from "../json/hobby.json";
import skills from "../json/skills.json";
import goals from "../json/goals.json";
import Link from "next/link";

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

const renderSkills = () => {
  const dataSkills = skills[1].dataSkills;

  return (
    <>
      <div className={styles.personal_skills}>
        <h2>_personal_skills</h2>
        <ul>
          {skills[0].personal_skills.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
      {Object.entries(dataSkills).map(([category, items]) => (
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
      <>
        <h1>{data.title}</h1>
        <p>{data.content}</p>
      </>
    ))}
  </>
);
const renderHobby = () => (
  <>
    <h1>{hobby.title}</h1>
    <p>{hobby.content}</p>
  </>
);
const renderGoals = () => (
  <>
    <h1>{goals.title}</h1>
    <p>{goals.content}</p>
  </>
);
const Sidebar = ({ setAboutContent }) => {
  function testKey(key) {
    switch (key) {
      case "me":
        setAboutContent(renderMe());
        break;

        case "skills":
          setAboutContent(renderSkills());
          break;

          case "goals":
            setAboutContent(renderGoals());
            break;

            case "hobby":
              setAboutContent(renderHobby());
              break;

              case "10th-grade-school":
                setAboutContent(renderEducation());
                break;

                case "self-learned":
                  setAboutContent(renderLearnPath());
                  break;
    }
  }

  return (
    <div className={styles.sidebar}>
      <Folder title="personal-info" classR="mainFolder">
        <Folder title="bio" classR="secondaryFolder bioFolder">
          <div onClick={() => testKey("me")} className={styles.markdown}><i className="ri-markdown-fill"></i> Me</div>
          <div onClick={() => testKey("skills")} className={styles.markdown}><i className="ri-markdown-fill"></i> Skills</div>
        </Folder>
        <Folder title="interests" classR="secondaryFolder interestsFolder">
          <div onClick={() => testKey("goals")} className={styles.markdown}><i className="ri-markdown-fill"></i> Goals</div>
          <div onClick={() => testKey("hobby")} className={styles.markdown}><i className="ri-markdown-fill"></i> Hobby</div>
        </Folder>
        <Folder title="education" classR="secondaryFolder educationFolder">
          <div onClick={() => testKey("10th-grade-school")} className={styles.markdown}><i className="ri-markdown-fill"></i> 10th-grade-school</div>
          <div onClick={() => testKey("self-learned")} className={styles.markdown}><i className="ri-markdown-fill"></i> Self-learned</div>
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
        <i class="ri-tiktok-fill"></i>
          <p>@beberi-developeri</p>
        </Link>
        <Link href="https://www.instagram.com/giamiminoshvili/" target="_blank" className={styles.contact}>
        <i class="ri-instagram-fill"></i>
          <p>@giamiminoshvili</p>
        </Link>
        <Link href="https://www.youtube.com/@DevByGia" target="_blank" className={styles.contact}>
        <i class="ri-youtube-fill"></i>
          <p>@devbygia</p>
        </Link>
        <Link href="https://www.facebook.com/gia.miminoshvili.92" target="_blank" className={styles.contact}>
        <i class="ri-facebook-box-fill"></i>
          <p>@gia.miminoshvili.92</p>
        </Link>
      </Folder>
    </div>
  );
};



export default function AboutContent() {
  const [aboutContent, setAboutContent] = useState("");

  return (
    <main className={styles.about}>
      <Sidebar setAboutContent={setAboutContent}/>
      <div className={styles.content}>
       {aboutContent}
      </div>
    </main>

  )
};
