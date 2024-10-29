import { Button } from "@/components/ui/button";
import styles from "./header.module.scss";

const CommonHeader = () => {
  return (
    <header className={styles.header}>
      {/*네비게이션 UI*/}
      <div className={styles.header__logo}>
        <img src="src/assets/logo.svg" alt="" />
      </div>
      <div className={styles.header__and}>
        <Button variant={"outline"}>회원가입</Button>
        <Button>로그인</Button>
      </div>
    </header>
  );
};

export default CommonHeader;
