import {
  astronomyPhotoOfTodayAtom,
  nasaImageAndVideoLibraryAtom,
  astronomyEpicAtom,
  marsRoverPhotosAtom,
} from "@/store/atoms/dashboard";
import { TData } from "@/types";

// CSS
import styles from "./page.module.scss";
// Components
import { CommonHeader, WidgetSummary } from "@/widgets";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Card,
  Badge,
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
  Button,
} from "@/shared";

import { Image } from "lucide-react";
import { useAtom } from "jotai";

function Dashboard() {
  // 오늘의 천문사진 API 조회
  // 반응성을 갖게되는 useState API 호출 시 setAstronomyPhotoOfToday > astronomyPhotoOfToday에 저장
  const [astronomyPhotoOfToday] = useAtom(astronomyPhotoOfTodayAtom);
  // NASA 이미지 및 비디오 라이브러리 API 조회
  const [NASAImageAndVideoLibrary] = useAtom(nasaImageAndVideoLibraryAtom);
  // 지구 다색 이미지 카메라 API 조회
  const [epic] = useAtom(astronomyEpicAtom);
  // 화성 탐사차 사진 API 조회
  const [mars] = useAtom(marsRoverPhotosAtom);

  // ============================================================================================

  // ============================================================================================

  return (
    <>
      <CommonHeader />
      <div className={styles.page}>
        <div className={styles.page__container}>
          <section className={styles.page__container__intro}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              NASA API + Vite
            </h1>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
              React Project Dashboard
            </h1>
            <img
              src="src/assets/dashboard.svg"
              alt=""
              className={styles.image}
            />
          </section>
          <section className={`${styles.page__container__contents} shadow-sm`}>
            <div className={styles.header}>
              <div className={styles.header__dots}>
                <div className="w-[14px] h-[14px] bg-neutral-300 rounded-full"></div>
                <div className="w-[14px] h-[14px] bg-neutral-300 rounded-full"></div>
                <div className="w-[14px] h-[14px] bg-neutral-300 rounded-full"></div>
              </div>
            </div>
            <div className={styles.body}>
              <div className={styles[`body__widget-box`]}>
                <WidgetSummary
                  label={"오늘의 천문사진"}
                  data={astronomyPhotoOfToday}
                />
                <WidgetSummary
                  label={"NASA 이미지 & 비디오 라이브러리"}
                  data={NASAImageAndVideoLibrary}
                />
                <WidgetSummary label={"지구 다색 이미징 카메라"} data={epic} />
              </div>
              <Card>
                <Table className="flex flex-col w-full h-full rounded-md">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-sm text-center w-[80px]">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant={"ghost"} size={"icon"}>
                                <Image className="w-[18px] h-[18px]"></Image>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                              <p className="font-normal">이미지</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableHead>
                      <TableHead className="font-normal text-sm text-center w-[224px]">
                        Title
                      </TableHead>
                      <TableHead className="font-normal text-sm text-center w-[224px]">
                        Date
                      </TableHead>
                      <TableHead className="font-normal text-sm text-center w-[224px]">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant={"ghost"} size={"icon"}>
                                <p>Version</p>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="font-normal">서비스 버전</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableHead>
                      <TableHead className="font-normal text-sm text-center w-[224px]">
                        Media Type
                      </TableHead>
                      <TableHead className="font-normal text-sm text-center w-[224px]">
                        Copyright
                      </TableHead>
                      <TableHead className="font-normal text-sm text-center w-[224px]">
                        License
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mars.map((item: TData) => {
                      return (
                        <TableRow
                          className="flex flex-row cursor-pointer"
                          key={item.title}
                        >
                          <TableCell className="flex items-center justify-center w-[80px] p-2">
                            {item.media_type === "video" ? (
                              <Image className="w-10 h-10 text-neutral-300" />
                            ) : (
                              <img
                                src={item.url}
                                alt=""
                                className="w-12 h-12 rounded-md"
                              />
                            )}
                          </TableCell>
                          <TableCell className="flex items-center justify-center w-[224px] p-2">
                            {item.title}
                          </TableCell>
                          <TableCell className="flex items-center justify-center w-[224px] p-2">
                            {item.date}
                          </TableCell>
                          <TableCell className="flex items-center justify-center w-[224px] p-2">
                            <Badge
                              variant={"outline"}
                              className="px-3 py-1 rounded-md"
                            >
                              {item.service_version}
                            </Badge>
                          </TableCell>
                          <TableCell className="flex items-center justify-center w-[224px] p-2">
                            <Badge
                              variant={"outline"}
                              className="px-3 py-1 rounded-md"
                            >
                              {item.media_type}
                            </Badge>
                          </TableCell>
                          <TableCell className="flex items-center justify-center w-[224px] p-2">
                            {item.copyright ? item.copyright : "-"}
                          </TableCell>
                          <TableCell className="flex items-center justify-center w-[224px] p-2">
                            HanGyu
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
