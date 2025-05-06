import Header from "@/components/Header";
import Footer from "@/components/footer";
import styles from "./page.module.scss";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.error}>
        <Image src="./svg/404.svg" width={312} height={180} alt="404" />
        <div>
          <ol>
            <li><span>const</span> page = <span>findPage</span>(<span>'you-were-looking-for'</span>)</li>
            <li><br /></li>
            <li><span>if</span> <span>(!page) &#123;</span></li>
            <li><span>console</span>.<span>log</span>(<span>"Oops! Looks like you took a wrong turn in the codebase."</span>);</li>
            <li><span>console</span>.<span>log</span>(<span>"But hey, since you're here…"</span>);</li>
            <li><span>console</span>.<span>log</span>(<span>"🔍 Go back to the homepage and explore more cool stuff!"</span>);</li>
            <li><span>throw new</span> <span>Error</span>(<span>"404: PageNotFoundError 😢"</span>);</li>
            <li>&#125;</li>
            <li><br /></li>
            <li>/* Suggestions:</li>
            <li>&nbsp;* – Check the URL for typos</li>
            <li>&nbsp;* – Use the site navigation</li>
            <li>&nbsp;* – Or hit CMD+Z in real life 😅</li>
            <li>*/</li>
            <li><br /></li>
            <li><span>redirect</span>(<span>'home'</span>);</li>
          </ol>
        </div>

      </main>
      <Footer />
    </div>
  );
}
