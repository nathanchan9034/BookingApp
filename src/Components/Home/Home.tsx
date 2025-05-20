import styles from "./Home.module.css";
import HomeTitle from "./HomeTitle";
import HomeHeader from "./HomeHeader";
import HomeDescTop from "./HomeDescTop";
import HomeDescBottom from "./HomeDescBottom";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <main>
        <div className={styles.outerContainer}>
          {/*
            <div className={styles.innerContainerTop}>
              <div className={styles.topTitleDescColoring}>
                <HomeTitle />
                <HomeDescTop />
                <div />
              </div>
            </div>
          */}

          {
            <div className={styles.innerContainerBottom}>
              <div className={styles.bottomTitleDescColoring}>
                <HomeTitle />
                <HomeDescBottom />
              </div>
            </div>
          }
        </div>
      </main>
    </>
  );
};

export default Home;
