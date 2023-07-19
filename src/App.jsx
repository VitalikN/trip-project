import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { Suspense } from "react";
import { Loader } from "./Components/Loader/Loader";

function App() {
  return (
    <>
    <Suspense fallback={<><Loader/></>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
