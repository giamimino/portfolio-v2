'use client'
import Link from 'next/link';
import styles from '../styles/project.module.scss';
import Image from 'next/image';


const Project = (props) => {
  return (
    <div

     className={styles.project}>
      <header>
        <p>Project {props.index + 1}</p><p>&#47;&#47; _{props.title}</p>
      </header>
      <footer>
        <Image 
          src={props.image} 
          alt="project" 
          width={500}
          height={300}
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