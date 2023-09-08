import { deviceType } from "@/data/web support";
import { DownloadCard } from "./download card";

interface props {
  device: deviceType;
}
export function Download({ device }: props) {
  return (
    <>
      <article className="grid gap-2">
        <DownloadCard
          type={device}
          browser='chrome'
        />
        <DownloadCard
          type={device}
          browser='edge'
        />
        <DownloadCard
          type={device}
          browser='firefox'
        />
        <DownloadCard
          type={device}
          browser='safari'
        />
      </article>
    </>
  );
}
