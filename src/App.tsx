// import { useLayoutEffect } from "react";
import { Intro } from "./components/intro";

function App() {
  // useLayoutEffect(() => {
  //   if (window.matchMedia("(display-mode: standalone)").matches) {
  //     location.replace(
  //       "https://esys.orange-electronic.com/?url=%2FDefault%2FIndex"
  //     );
  //   }
  // }, []);
  return (
    <>
      <Intro />
    </>
  );
}

export default App;
