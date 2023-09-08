// import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Intro } from "./pages/intro";
import { ComputerDownload } from "./pages/computer";
import { PhoneDownload } from "./pages/phone";

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
      <BrowserRouter basename='e-system_PWA/dist'>
        <Routes>
          <Route
            path='/'
            element={<Intro />}
          >
            <Route
              index
              // path='computer'
              element={<ComputerDownload />}
            />
            <Route
              path='phone'
              element={<PhoneDownload />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
