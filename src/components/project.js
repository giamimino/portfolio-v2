'use client'
import Link from 'next/link';
import styles from '../styles/project.module.scss'

const Project = (props) => {
  return (
    <div className={styles.project}>
      <header>
        <p>Project {props.index + 1}</p><p>// _{props.title}</p>
      </header>
      <footer>
        <img 
          src={props.image} 
          alt="project" 
        />
        <div>
          <p>{props.description}</p>
          <Link href={props.project} target="_blank">view-project</Link>
        </div>
      </footer>
    </div>
  )
}

export default Project;