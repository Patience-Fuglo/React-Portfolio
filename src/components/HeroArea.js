import styles from "./HeroArea.module.css";

export const HeroArea = () => {
  return (
    <section className={styles.wrapper}>
      <img
        className={styles.profile}
        src="/assets/Profile1.jpg"
        alt="profile"
      />
      <h1 className="title">Hi, I'm Patience!</h1>
      <p className="description">
        An aspiring software engineer and actively seeking software developer
        roles where i can grow professionally.
      </p>
      <div className={styles.buttonBox}>
        <button
          className={`${styles.button} ${styles.project}`}
          onClick={() => {
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          My projects
        </button>
        <button
          className={`${styles.button} ${styles.hire}`}
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Resume
        </button>
      </div>
    </section>
  );
};
