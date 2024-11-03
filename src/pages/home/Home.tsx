import styles from './page.module.scss';

import CommonHeader from '@/components/organisms/header/CommonHeader';
import WidgetCategory from '@/components/molecules/home/widget-category/WidgetCategory';
// import { Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowRight, CodeXml, PowerCircle } from 'lucide-react';

interface CategoryWidget {
    path: string;
    icon: React.ReactNode;
    label: string;
    desc1: string;
    desc2: string;
    btnText: string;
}

function Home() {
    const CATEGORY_WIDGETS: CategoryWidget[] = [
        {
            path: '/dashboard',
            icon: (
                <Button size={'icon'} className="bg-[#F0E1F9] hover:bg-[#F0E1F9]">
                    <PowerCircle className="w-[22px] h-[22px] text-[#9d34da]" />
                </Button>
            ),
            label: 'About Me',
            desc1: '제가 누군지 궁금하시다면',
            desc2: '여기를 살펴 보세요',
            btnText: '자세히 보기',
        },
        {
            path: '/dashboard',
            icon: (
                <Button size={'icon'} className="bg-[#FCE9E8] hover:bg-[#FCE9E8]">
                    <CodeXml className="w-[22px] h-[22px] text-[#ea4e43]" />
                </Button>
            ),
            label: 'React',
            desc1: '보시는 웹 애플리케이션은',
            desc2: '리액트로 개발되었습니다.',
            btnText: '자세히 보기',
        },
        {
            path: '/dashboard',
            icon: (
                <Button size={'icon'} className="bg-[#f7f6d0] hover:bg-[#f7f6d0]">
                    <CodeXml className="w-[22px] h-[22px] text-[#a78944]" />
                </Button>
            ),
            label: 'SCSS',
            desc1: '보시는 웹 애플리케이션은',
            desc2: 'SCSS로 개발되었습니다.',
            btnText: '자세히 보기',
        },
        {
            path: '/dashboard',
            icon: (
                <Button size={'icon'} className="bg-[#b2d7ec] hover:bg-[#b2d7ec]">
                    <CodeXml className="w-[22px] h-[22px] text-[#2c4c61]" />
                </Button>
            ),
            label: 'TypeScript',
            desc1: '보시는 웹 애플리케이션은',
            desc2: 'TypeScript로 개발되었습니다.',
            btnText: '자세히 보기',
        },
        {
            path: '/dashboard',
            icon: (
                <Button size={'icon'} className="bg-[#bce9c0] hover:bg-[#bce9c0]">
                    <CodeXml className="w-[22px] h-[22px] text-[#3a692b]" />
                </Button>
            ),
            label: 'Jotai',
            desc1: '보시는 웹 애플리케이션은',
            desc2: 'Jotai로 개발되었습니다.',
            btnText: '자세히 보기',
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
                            <img src="src/assets/logo.svg" alt="" className="h-10 mb-3 mr-[1px]" />
                            <span className="scroll-m-20 text-xl font-medium tracking-tight">
                                는 리액트 기초과정 프로젝트
                            </span>
                        </p>
                        <img src="src/assets/intro.svg" alt="" className="mt-12" />
                    </div>
                    <section className={styles.page__container__section}>
                        {/* 메뉴 카테고리 카드 컴포넌트 UI 삽입 부분 */}

                        {CATEGORY_WIDGETS.map((item: CategoryWidget) => {
                            return <WidgetCategory data={item} />;
                        })}
                    </section>
                </div>
            </div>
        </>
    );
}

export default Home;
