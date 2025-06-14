'use client'

import Header from "../components/Header";
import Footer from "../components/footer";
import styles from "./page.module.scss";
import Image from "next/image";
import 'remixicon/fonts/remixicon.css';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.error}>
        <Image src="./svg/404.svg" width={312} height={180} alt="404" />
        <div>
          <ol>
            <li><span>const</span> page = <span>findPage</span>{"("}<span>&apos;you-were-looking-for&apos;</span>{")"}</li>
            <li><br /></li>
            <li><span>if</span> <span>{"("}!page{")"} {"{"}</span></li>
            <li><span>console</span>.<span>log</span>{"("}<span>&quot;Oops! Looks like you took a wrong turn in the codebase.&quot;</span>{");"}</li>
            <li><span>console</span>.<span>log</span>{"("}<span>&quot;But hey, since you&apos;re here…&quot;</span>{");"}</li>
            <li><span>console</span>.<span>log</span>{"("}<span>&quot;🔍 Go back to the homepage and explore more cool stuff!&quot;</span>{");"}</li>
            <li className={styles.mobV}><span>throw new</span> <span>Error</span>{"("}<span>&quot;404: PageNotFoundError 😢&quot;</span>{");"}</li>
            <li>{"}"}</li>
            <li><br /></li>
            <li>&#47;* Suggestions:</li>
            <li> * - Check the URL for typos</li>
            <li> * - Use the site navigation</li>
            <li> * - Or hit CMD+Z in real life 😅</li>
            <li>*&#47;</li>
            <li><br /></li>
            <li><span>redirect</span>{"("}<span>&apos;home&apos;</span>{");"}</li>
          </ol>
        </div>

        <div className={styles.buttons}>
        <button onClick={handleGoBack}><span>GoBack</span>{"()"}</button>
        <Link href="/"><span>GoHome</span>{"()"};</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}