import axios from "axios";
import { atom } from "jotai";
import {
  AstronomyPhotoOfTodayType,
  AstronomyEpic,
  NASAImageAndVideoLibraryType,
  TData,
} from "@/types";

const API_KEY = "f6VDD5i85BlLVtFaKgBUg04guCRcf28JVgOKyEvz";

// 오늘의 천문사진 API 조회
export const astronomyPhotoOfTodayAtom = atom(
  async (): Promise<AstronomyPhotoOfTodayType> => {
    // 비동기 작업
    try {
      const result = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
      );

      if (result.status != 200) throw new Error("API 호출 실패");
      else return result.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

// NASA 이미지 및 비디오 라이브러리 API 조회
export const nasaImageAndVideoLibraryAtom = atom(
  async (): Promise<NASAImageAndVideoLibraryType> => {
    // 비동기 작업
    try {
      const result = await axios.get(
        `https://images-api.nasa.gov/search?q=orion`
      );

      if (result.status != 200) throw new Error("API 호출 실패");
      else return result.data.collection.items[5].data[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

// 지구 다색 이미지 카메라 API 조회
export const astronomyEpicAtom = atom(async (): Promise<AstronomyEpic> => {
  // 비동기 작업
  try {
    const result = await axios.get(
      `https://api.nasa.gov/EPIC/api/natural/date/2024-11-01/?api_key=${API_KEY}`
    );

    if (result.status != 200) throw new Error("API 호출 실패");
    else return result.data[1];
  } catch (error) {
    console.error(error);
    throw error;
  }
});

// 화성 탐사차 사진 API 조회
export const marsRoverPhotosAtom = atom(async (): Promise<TData> => {
  // 비동기 작업
  try {
    const result = await axios.get(
      `https://api.nasa.gov/planetary/apod?start_date=2024-10-10&end_date=2024-11-01&api_key=${API_KEY}`
    );

    if (result.status != 200) throw new Error("API 호출 실패");
    else return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
