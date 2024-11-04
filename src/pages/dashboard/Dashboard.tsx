import axios from "axios";

import CommonHeader from "@/components/organisms/header/CommonHeader";
import styles from "./page.module.scss";
import WidgetSummary from "@/components/molecules/dashboard/widget-summary/WidgetSummary";
import { useEffect, useState } from "react";
import { NASAImageAndVideoLibraryType } from "@/types/astronomy-imageAndVideo";
import { AstronomyPhotoOfTodayType } from "@/types/astronomy-today";
import { AstronomyEpic } from "@/types/astronomy-epic";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

// NASA_API_KEY
const API_KEY = "f6VDD5i85BlLVtFaKgBUg04guCRcf28JVgOKyEvz";

interface TData {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

function Dashboard() {
  // 오늘의 천문사진 API 조회
  // 반응성을 갖게되는 useState API 호출 시 setAstronomyPhotoOfToday > astronomyPhotoOfToday에 저장
  const [astronomyPhotoOfToday, setAstronomyPhotoOfToday] =
    useState<AstronomyPhotoOfTodayType>({
      date: "",
      explanation: "",
      hdurl: "",
      media_type: "",
      service_version: "",
      title: "",
      url: "",
    });

  const fetchAstronomyPhotoOfToday = async () => {
    const API_KEY = "f6VDD5i85BlLVtFaKgBUg04guCRcf28JVgOKyEvz";
    const result = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );
    console.log(result);
    setAstronomyPhotoOfToday(result.data);
  };

  // NASA 이미지 및 비디오 라이브러리 API 조회
  // <타입> 설정
  const [NASAImageAndVideoLibrary, setNASAImageAndVideoLibrary] =
    useState<NASAImageAndVideoLibraryType>({
      center: "",
      date_created: "",
      description: "",
      description_508: "",
      // 배열이 아닐 경우 오류
      keywords: [],
      media_type: "",
      nasa_id: "",
      photographer: "",
      secondary_creator: "",
      title: "",
    });

  const fetchNASAImageAndVideoLibrary = async () => {
    const result = await axios.get(
      `https://images-api.nasa.gov/search?q=orion`
    );

    setNASAImageAndVideoLibrary(result.data.collection.items[5].data[0]);
  };

  // 지구 다색 이미지 카메라 API 조회
  const [epic, setEpic] = useState<AstronomyEpic>({
    attitude_quaternions: { q0: 0, q1: 0, q2: 0, q3: 0 },
    caption: "",
    centroid_coordinates: { lat: 0, lon: 0 },
    coords: {
      attitude_quaternions: { q0: 0, q1: 0, q2: 0, q3: 0 },
      centroid_coordinates: { lat: 0, lon: 0 },
      dscovr_j2000_position: { x: 0, y: 0, z: 0 },
      lunar_j2000_position: { x: 0, y: 0, z: 0 },
      sun_j2000_position: { x: 0, y: 0, z: 0 },
    },
    date: "",
    dscovr_j2000_position: { x: 0, y: 0, z: 0 },
    identifier: "",
    image: "",
    lunar_j2000_position: { x: 0, y: 0, z: 0 },
    sun_j2000_position: { x: 0, y: 0, z: 0 },
    version: "",
  });

  //https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY

  const fetchEpicApi = async () => {
    const result = await axios.get(
      `https://api.nasa.gov/EPIC/api/natural/date/2024-11-01/?api_key=${API_KEY}`
    );

    console.log("EpicApi : ", result);

    setEpic(result.data[1]);
  };

  // ============================================================================================
  // 화성 탐사차 사진 API 조회

  const [mars, setMars] = useState<TData[]>([]);

  const fetchMarsApi = async () => {
    const API_KEY = "f6VDD5i85BlLVtFaKgBUg04guCRcf28JVgOKyEvz";
    const result = await axios.get(
      `https://api.nasa.gov/planetary/apod?start_date=2024-10-10&end_date=2024-11-01&api_key=${API_KEY}`
    );
    console.log("mars result : ", result);

    setMars(result.data);
  };

  // ============================================================================================

  // 화면이 렌더링 될 때, 실행
  useEffect(() => {
    fetchAstronomyPhotoOfToday();
    fetchNASAImageAndVideoLibrary();
    fetchEpicApi();
    fetchMarsApi();
  }, []);

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
