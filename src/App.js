import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home, Login, Public, Personal } from "./containers/public/";
import { Route, Routes } from "react-router-dom";
import path from "./ultis/paths";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBanner } from "./redux/bannerSlice";
import * as apis from "./apis";

function App() {
  const dispatch = useDispatch()

  //lấy data là dispatch
  useEffect(() => {
    const fetchDataHome = async () => {
      const response = await apis.getHome();
      dispatch(getBanner(response.data.data.items));
    };
    fetchDataHome();
  }, []);

  return (
    <div>
      <div className="bg-[#363636]">
        <Routes>
          <Route path={path.Public} element={<Public />}>
            <Route path={path.Home} element={<Home />} />
            <Route path={path.Login} element={<Login />} />
            <Route path={path.My_music} element={<Personal />} />
            <Route path={path.Star} element={<Home />} />
          </Route>
        </Routes>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
