import install_img from "./assets/images/install.png";

export const Intro = () => {
  return (
    <>
      <header>
        <h1>a page link to e-system</h1>
      </header>
      <main>
        <p>
          you are run in web mode please download app and open with app. (not
          support Mac safari yet)
        </p>
        <img
          src={install_img}
          alt='install image'
        />
      </main>
      <footer>last update : 2023-09-05, created by WinnieS</footer>
    </>
  );
};
