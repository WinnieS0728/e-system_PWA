import { browserType, deviceType } from "./web support";

import computer_chrome_download from "@img/download/com chrome.png";
import computer_edge_download from "@img/download/com edge.png";
import phone_chrome_download from "@img/download/phone chrome.jpg";
import phone_edge_download from "@img/download/phone edge.jpg";
import phone_safari_download from "@img/download/phone safari.png";
import phone_safari_download_2 from "@img/download/phone safari -2.jpg";

export type downloadType = {
  name: browserType;
  imgSrc: string[];
  description: string;
};

export const downloadData: Record<deviceType, downloadType[]> = {
  computer: [
    {
      name: "chrome",
      imgSrc: [computer_chrome_download],
      description: "點擊網址列右邊電腦下載按鈕, 下載後即可使用。",
    },
    {
      name: "edge",
      imgSrc: [computer_edge_download],
      description: "點擊網址列右邊電腦下載按鈕, 下載後即可使用。",
    },
    {
      name: "firefox",
      imgSrc: [],
      description: "未測試",
    },
    {
      name: "safari",
      imgSrc: [],
      description: "尚不支援",
    },
  ],
  phone: [
    {
      name: "chrome",
      imgSrc: [phone_chrome_download],
      description: "點擊右上方開啟選項後, 點擊 '加到主畫面'。",
    },
    {
      name: "edge",
      imgSrc: [phone_edge_download],
      description: "點擊右下角開啟選項後, 於第二頁, 點擊 '新增至電話'。",
    },
    {
      name: "firefox",
      imgSrc: [],
      description: "未測試",
    },
    {
      name: "safari",
      imgSrc: [phone_safari_download, phone_safari_download_2],
      description: "點擊下方開啟選項後,  點擊 '加入主畫面'。",
    },
  ],
};
