import { Route, Routes } from "react-router-dom";
import NavBar from "../componentes/NavBar";
import Home from "./Home";
import Body from "./body";
import InitialFocus from "./components/modal";
import LoguinPage from "./loguin";
import Menu from "./menu";
import Reps from "./repeticao";

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/log" element={<LoguinPage />} />
      <Route path="/main" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/nav" element={<NavBar />} />
      <Route path="/body" element={<Body />} />
      <Route path="/repeticao" element={<Reps />} />
      <Route path="/modal" element={<InitialFocus />} />
    </Routes>
  );
}
