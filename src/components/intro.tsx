import { SupportTable } from "./support table";

export const Intro = () => {
  return (
    <>
      <header>
        <h1 className='text-center text-3xl py-4'>
          E-system App <span className='whitespace-nowrap'>使用介紹</span>
        </h1>
      </header>
      <main className='pagePadding'>
        <p>
          本網頁為下載 E-system App 的網頁, 並無法直接使用 E-system, <br />
          如需使用網頁版, 請點擊
          <a
            href='https://esys.orange-electronic.com/?url=%2FDefault%2FIndex'
            className='p-2 text-blue-500 underline underline-offset-4'
          >
            此連結
          </a>
        </p>
        <section>
          <h2>下載方式</h2>
        </section>
        <section>
          <h2>瀏覽器支援</h2>
          <SupportTable type='computer' />
          <SupportTable type='phone' />
        </section>
      </main>
    </>
  );
};
