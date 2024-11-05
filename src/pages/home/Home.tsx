import { atom, useAtom } from "jotai";

// Jotai 는 React 상태관리를 위해 만들어진 라이브러리 이다.
// atom : atom 은 상태 단위를 정의하는 함수, 독립적인 상태 조각을 의미한다. atom을 사용하여 state 를 생성하면
// state 는 React 컴포넌트 내에서 공유하고 수정할 수 있다.

// useAtom : atom의 현재 값과 상태를 업데이트할 수 있는 함수 모드를 반환한다. 상태를 읽고 동시에 수정할 때 유용
// useSetAtom : 상태를 업데이트 할 수 있는 함수만을 반환, 상태를 읽지않고, 단순히 수정 시 유용

import styles from "./page.module.scss";

import { CommonHeader, WidgetCategory } from "@/widgets";

import { Button } from "@/shared";
import { ArrowRight, CodeSquare, CodeXml, PowerCircle } from "lucide-react";

interface CategoryWidget {
  path: string;
  icon: React.ReactNode;
  label: string;
  desc1: string;
  desc2: string;
  btnText: string;
}

const counter = atom(0);
const thema = atom("light");
const textAtom = atom("ReadOnly Atoms");
const uppercase = atom((get) => get(textAtom).toUpperCase());

// 스타일 정의
const styleWhite = { backgroundColor: "#ffffff", color: "#000000" };
const styleBlack = { backgroundColor: "#000000", color: "#ffffff" };

function Home() {
  // Atom 정의

  const [count, setCount] = useAtom(counter);
  const [appThema, setAppThema] = useAtom(thema);

  const handleAppThema = () =>
    setAppThema(appThema === "light" ? "dark" : "light");

  const [lowercaseText, setLowercaseText] = useAtom(textAtom);
  const [uppercaseText] = useAtom(uppercase); // 읽기 전용

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLowercaseText(event.target.value);
  };

  const CATEGORY_WIDGETS: CategoryWidget[] = [
    {
      path: "/dashboard",
      icon: (
        <Button size={"icon"} className="bg-[#F0E1F9] hover:bg-[#F0E1F9]">
          <PowerCircle className="w-[22px] h-[22px] text-[#9d34da]" />
        </Button>
      ),
      label: "About Me",
      desc1: "제가 누군지 궁금하시다면",
      desc2: "여기를 살펴 보세요",
      btnText: "자세히 보기",
    },
    {
      path: "/dashboard",
      icon: (
        <Button size={"icon"} className="bg-[#FCE9E8] hover:bg-[#FCE9E8]">
          <CodeXml className="w-[22px] h-[22px] text-[#ea4e43]" />
        </Button>
      ),
      label: "React",
      desc1: "보시는 웹 애플리케이션은",
      desc2: "리액트로 개발되었습니다.",
      btnText: "자세히 보기",
    },
    {
      path: "/dashboard",
      icon: (
        <Button size={"icon"} className="bg-[#f7f6d0] hover:bg-[#f7f6d0]">
          <CodeXml className="w-[22px] h-[22px] text-[#a78944]" />
        </Button>
      ),
      label: "SCSS",
      desc1: "보시는 웹 애플리케이션은",
      desc2: "SCSS로 개발되었습니다.",
      btnText: "자세히 보기",
    },
    {
      path: "/dashboard",
      icon: (
        <Button size={"icon"} className="bg-[#b2d7ec] hover:bg-[#b2d7ec]">
          <CodeXml className="w-[22px] h-[22px] text-[#2c4c61]" />
        </Button>
      ),
      label: "TypeScript",
      desc1: "보시는 웹 애플리케이션은",
      desc2: "TypeScript로 개발되었습니다.",
      btnText: "자세히 보기",
    },
    {
      path: "/dashboard",
      icon: (
        <Button size={"icon"} className="bg-[#bce9c0] hover:bg-[#bce9c0]">
          <CodeXml className="w-[22px] h-[22px] text-[#3a692b]" />
        </Button>
      ),
      label: "Jotai",
      desc1: "보시는 웹 애플리케이션은",
      desc2: "Jotai로 개발되었습니다.",
      btnText: "자세히 보기",
    },
  ];

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
              <img src="/logo.svg" alt="" className="h-10 mb-3 mr-[1px]" />
              <span className="scroll-m-20 text-xl font-medium tracking-tight">
                는 리액트 기초과정 프로젝트
              </span>
            </p>
            <img src="/intro.svg" alt="" className="mt-12" />
          </div>
          <section className={styles.page__container__section}>
            {/* 메뉴 카테고리 카드 컴포넌트 UI 삽입 부분 */}

            {CATEGORY_WIDGETS.map((item: CategoryWidget) => {
              return <WidgetCategory data={item} />;
            })}
          </section>

          <div
            style={appThema === "light" ? styleWhite : styleBlack}
            className={styles.page__container__footer}
          >
            <div className="flex items-center justify-center">
              <div>
                <Button
                  className="flex items-center justify-center"
                  onClick={() => setCount((c) => c + 1)}
                >
                  <span className="mr-2">Counter : {count}</span>
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </div>
              <div>
                <Button
                  style={appThema === "light" ? styleBlack : styleWhite}
                  className="flex items-center justify-center"
                  onClick={handleAppThema}
                >
                  {appThema === "light"
                    ? "다크모드로 변경"
                    : "라이트모드로 변경"}
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </div>
              <div>
                <input
                  type="text"
                  value={lowercaseText}
                  onChange={handleChange}
                />
                <h1>{uppercaseText}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
