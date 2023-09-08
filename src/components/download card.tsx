import { downloadData, downloadType } from "@/data/download";
import { browserType, deviceType } from "@/data/web support";
import { Fragment, useRef, useState } from "react";
import { Icons } from "./UI/icons";
import { cn } from "@/lib/utils/cn";

interface props {
  type: deviceType;
  browser: browserType;
}
export function DownloadCard({ type, browser }: props) {
  const data = downloadData[`${type}`].find(
    (data) => data.name === browser
  ) as downloadType;

  const [open, setOpen] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const height = elementRef.current?.scrollHeight;

  return (
    <>
      <article
        className='ring-2 rounded-md ring-stone-400 cursor-pointer'
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <h3
          className={cn("text-xl px-4 py-2 flex items-center justify-between", {
            "border-b-2": open,
          })}
        >
          {data.name}
          <Icons.extend_arrow
            className={cn(
              "text-OrangeMain-400 transition-transform duration-300",
              {
                "-rotate-180": open,
              }
            )}
          />
        </h3>
        <div
          className={cn("flex flex-col items-center gap-2 px-4", {
            "p-4": open,
          })}
          ref={elementRef}
          style={{
            maxHeight: open ? (height as number) + 32 : 0,
            overflowY: "hidden",
            transition: "max-height .3s ease, padding .5s",
          }}
        >
          <p>{data.description}</p>
          <div className='flex gap-2 items-center'>
            {data.imgSrc.map((src, index) => (
              <Fragment key={index}>
                {index > 0 && <Icons.next />}
                <div className='relative'>
                  <img
                    src={src}
                    alt='下載方式說明圖片'
                    className="max-w-sm"
                  />
                  <span className='absolute -top-2 -left-2 bg-yellow-500 w-6 aspect-square rounded-full flex justify-center items-center'>
                    {index + 1}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
