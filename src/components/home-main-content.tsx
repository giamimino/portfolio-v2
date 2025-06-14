'use client'

import Image from "next/image";
import styles from "../styles/home.module.scss";
import { motion } from "framer-motion";

const HomeMainContent = () => {
  return (
    <div className={styles.homeMain}>
      <main>
      <aside>
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)", transform: "scale(1.2) translateX(-100px)" }}
            animate={{ opacity: 1, filter: "blur(0)", transform: "scale(1) translateX(0)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0 }}
          >
            Hi all. I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)", transform: "scale(1.2) translateX(-100px)"  }}
            animate={{ opacity: 1, filter: "blur(0)", transform: "scale(1) translateX(0)"  }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            Gia Miminoshvili
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)", transform: "scale(1.2) translateX(-100px)"  }}
            animate={{ opacity: 1, filter: "blur(0)", transform: "scale(1) translateX(0)"  }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            &gt; Front-end Developer
          </motion.p>
        </aside>
        <aside>
        <motion.p
            initial={{ opacity: 0, filter: "blur(20px)", transform: "scale(1.2) translateX(-150px)" }}
            animate={{ opacity: 1, filter: "blur(0)", transform: "scale(1) translateX(0)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          >
          {"//"} complete the game to continue
          </motion.p>
          <motion.p
            initial={{ opacity: 0, filter: "blur(20px)", transform: "scale(1.2) translateX(-150px)" }}
            animate={{ opacity: 1, filter: "blur(0)", transform: "scale(1) translateX(0)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.60 }}
          >
          {"//"} find my profile on Github:
          </motion.p>
          <motion.p
            initial={{ opacity: 0, filter: "blur(20px)", transform: "scale(1.2) translateX(-150px)" }}
            animate={{ opacity: 1, filter: "blur(0)", transform: "scale(1) translateX(0)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
          >
          <span>const</span> <span>githubLink</span> = <span><a href="https://github.com/giamimino" target="_blank">“https://github.com/giamimino”</a></span>
          </motion.p>
        </aside>
      </main>
      <section>
      <Image className={styles.pasted} src="/images/PastedImage.png" alt="icon"
        width={779}
        height={742}      
       />
       
      <Image
        src="/images/code-snippet.png"
        alt="Code snippet"
        width={560}
        height={182}
      />
      <Image
        src="/images/code-snippet.png"
        alt="Code snippet"
        width={560}
        height={182}
      />
      <Image
        src="/images/code-snippet.png"
        alt="Code snippet"
        width={560}
        height={182}
      />
      <Image
        src="/images/code-snippet.png"
        alt="Code snippet"
        width={560}
        height={182}
      />
      <Image
        src="/images/code-snippet.png"
        alt="Code snippet"
        width={560}
        height={182}
      />
      </section>
    </div>
  )
}

export default HomeMainContent;