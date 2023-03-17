import { Route, Routes } from "react-router-dom";
import Home from "./loguin";

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/log" element={<Home />} />
    </Routes>
  );
}
