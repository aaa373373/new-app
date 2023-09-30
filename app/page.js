import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>WELCOME TO MY NEW APP</p>
        <div>
          <a
            href="https://www.linkedin.com/in/awura-abena-adjei-a8b4b4190/"
            target="_blank"
            rel="LinkedIn"
          >
            <Image
              src="/linkedin.png"
              alt="linkedin"
              className={styles.vercelLogo}
              width={155}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1>MY WEBSITE</h1>
      </div>

      <div className={styles.grid}>
        <a
          href="https://adjeia29.wixsite.com/awuraabenaadjei"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>PROFILE</h2>
        </a>

        <a
          href="https://adjeia29.wixsite.com/awuraabenaadjei/about"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            GET TO KNOW ME
          </h2>
        </a>

        <a
          href="https://adjeia29.wixsite.com/awuraabenaadjei/education"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            EDUCATION
          </h2>
        </a>

        <a
          href="https://adjeia29.wixsite.com/awuraabenaadjei/contact"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
           CONTACT
          </h2>
        </a>
      </div>
    </main>
  );
}
