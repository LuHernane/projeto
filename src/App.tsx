import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import LoguinPage from "./loguin";
import Menu from "./menu";

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/log" element={<LoguinPage />} />
      <Route path="/main" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}
