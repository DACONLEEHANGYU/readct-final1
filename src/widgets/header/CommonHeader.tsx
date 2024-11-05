// CSS
import styles from "./header.module.scss";
// Components
import { CommonNav } from "@/widgets";
import { Button } from "@/shared";

const CommonHeader = () => {
  return (
    <header className={styles.header}>
      {/*네비게이션 UI*/}
      <CommonNav />
      <div className={styles.header__logo}>
        <img src="/logo.svg" alt="" />
      </div>
      <div className={styles.header__end}>
        <Button variant={"outline"}>회원가입</Button>
        <Button>로그인</Button>
      </div>
    </header>
  );
};

export { CommonHeader };
