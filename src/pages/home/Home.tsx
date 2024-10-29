import styles from "./page.module.scss";

import CommonHeader from "@/components/organisms/header/CommonHeader";

function Home() {
  return (
    <>
      <CommonHeader />
      <div className={styles.page}>
        <div className={styles.page__container}>
          <div className={styles.page__container__intro}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Fly me to the moon
            </h1>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              let me play among the stars
            </h1>
            <p className="flex items-center mt-2">
              <img
                src="src/assets/logo.svg"
                alt=""
                className="h-10 mb-3 mr-[1px]"
              />
              <span className="scroll-m-20 text-xl font-medium tracking-tight">
                는 리액트 기초과정 프로젝트
              </span>
            </p>
            <img src="src/assets/intro.svg" alt="" className="mt-12" />
          </div>
          <section className={styles.page__container__section}>
            {/* 메뉴 카테고리 카드 컴포넌트 UI 삽입 부분 */}
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
