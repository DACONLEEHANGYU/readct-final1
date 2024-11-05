// CSS
import styles from "./widget-summary.module.scss";

// Components
import { Badge, Card } from "@/shared";
import { Rocket, Telescope, Earth } from "lucide-react";
import {
  AstronomyPhotoOfTodayType,
  NASAImageAndVideoLibraryType,
  AstronomyEpic,
} from "@/types";

import { Link } from "react-router-dom";

interface Props {
  label: string;
  // 유니온 타입
  data:
    | AstronomyPhotoOfTodayType
    | NASAImageAndVideoLibraryType
    | AstronomyEpic;
}

function WidgetSummary({ label, data }: Props) {
  // 타입 좁히기 함수 정의
  // 데이터를 가지고 ui 분기처리가 가능하다.

  const isAstronomyPhotoOfToday = (
    data: any
  ): data is AstronomyPhotoOfTodayType => {
    return (data as AstronomyPhotoOfTodayType).date != undefined;
  };

  const isNASAImageAndVideoLibraryType = (
    data: any
  ): data is NASAImageAndVideoLibraryType => {
    return (data as NASAImageAndVideoLibraryType).nasa_id != undefined;
  };

  const isAstronomyEpic = (data: any): data is AstronomyEpic => {
    return (data as AstronomyEpic).caption != undefined;
  };

  return (
    <Card className={styles.card}>
      <div className={styles.card__header}>
        <span className={styles.card__header__label}>{label}</span>
        {label == "오늘의 천문사진" && (
          <Telescope className="w-5 h-5 text-neutral-600"></Telescope>
        )}
        {label == "NASA 이미지 & 비디오 라이브러리" && (
          <Rocket className="w-5 h-5 text-neutral-600"></Rocket>
        )}
        {label == "지구 다색 이미징 카메라" && (
          <Earth className="w-5 h-5 text-neutral-600"></Earth>
        )}
      </div>
      {label === "오늘의 천문사진" && isAstronomyPhotoOfToday(data) && (
        <div className={styles[`card__info-box`]}>
          <div className={styles[`card__info-box__column`]}>
            <Badge className="rounded-sm bg-neutral-600">날짜</Badge>
            <span className="text-sm">{data.date}</span>
          </div>
          <div className={styles[`card__info-box__column`]}>
            <Badge className="rounded-sm bg-neutral-600">제목</Badge>
            <span className="text-sm">{data.title}</span>
          </div>
          <div className={styles[`card__info-box__column`]}>
            <Badge className="rounded-sm bg-neutral-600">미디어 타입</Badge>
            <span className="text-sm">{data.media_type}</span>
          </div>
        </div>
      )}
      {label === "NASA 이미지 & 비디오 라이브러리" &&
        isNASAImageAndVideoLibraryType(data) && (
          <div className={styles[`card__info-box`]}>
            <div className={styles[`card__info-box__column`]}>
              <Badge className="rounded-sm bg-neutral-600">NASA ID</Badge>
              <span className="text-sm">{data.nasa_id}</span>
            </div>
            <div className={styles[`card__info-box__column`]}>
              <Badge className="rounded-sm bg-neutral-600">포토그래퍼</Badge>
              <span className="text-sm">{data.photographer}</span>
            </div>
            <div className={styles[`card__info-box__column`]}>
              <Badge className="rounded-sm bg-neutral-600">제목</Badge>
              <span className="text-sm">{data.title}</span>
            </div>
          </div>
        )}
      {label === "지구 다색 이미징 카메라" && isAstronomyEpic(data) && (
        <div className={styles[`card__info-box`]}>
          <div className={styles[`card__info-box__column`]}>
            <Badge className="rounded-sm bg-neutral-600">중심좌표</Badge>
            <span className="text-sm">
              {data.centroid_coordinates.lat} / {data.centroid_coordinates.lon}
            </span>
          </div>
          <div className={styles[`card__info-box__column`]}>
            <Badge className="rounded-sm bg-neutral-600">
              이미지 파일 이름
            </Badge>
            <span className="text-sm">{data.image}</span>
          </div>
          <div className={styles[`card__info-box__column`]}>
            <Badge className="rounded-sm bg-neutral-600">
              이미지 파일 링크
            </Badge>
            <span className="text-sm">
              <Link
                to={`https://epic.gsfc.nasa.gov/archive/natural/${
                  data.date.split(" ")[0].split("-")[0]
                }/${data.date.split(" ")[0].split("-")[1]}/${
                  data.date.split(" ")[0].split("-")[2]
                }/png/${data.image}.png`}
                target="_blank"
                className="text-blue-600"
              >
                이미지 파일 보기
              </Link>
            </span>
          </div>
        </div>
      )}
    </Card>
  );
}

export { WidgetSummary };
