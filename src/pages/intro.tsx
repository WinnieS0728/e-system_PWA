import { Outlet } from "react-router-dom";
import { SupportTable } from "../components/support table";
import { NavBar } from "@/layouts/nav";

export const Intro = () => {
  return (
    <>
      <header>
        <h1 className='text-center text-3xl py-4'>
          E-system App <span className='whitespace-nowrap'>使用介紹</span>
        </h1>
      </header>
      <main className='pagePadding flex flex-col gap-4'>
        <section>
          本網頁為下載 E-system App 的網頁, 無法直接使用 E-system, <br />
          如需使用網頁版, 請點擊
          <a
            href='https://esys.orange-electronic.com/?url=%2FDefault%2FIndex'
            className='p-2 text-blue-500 underline underline-offset-4'
          >
            此連結
          </a>
        </section>
        <section>
          <h2 className='title'>下載方式</h2>
          <NavBar />
          <Outlet />
        </section>
        <section>
          <h2 className='title'>瀏覽器支援</h2>
          <div className="p-2 flex flex-col gap-2 md:flex-row">
            <SupportTable type='computer' />
            <SupportTable type='phone' />
          </div>
        </section>
      </main>
      <footer className="text-center py-4">
        Copyright © 2023 Orange Electronic.
      </footer>
    </>
  );
};
